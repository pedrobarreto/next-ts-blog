import type { NextPage } from 'next'
import React, { useState } from 'react';
import { GetServerSideProps } from 'next'
import { getDevApi } from '../services/DevApi'
import PostCard from '../components/PostCard'
import InfiniteScroll from "react-infinite-scroll-component";


const Home: NextPage = ({posts}) => {
  const [data, setPosts] = useState(posts);
  const [pagination, setPagination] = useState(2)
  // const [hasMore, setHasMore] = useState(true);
  
  const handleClick = async () => {
    setPagination(pagination + 1)
    const newPosts = await getDevApi('articles', pagination)
    console.log('foi');
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
  
      <main className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post, index) => (
            <PostCard key={index} post={post} />
            
          ))}
    
          </div>

      <footer>
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
      </footer>
      </main>

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getDevApi('articles', 1 )
  return { props: { posts } } 
}

export default Home
