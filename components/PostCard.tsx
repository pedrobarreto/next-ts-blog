import Link from 'next/link';

const PostCard = ({post}): JSX.Element => (

  <div className="posts-grid">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
      <p>{post.title}</p>
      <div>
  <img src={post.cover_image} alt="" />
  </div>
      </div>
)


export default PostCard