
const NewsDetails = ({newsData}) => {
 const {title,_id,image_url,details}=newsData
  return (
    <div>
      <h2>News ID:{_id}</h2>
      <img src={image_url} alt="" />
    </div>
  )
}

export default NewsDetails