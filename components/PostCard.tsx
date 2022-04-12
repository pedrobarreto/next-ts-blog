import Link from 'next/link';

const PostCard = ({post}): JSX.Element => {
    
    const handleImage = () => {
        if(!post.cover_image){
            post.cover_image = "https://res.cloudinary.com/practicaldev/image/fetch/s--60PwhrVB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ot0ox673tyiingfdiuc3.gif"
        }
        return post.cover_image
      };

    return (
    
<div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg object-fill h-48 w-100"  src={handleImage()} alt="" />
    </a>
    <div className="p-5">
        {/* <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h5>
        </a> */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.description}
        </p>
       
    </div>
</div>

    )

    }


export default PostCard

