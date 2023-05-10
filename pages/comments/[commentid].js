import {comments} from '@/data/comments'
function Comment({comment}){
    return (
        <div>
            {comment.id} . {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticPaths(){
    return{
        paths:[
            {params:{commentid:'1'}},
            {params:{commentid:'2'}},
            {params:{commentid:'3'}}
        ],
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params}=context
    const {commentid}=params

    const comment = comments.find((comment)=>comment.id===parseInt(commentid))
    console.log(comment)

    return {
        props:{
            comment,
        },
    }
}