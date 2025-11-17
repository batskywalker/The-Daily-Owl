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
  credentials: gcloud_config.credentials
});

app.get('/api/files', async (req, res) => {
  try {
    const [ files ] = await storage.bucket('the-daily-owl-articles').getFiles();
    const fileNames = files.map(file => file.name);
    console.log(fileNames);
    const file = await storage.bucket('the-daily-owl-articles').file(fileNames[0]).download();
    res.json(JSON.parse(file.toString()));
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});