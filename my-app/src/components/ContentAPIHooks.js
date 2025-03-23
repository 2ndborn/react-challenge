import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'
import PostItemAPI from './PostItemAPI'

function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = async () => {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
    console.log(response)
    const fetchedPosts = response.data.hits;
    console.log(fetchedPosts)
    setIsLoaded(true)
    setPosts(fetchedPosts)
    setSavedPosts(fetchedPosts)
  }

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter((post) =>
      post.user.toLowerCase().includes(name))
    setPosts(filteredPosts)
  }

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <label htmlFor='searchInput'>Search: </label>
        <input
          onChange={(e) => handleChange(e)}
          type='search'
          id='searchInput'
          placeholder='By Author'
        />
        <h4>Posts found: {posts.length}</h4>
      </div>
      <div className={css.SearchResults}>
        {isLoaded ? (
          <PostItemAPI savedPosts={posts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default ContentAPIHooks