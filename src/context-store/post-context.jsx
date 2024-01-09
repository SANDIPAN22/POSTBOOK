import { createContext} from "react";

export const postListContext =  createContext({
    currentPosts: [],
    createPost: ()=> {},
    deletePost: ()=> {}
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
        currentPosts: latestPosts,
        createPost: handleCreatePost,
        deletePost: handleDeletePost
    }}>
        {children}
    </postListContext.Provider>
}

