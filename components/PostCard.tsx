const PostCard = ({post}): JSX.Element => (

  <div className="posts-grid">
      <p>{post.title}</p>
      <div>
  <img src={post.cover_image} alt="" />
  </div>
      </div>
)


export default PostCard