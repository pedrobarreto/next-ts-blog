import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { requestPosts } from '../services/requests';
import BlogList from '../components/BlogList';


const Home: NextPage = ({posts}:any) => {

  return (
  
    <main className=" pt-6 container mx-auto">
     <BlogList  posts={posts} />
   </main>
      

  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const posts = await requestPosts('/posts', {pagination: 1})
  return { props: { posts } } 
}

export default Home
