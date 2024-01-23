import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { requestPosts } from '../services/requests';
import BlogList from '../components/BlogList';

// type Post = {
//   // Define the structure of your Post type
//   // Adjust the properties based on the actual structure of a post
//   title: string;
//   content: string;
//   // Add other properties as needed
// };

type HomeProps = {
  posts: any[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await requestPosts('/posts', { pagination: 1 });
  return { props: { posts }, revalidate: 60 }; // Set a revalidation period (in seconds)
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <main className="pt-6 container mx-auto">
      <BlogList posts={posts} />
    </main>
  );
};

export default Home;
