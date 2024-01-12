import { createContext, useReducer, useEffect, useState} from "react";
import postReducer from "../reducer-functions/post-reducer-func";
import { RxUpdate } from "react-icons/rx";

export const postListContext =  createContext()

export const PostListProvider = ({children}) => {
    const [latestPosts, postDispatch] = useReducer(postReducer, [])
    // for loading sign feature
    const [fetching, setFetcher] = useState(false)

     // use effect hook to call the from the dummy server (we are keeping thid useEffect here to fetch
    //  the data only once when then app starts and hold the data through out untill next refresh. Hence any
    //   create, update, 
    //  delete operations results will show in screen.
    //   This is done Only for this backend-less project, otherwise fetching should be done inside where 
    //   it is gettibg rendered, 
    //   so FaThumbtack, fetch opertaion only happens when it is about to rendered, fetch connection stops when that component 
    //   is not visible)
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal

        setFetcher(true)
        fetch('https://dummyjson.com/posts', {signal})
        .then(res => res.json())
        .then(json => {
            console.log(json.posts)
            handleCreateBatchPosts(json.posts)
            setFetcher(false)
        })

        // useEffect Hook CleanUp
        return () => {
            console.log("DROPPING THE SERVER Connection, AS YOU HAVE NO INTEREST..in POST LIST..")
            controller.abort();
        }

    }, [])
    const handleCreatePost = (formObj) => {
        postDispatch({type: 'NEW_POST', payload: {
            id: 'post' + (new Date()).getTime(),
            title: formObj.title,
            body: formObj.body,
            userId: (new Date()).getTime(),
            tags: formObj.tags.split(','),
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

    const handleCreateBatchPosts = (posts) => {
        postDispatch({type: "CREATE_BATCH_POSTS", payload: posts})
    }

    
    
    return <postListContext.Provider value={{
        latestPosts,
        handleCreatePost,
        handleDeletePost,
        handleIncLike,
        handleUpdatePost,
        fetching
    }}>
        {children}
    </postListContext.Provider>
}

