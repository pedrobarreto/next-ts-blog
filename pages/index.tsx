import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { requestPosts } from '../services/requests';
import BlogList from '../components/BlogList';


const Home: NextPage = ({posts}:any) => {

  return (
  
    <main className=" pt-6 container mx-auto">
     <BlogList  posts={posts} />
   </main>
      

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await requestPosts('/posts')
  return { props: { posts } } 
}

export default Home
