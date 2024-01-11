import { useRef, useContext } from "react"
import {postListContext} from "../context-store/post-context"

const EditPost = ({setSelectedTab, editPostId}) => {
  const {handleUpdatePost, latestPosts} = useContext(postListContext)
  const titleRef = useRef()
  const bodyRef = useRef()
  const tagRef = useRef()
  const postInd = latestPosts.findIndex((post) => post.id === editPostId);

  const updateFormSubmitter = () => {
    
    const newTitle = titleRef.current.value 
    const newBody = bodyRef.current.value
    const newTags = tagRef.current.value
    if (!newTitle || !newBody){
      alert(`Data missing at  ${newBody ? titleRef.current.name : bodyRef.current.name}`)
    }
    else{
      handleUpdatePost({
        title: newTitle,
        body: newBody,
        tags: newTags,
        postInd
      })
      alert("You latest Post is now published !!!!")
      setSelectedTab('home')
    }
  }

    return <>
    <div className="postbook-create-post">
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" ref={titleRef} name="Title" defaultValue={latestPosts[postInd].title}/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Content</label>
    <input type="text" className="form-control" ref={bodyRef} name="Content" defaultValue={latestPosts[postInd].body}/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Tags</label>
    <input type="text" className="form-control" ref={tagRef} name="Tags" defaultValue={latestPosts[postInd].tags.join(',')}/>
    
  </div>
  
  <button type="button" className="btn btn-primary" onClick={updateFormSubmitter}>Update</button>
  <button type="button" className="btn btn-danger" onClick={()=> setSelectedTab('home')}>Cancel</button>
</div>
    
    </>
}

export default EditPost