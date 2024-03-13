const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.status(200);
  res.send('Messenger');
});

app.listen(PORT, () => console.log(`Server on port ${PORT} was started!`));
