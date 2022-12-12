// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {title, description, publishedDate} = eachList

  return (
    <>
      <li className="list-container">
        <div className="main-container">
          <div className="list-item-container">
            <h1 className="title-heading">{title}</h1>
            <h1 className=" list-publishedDate">{publishedDate}</h1>
          </div>
          <p className="description">{description}</p>
        </div>
      </li>
      <hr className="line" />
    </>
  )
}
export default BlogItem
