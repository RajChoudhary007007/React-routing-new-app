// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <ul className="blogList-container">
        {blogsList.map(eachList => (
          <BlogItem key={eachList.id} eachList={eachList} />
        ))}
      </ul>
    )
  }
}

export default BlogList
