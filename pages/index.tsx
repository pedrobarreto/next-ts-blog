import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { getDevApi } from '../services/DevApi'
import PostCard from '../components/PostCard'

const Home: NextPage = ({posts}) => {
  return (
    <main className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />

          ))}
      
      </div>
      </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getDevApi('articles')
  return { props: { posts } } //?
}

export default Home
