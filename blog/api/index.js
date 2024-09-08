const express = require('express');
const cors = require('cors');
const fsp = require('fs/promises');
const path = require('path');

const app = express();
const pathContents = '../contents';
app.use(cors());
app.use(pathContents, express.static(pathContents));

app.use('/titles', async (req, res) => {
  const fileList = await fsp.readdir(path.join(__dirname, pathContents));
  res.json(fileList);
});
app.use('/', (_, response) => response.send('<h1>get out!</h1>'));

app.listen(process.env.PORT || 5000, () => console.log('server started'));
