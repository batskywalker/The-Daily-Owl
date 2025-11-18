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

app.get('/api/files', async (req, res) => {
  try {
    const [ files ] = await storage.bucket('the-daily-owl-articles').getFiles();
    const fileNames = files.map(file => file.name);
    console.log(fileNames);
    const articles = [];
    while (fileNames[0].includes('articles')) {
      articles.push(fileNames.shift());
    }

    console.log(articles)

    const file = await storage.bucket('the-daily-owl-articles').file(articles[articles.length - 1]).download();
    const content = JSON.parse(file.toString());

    const options = {
      destination: `../my-app/public/${content[0].image}`
    }

    await storage.bucket('the-daily-owl-articles').file(`images/${content[0].image}`).download(options);

    res.json(JSON.parse(file.toString()));
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});