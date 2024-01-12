import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './reducer-functions/post-reducer-func'
import {PostListProvider} from './context-store/post-context'
import { useState } from 'react'
import EditPost from './components/EditPost'

const App = () => {
  const [selectedTab, setSelectedTab] = useState('home')
  const [selectedKeywords, setSelectedKeywords] = useState([])
  const [editPostId, setEditPostId] = useState([])

  const onEditPostClick = (postId) => {
    setSelectedTab('edit_post')
    setEditPostId(postId)
  }

  return <>
  <PostListProvider>
  <div className="flex-container">
  <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
  <div className="block-container">
  <Navbar selectedKeywords={selectedKeywords} setSelectedKeywords={setSelectedKeywords} selectedTab={selectedTab}/>

  {selectedTab === 'home' &&  <PostList selectedKeywords={selectedKeywords} onEditPostClick={onEditPostClick}/> }
  {selectedTab === 'create_post' &&  <CreatePost setSelectedTab={setSelectedTab}/> }
  {selectedTab === 'edit_post' &&  <EditPost setSelectedTab={setSelectedTab} editPostId={editPostId}/> }
  
  <Footer/>
  </div>
  </div>
  </PostListProvider>
  </>
}

export default App