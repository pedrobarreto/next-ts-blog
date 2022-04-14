import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { getDevApi } from '../services/DevApi'
import BlogList from '../components/BlogList';


const Home: NextPage = ({posts}) => {

  return (
  
    <main className=" pt-6 container mx-auto">
     <BlogList  posts={posts} />
   </main>
      

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getDevApi('articles', 1 )
  return { props: { posts } } 
}

export default Home
