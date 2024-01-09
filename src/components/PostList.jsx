import Post from './Post'

const PostList = ({latestPosts}) => {

    return <>
    {latestPosts.map((item) => <Post item={item}/>)}

    </>
}

export default PostList