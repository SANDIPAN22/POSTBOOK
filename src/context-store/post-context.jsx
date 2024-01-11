import { createContext, useReducer} from "react";
import postReducer from "../reducer-functions/post-reducer-func";

export const postListContext =  createContext()
const DEFAULT_POSTLIST = [
    {
        id : 'post' + (new Date()).getTime(),
        title: 'Going to Manali',
        body: 'Hey guys, going to manali trip. Hope to see SNOW.... (This is a default post)',
        reactions: 52,
        author: 'author1',
        tags: ['fun', 'trip', 'weekend'],
        dateTime: String(new Date())
    },
    {
        id : 'post' + (new Date()).getTime()+1,
        title: 'Postbook - A React Project',
        body: 'Hey fellow SDEs, This is a React based frontend project. Here you can Create a new post, delete a post, filter the List of Post and finally you can edit an existing post also. Hope you have enjoyed this project. Please Like the post ... (This is a default post)',
        reactions: 145,
        author: 'author2',
        tags: ['coding', 'react', 'sde', 'dev'],
        dateTime: String(new Date())
    }

]





export const PostListProvider = ({children}) => {
    const [latestPosts, postDispatch] = useReducer(postReducer, DEFAULT_POSTLIST)
    
    const handleCreatePost = (formObj) => {
        postDispatch({type: 'NEW_POST', payload: {
            id: 'post' + (new Date()).getTime(),
            title: formObj.title,
            body: formObj.body,
            author: 'author' + (new Date()).getTime(),
            tags: formObj.tags.split(','),
            dateTime: String(new Date()),
            reactions: 0
        }})
    }
    const handleDeletePost = (postId) => {
        postDispatch({type: "DELETE_POST", payload: {
            id: postId
        }})
    }
    const handleIncLike = (postId) => {
        postDispatch({type: "INC_LIKE", payload: {
            id: postId
        }})
    }

    const handleUpdatePost = (formObj) => {
        postDispatch({type: "UPDATE_POST", payload: formObj})
    }
    
    return <postListContext.Provider value={{
        latestPosts,
        handleCreatePost,
        handleDeletePost,
        handleIncLike,
        handleUpdatePost
    }}>
        {children}
    </postListContext.Provider>
}

