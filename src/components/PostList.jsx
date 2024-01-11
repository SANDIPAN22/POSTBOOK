import { useContext } from 'react'
import Post from './Post'
import {postListContext} from '../context-store/post-context'

const PostList = ({selectedKeywords}) => {
    const {latestPosts} = useContext(postListContext)
   
    const revLatestPosts = [...latestPosts].reverse()
    let FinalPostList = []

    if (selectedKeywords.length > 0){

    FinalPostList = revLatestPosts.filter((post) => {
        for (let key of selectedKeywords) {
          if (post.tags.includes(key)) {
            return true;
          }
        }
        return false;
      });
   
    }
    else{
        FinalPostList = [...revLatestPosts]
    }
    
    return <>
    {FinalPostList.map((item) => <Post key={item.id} item={item}/>)}

    </>
}

export default PostList