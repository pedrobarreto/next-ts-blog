import { getDevApi } from "../services/DevApi";

const getPosts = async (req:any, res:any) => {
  const posts = await getDevApi('articles', 1 )
  res.status(200).json(posts);
};

export default getPosts;