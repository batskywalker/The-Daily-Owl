const express = require('express');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');

var gcloud_config = {
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_KEYFILE_PATH
}

const app = express();
const port = 3001;

app.use(cors());

const storage = new Storage({
  projectId: gcloud_config.projectId, // set this
  keyFilename: gcloud_config.keyFilename, // set this
});

async function getArticleNames() {
  const [ files ] = await storage.bucket('the-daily-owl-articles').getFiles();
  const fileNames = files.map(file => file.name);
  console.log(fileNames);

  const articles = [];
  while (fileNames[0].includes('articles')) {
    articles.push(fileNames.shift());
  }

  console.log(articles);

  return articles;
}

async function getFile(name) {
  const file = await storage.bucket('the-daily-owl-articles').file(name).download();
  const content = JSON.parse(file.toString());
  return content;
}

app.get('/newest', async (req, res) => {
  try {
    const articles = await getArticleNames();
    const content = await getFile(articles[articles.length - 1]);

    const options = {
      destination: `../my-app/public/${content[0].image}`
    }

    await storage.bucket('the-daily-owl-articles').file(`images/${content[0].image}`).download(options);

    res.json(content);
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

app.get('/headers', async (req, res) => {
  try {
    const content = [];
    
    const volumes = await getArticleNames();

    for (let i = 1; i < volumes.length - 1; i++) {
      const file = await getFile(volumes[i]);

      content.push({
        volume: volumes[i],
        heading: file[0].heading,
        image: file[0].image
      });
    }
    res.json(content);
  } catch (error) {
    console.error('Error, so like, kys:', error);
    res.status(500).json({ error: 'haha loser'});
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});