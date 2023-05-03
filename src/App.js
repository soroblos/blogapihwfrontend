import { useState, useEffect } from "react";
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import './App.css';
import { Route, Routes } from "react-router-dom";

const apiURL = 'https://blog-api-project.herokuapp.com'

function App() {
  const [posts, setPosts] = useState([])

  const getBlogs = async () => {
    const response = await fetch(apiURL + '/blog/')
    const data = await response.json()
    setPosts(data.reverse())
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const handleFormSubmission = async (data, type) => {
    if (type === 'new') {
      const response = await fetch(apiURL + '/blog/', {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    } else {
      const response = await fetch(`${apiURL}/blog/${data.id}/`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    }
  }

  const deleteBlog = async (id) => {
    const response = await fetch(`${apiURL}/blog/${id}/`,
      {
        method: 'delete'
      }
    )
    getBlogs()
  }

  return (
    < div className="App" >
      <h1>Blogs</h1>
      <Routes>
        <Route
          exact
          path="/"
          element={<AllPosts posts={posts} deleteBlog={deleteBlog} />}
        />
        <Route
          path="/post/:id"
          element={<SinglePost posts={posts} />}
        />
        <Route
          path="/new"
          element={<Form handleSubmit={handleFormSubmission} buttonLabel='Add Blog' formType='new' />}
        />
        <Route
          path="/edit/:id"
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Edit Blog' formType='edit' />}
        />
      </Routes>
    </div >
  );
}

export default App;
