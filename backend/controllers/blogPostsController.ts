import { getDevApi } from "../services/DevApi";

const getPosts = async (req, res) => {
  const posts = await getDevApi('articles', 1 )
  res.status(200).json(posts);
};