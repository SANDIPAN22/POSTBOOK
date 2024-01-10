import { useContext } from "react";
import {postListContext} from "../context-store/post-context"
import { AiTwotoneDelete } from "react-icons/ai";

const Post = ({item}) => {
  const {handleDeletePost, handleIncLike} = useContext(postListContext)
    return <>
    <div className="card postbook-post-card" >
  
  <div className="card-body">
    
    <h5 className="card-title inline-div" >{item.title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <AiTwotoneDelete onClick={()=> handleDeletePost(item.id)}/>
    </span></h5> 
    {item.tags.map(tag => <span className="badge rounded-pill bg-info text-dark postbook-post-tags">#{tag}</span>)}
    <hr />

    <p className="card-text">{item.body}</p>
   
    <button type="button" className="btn btn-primary inline-div" onClick={()=> handleIncLike(item.id)}>
      Like <span className="badge bg-danger" >{item.reactions}</span>
    </button>
    <div className="post-author-credit">By {item.author} at {item.dateTime}</div>
  </div>
</div>
    </>
}

export default Post