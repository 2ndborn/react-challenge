import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import css from './css/Content.module.css'
import Loader from './Loader'

export class Content extends Component {
  constructor(props) {
    console.log('constructor called')
    super(props)
    this.state = {
      isLoaded: falses,
      posts: [],
    }
  }

  componentDidMount() {
    console.log('getData called')
    setTimeout(() => {
      console.log('data fetched')
      this.setState({
        isloaded: true,
        posts: savedPosts,
      })
    }, 2000)
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter((post) => 
      post.name.toLowerCase().includes(name))
    this.setState({
      posts: filteredPosts,
    })
  }

  render() {
    console.log('render called')
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <label htmlFor='searchInput'>Search: </label>
          <input 
          onChange={(event) => this.handleChange(event)}
          type='search' 
          id='searchInput' 
          placeholder='By Author'
          />
          <h4>Posts found: {this.state.posts.length}</h4>
        </div>
        <div className={css.SearchResults}>
          {this.state.isloaded ? (
            <PostItem savedPosts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    )
  }
}

export default Content