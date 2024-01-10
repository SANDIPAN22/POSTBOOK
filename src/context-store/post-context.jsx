import { createContext, useReducer} from "react";
import postReducer from "../reducer-functions/post-reducer-func";

export const postListContext =  createContext()
const DEFAULT_POSTLIST = [
    {
        id : 'post' + (new Date()).getTime(),
        title: 'Going to Manali',
        body: 'Hey guys, going to manali trip. Hope to see SNOW....',
        reactions: 52,
        author: 'author1',
        tags: ['fun', 'trip', 'weekend'],
        dateTime: String(new Date())
    },
    {
        id : 'post' + (new Date()).getTime()+1,
        title: 'Started practicing DSA',
        body: 'Hey fellow SDEs, Recently started working on DSA. Support me !!',
        reactions: 145,
        author: 'author2',
        tags: ['coding', 'dsa', 'sde'],
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
    
    return <postListContext.Provider value={{
        latestPosts,
        handleCreatePost,
        handleDeletePost,
        handleIncLike
    }}>
        {children}
    </postListContext.Provider>
}

