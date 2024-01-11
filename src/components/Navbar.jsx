import {useContext, useRef} from 'react'
import {postListContext} from "../context-store/post-context"
import { RxCross1 } from "react-icons/rx";

const Navbar = ({selectedKeywords, setSelectedKeywords}) => {
  console.log(selectedKeywords)
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
    <a className="navbar-brand" href="#">Dynamic Filter </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
      <div className="d-flex">
        <input className="form-control me-2" type="search" ref={searchRef} placeholder="comma separated tags..." aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handleSearchApply} type="submit">Apply</button>
      </div>
      {selectedKeywords.map((elem, i) => 
       <span class="btn btn-warning position-relative postbook-filter-tags">
       {elem}
       <button type="button" onClick={()=> handleDeleteKeyword(i)} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       <RxCross1 />
       </button>
     </span>
      )}
    </div>
  </div>
</nav>

</>
}

export default Navbar