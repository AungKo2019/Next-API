import { useState } from "react"

function CommentsPage(){

    const [comments,setComments]=useState([])
    const [comment,setComment]=useState('')

    const fetchComments=async()=>{
        const response=await fetch('/api/comments')
        const data=await response.json()
        setComments(data)
    }

    const SubmitComment=async()=>{
        const response=await fetch('/api/comments',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'content-Type':'application/json',
            },
        })
        const data=await response.json()
        console.log(comment)
        console.log(data)
    }

    const deletecomment=async commentid=>{
        const response=await fetch(`/api/comments/${commentid}`,{
            method:'DELETE'
        })
        const data=await response.json()
        console.log(data)
        fetchComments()
    }

    return(
        <>
            <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} />
            <button onClick={SubmitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map((comment)=>{
                    return(
                        <div key={comment.id}>
                            {comment.id} {comment.text}
                            <button onClick={()=>deletecomment(comment.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage