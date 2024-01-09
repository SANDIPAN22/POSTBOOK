import { createContext} from "react";

export const postListContext =  createContext({
    latestPosts: [],
    handleCreatePost: ()=> {},
    handleDeletePost: ()=> {}
})

const [latestPosts, postDispatch] = useReducer(postReducer, [])

const handleCreatePost = (formObj) => {
    postDispatch({type: 'NEW_POST', payload: {
        id: 'id' + (new Date()).getTime(),
        title: formObj.title,
        body: formObj.body,
        author: formObj.author
    }})
}
const handleDeletePost = () => {

}

export const PostListProvider = ({children}) => {
    return <postListContext.Provider value={{
        currentPosts,
        createPost,
        deletePost
    }}>
        {children}
    </postListContext.Provider>
}

