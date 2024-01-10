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

const App = () => {
  const [selectedTab, setSelectedTab] = useState('home')
  
  
  return <>
  <PostListProvider>
  <div className="flex-container">
  <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
  <div className="block-container">
  <Navbar/>

  {selectedTab === 'home' ? <PostList /> : <CreatePost setSelectedTab={setSelectedTab}/>}

  <Footer/>
  </div>
  </div>
  </PostListProvider>
  </>
}

export default App