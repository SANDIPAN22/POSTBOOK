import { useRef, useContext } from "react"
import {postListContext} from "../context-store/post-context"

const CreatePost = ({setSelectedTab}) => {
  const {handleCreatePost} = useContext(postListContext)
  const titleRef = useRef()
  const bodyRef = useRef()
  const tagRef = useRef()
  const formSubmitter = () => {
    
    const newTitle = titleRef.current.value 
    const newBody = bodyRef.current.value
    const newTags = tagRef.current.value
    if (!newTitle || !newBody){
      alert(`Data missing at  ${newBody ? titleRef.current.name : bodyRef.current.name}`)
    }
    else{
      handleCreatePost({
        title: newTitle,
        body: newBody,
        tags: newTags
      })
      alert("You latest Post is now published !!!!")
      setSelectedTab('home')
    }
  }

    return <>
    <div className="postbook-create-post">
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" ref={titleRef} name="Title"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Content</label>
    <input type="text" className="form-control" ref={bodyRef} name="Content"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Tags</label>
    <input type="text" className="form-control" ref={tagRef} name="Tags"/>
    
  </div>
  
  <button type="button" className="btn btn-primary" onClick={formSubmitter}>Create</button>
</div>
    
    </>
}

export default CreatePost