import express from 'express';
import getPosts from './controllers/blogPostsController';
import bodyParser from 'body-parser';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 10000;


app.post('/posts', getPosts);
app.listen(port, () => console.log(`funcionando na porta: ${port}!`));
  