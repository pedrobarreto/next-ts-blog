import express from 'express';
import getPosts from './controllers/blogPostsController';

const app = express();
const port = 3001;


app.get('/posts', getPosts);
app.listen(port, () => console.log(`funcionando na posta: ${port}!`));
  