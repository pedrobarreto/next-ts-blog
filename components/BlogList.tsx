import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from '../components/PostCard'

const BlogList = ({posts}:any): JSX.Element => {

  const [data, setPosts] = useState(posts);
  const [pagination, setPagination] = useState(2)
  
  const handleClick = async () => {
    setPagination(pagination + 1)
    // const newPosts = await getDevApi('articles', pagination)
    // setPosts((post:any) => [...post, ...newPosts]);
  };

    return (

      <div>
 
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {data.map((post: any, index: React.Key | null | undefined) => ( 
     
            <PostCard key={index} post={post} />
             ))} 

    </div>


       <>
      <InfiniteScroll
        dataLength={data.length}
        next={handleClick}
        hasMore={true}
        loader={<h3> Carregando...</h3>}
        endMessage={<h4>Acabaram os posts</h4>}
      >
      </InfiniteScroll>
    
    </>
    </div>
  
 
    )

    }

export default BlogList

