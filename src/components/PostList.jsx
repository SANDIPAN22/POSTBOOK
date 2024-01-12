import { useContext} from 'react'
import Post from './Post'
import {postListContext} from '../context-store/post-context'
import NoPostBanner from './NoPostBanner'
import Loader from './Loader'

// helper function to perform reversal and filtertion of posts
const processFilterAndReverse = (latestPosts, selectedKeywords) => {
  console.log("Data manipulation Final Stage!")
  const revLatestPosts = [...latestPosts].reverse()
  let processedPostList = []
  if (selectedKeywords.length > 0){

    processedPostList = revLatestPosts.filter((post) => {
        for (let key of selectedKeywords) {
          if (!post.tags.includes(key)) {
            return false;
          }
        }
        return true;
      });
   
    }
    else{
      processedPostList = [...revLatestPosts]
    }

    return processedPostList

}

const PostList = ({selectedKeywords, onEditPostClick}) => {


    const {latestPosts, fetching} = useContext(postListContext)

   
    if (latestPosts.length === 0) {
       

}
    // Final Processing the post list (reverse, filter )
    let FinalPostList = processFilterAndReverse(latestPosts, selectedKeywords)
    
    
    
    return <>
    {!fetching && FinalPostList.length === 0  && <NoPostBanner/>}
    {fetching && <Loader/>}
    {FinalPostList.map((item, i) => <Post key={i} onEditPostClick={onEditPostClick} item={item}/>)}

    </>
}

export default PostList