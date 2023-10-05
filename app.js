import express from 'express';
import ViteExpress from 'vite-express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});


ViteExpress.listen(app, port, () => console.log(`Server running on http://localhost:${port}`));
