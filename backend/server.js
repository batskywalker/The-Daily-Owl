const express = require('express');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');

var gcloud_config = {
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_KEYFILE_PATH,
    credentials: {
        client_email : process.env.GCLOUD_CLIENT_EMAIL,
        private_key : process.env.GCLOUD_PRIVATE_KEY
    }
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
    const [files] = await storage.bucket('the-daily-owl-articles').getFiles();
    const fileNames = files.map(file => file.name);
    res.json({ files: fileNames });
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});