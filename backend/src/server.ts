import express from 'express';
import getPosts from './controllers/blogPostsController';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors)
app.use(bodyParser.json());
const port = 3001;


app.post('/posts', getPosts);
app.listen(port, () => console.log(`funcionando na porta: ${port}!`));
  