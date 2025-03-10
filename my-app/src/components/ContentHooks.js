import React, { useState, useEffect } from 'react'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import css from './css/Content.module.css'
import Loader from './Loader'

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([])
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true),
      setFetchedPosts(savedPosts)
    }, 2000)
  },[])

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter((post) => 
      post.name.toLowerCase().includes(name))
      setFetchedPosts({
      fetchedPostsosts: filteredPosts,
    })
  }

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <label htmlFor='searchInput'>Search: </label>
        <input 
        onChange={(event) => handleChange(event)}
        type='search' 
        id='searchInput' 
        placeholder='By Author'
        />
        <h4>Posts found: {fetchedPosts.length}</h4>
      </div>
      <div className={css.SearchResults}>
        {isLoaded ? (
          <PostItem savedPosts={fetchedPosts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default ContentHooks