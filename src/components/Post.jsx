const Post = ({item}) => {
  console.log(item)
    return <>
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.body}</p>
    <a href="#" className="btn btn-primary">{item.author}</a>
  </div>
</div>
    </>
}

export default Post