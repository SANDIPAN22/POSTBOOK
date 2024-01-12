import {useRef} from 'react'
import { RxCross1 } from "react-icons/rx";

const Navbar = ({selectedKeywords, setSelectedKeywords, selectedTab}) => {
  // console.log(selectedKeywords)
  const searchRef = useRef()


  const handleSearchApply = () => {
    if (searchRef.current.value){
    const keywords = searchRef.current.value.split(',')
    // console.log("Apply Button Clicked==>", keywords)
    setSelectedKeywords((init)=> [...init, ...keywords])

    searchRef.current.value = []
    }
  }

  const handleDeleteKeyword = (ind) => {
    setSelectedKeywords((init)=> init.filter( (elem, i) => i !== ind))
  }
return <>

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
  {selectedTab === 'create_post' && <a className="navbar-brand" >Create a Post</a>}
  {selectedTab === 'edit_post' && <a className="navbar-brand" >Edit the Post</a>}
    {selectedTab === 'home' && <><a className="navbar-brand" >Dynamic Filter </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
      <div className="d-flex">
        <input className="form-control me-2" type="search" ref={searchRef} placeholder="comma separated tags..." aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handleSearchApply} type="submit">Apply</button>
      </div>
      {selectedKeywords.map((elem, i) => 
       <span key={i} className="btn btn-warning position-relative postbook-filter-tags">
       {elem}
       <button type="button" onClick={()=> handleDeleteKeyword(i)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       <RxCross1 />
       </button>
     </span>
      )}
    </div></>}
  </div>
</nav>

</>
}

export default Navbar