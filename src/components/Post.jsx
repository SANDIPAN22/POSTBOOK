import { useContext } from "react";
import {postListContext} from "../context-store/post-context"
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPenClip } from "react-icons/fa6";

const Post = ({item, onEditPostClick}) => {
  const {handleDeletePost, handleIncLike} = useContext(postListContext)
    return <>
    <div className="card postbook-post-card" >
  
  <div className="card-body">
    
    <h5 className="card-title inline-div" >{item.title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <AiTwotoneDelete onClick={()=> handleDeletePost(item.id)}/>
    </span>
    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success">
    <FaPenClip onClick={()=> onEditPostClick(item.id)}/>
    </span>
    </h5> 
    {item.tags.map((tag, i) => tag !== '' && <span key={i} className="badge rounded-pill bg-info text-dark postbook-post-tags">#{tag}</span>)}
    <hr />

    <p className="card-text">{item.body}</p>
   
    <button type="button" className="btn btn-primary inline-div" onClick={()=> handleIncLike(item.id)}>
      Like <span className="badge bg-danger" >{item.reactions}</span>
    </button>
    <div className="post-author-credit">By author{item.userId}</div>
  </div>
</div>
    </>
}

export default Post