import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
    const params = useParams()

    const currentPost = useMemo(() => posts.find(post => {
        console.log(post.id, params.id)
        return post.id == params.id
    }), [params.id, posts])

    return (
        <div>
            <h1>{currentPost.title}</h1>
            <h2>{currentPost.details}</h2>
            <Link to={`/edit/${params.id}`}>
                <button>Edit Blog</button>
            </Link>
            <Link to={'/'}>
                <button>Main Menu</button>
            </Link>
        </div >
    )
};

export default SinglePost;