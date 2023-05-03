import { Link, useNavigate } from "react-router-dom";

const divStyle = {
    textAlign: 'center',
    border: '3px solid',
    margin: '10px auto',
    width: '69%'
}

const Post = ({ post, deleteBlog }) => {
    const navigate = useNavigate()
    const handleDelete = (event) => {
        event.preventDefault()
        deleteBlog(post.id)
        navigate('/')
    }
    return (
        <>

            <div style={divStyle}>
                <Link to={`/post/${post.id}`}>
                    <h1 >{post.title}</h1>
                    <h2 >{post.details}</h2>
                </Link>
                <form onSubmit={handleDelete}>
                    <input type="submit" value='Close' />
                </form>
            </div>

        </>
    )
};

export default Post;