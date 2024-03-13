const express = require('express');

const app = express();
const PORT = 3000;
const pathName = `${__dirname}/dist/index.html`;

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(pathName);
});

app.listen(PORT, () => console.log(`Server on port ${PORT} was started!`));
