import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = (props) => {
    const navigate = useNavigate()
    const params = useParams()

    const currentPost = useMemo(() => props.posts.find(post => {
        console.log(post.id, params.id)
        return post.id == params.id
    }), [params.id, props.posts])

    const [formData, setFormData] = useState(
        props.formType === 'new' ?
            {
                title: '',
                details: '',
            } :
            {
                title: currentPost.title,
                details: currentPost.details,
                id: currentPost.id
            }
    )

    const handleChange = (event) => {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    const handleSubmisson = (event) => {
        event.preventDefault()
        props.handleSubmit(formData, props.formType)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmisson}>
            <h3>Title</h3>
            <input
                type="text"
                onChange={handleChange}
                value={formData.title}
                name="title"
            />
            <h3>Details</h3>
            <input
                type="text"
                onChange={handleChange}
                value={formData.details}
                name="details"
            />
            <input type="submit" value={props.buttonLabel} />
        </form>
    )
};

export default Form;