import { getDevApi } from "../services/DevApi";

const getPosts = async (req:any, res:any) => {
  const { pagination } = req.body
  const posts = await getDevApi({ endpoint: 'articles', pagination })
  res.status(200).json(posts);
};

export default getPosts;