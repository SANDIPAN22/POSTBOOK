import { useContext } from 'react'
import Post from './Post'
import {postListContext} from '../context-store/post-context'

const PostList = ({}) => {
    const {latestPosts} = useContext(postListContext)
   
    const revLatestPosts = [...latestPosts].reverse()

    console.log(latestPosts, revLatestPosts)
    return <>
    {revLatestPosts.map((item) => <Post key={item.id} item={item}/>)}

    </>
}

export default PostList