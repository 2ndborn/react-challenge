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
      isLoaded: false
    }
  }

  componentDidMount() {
    console.log('getData called')
    setTimeout(() => {
      console.log('data fetched')
      this.setState({
        isloaded: true
      })
    }, 2000)
  }

  render() {
    console.log('render called')
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {this.state.isloaded ? (
            <PostItem savedPosts={savedPosts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    )
  }
}

export default Content