import { createServer as createViteServer } from 'vite';
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join('dist', 'index.html'), { root: '.' });
});

app.listen(PORT, () => console.log(`Server on port ${PORT} was started!`));
