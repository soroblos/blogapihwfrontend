import { Link } from "react-router-dom";
import Post from "../components/Post";

const AllPosts = (props) => (
    <>
        <Link to='/new'>
            <button>Add New Blog</button>
        </Link>
        {props.posts.map((post) => <Post post={post} key={post.id} deleteBlog={props.deleteBlog} />
        )}
    </>
)

export default AllPosts;