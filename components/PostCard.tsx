import Image from 'next/image'
import thumb from '../utils/thumb.jpg'

const PostCard = ({post}): JSX.Element => {
    
    const handleImage = () => {
        if(!post.cover_image){
            return thumb
        }
        return post.cover_image
      };

    return (
    
<div className=" rounded-xl border-4 border-zinc-600 shadow-md dark:bg-zinc-800 hover:bg-gradient-to-r from-purple-500 to-pink-500">
<div className="object-contain h-48 w-100 relative">
  <Image
    src={handleImage()}
    alt=""
    layout="fill" 
    objectFit="fill" 
  />
</div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

            {/* <Link href={`/post/${post.slug}`}>{post.title}</Link> */}
           {post.title}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.description}
        </p>
       
    </div>
</div>

    )

    }


export default PostCard

