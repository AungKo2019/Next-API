import { comments } from "@/data/comments"

export default function handler(req,res){
    if(req.method==='GET'){
        res.status(200).json(comments)
    } else if (req.method==='POST'){
        const comment=req.body.comment
        const newcomment={
            id:Date.now(),
            text:comment
        }
        comments.push(newcomment)
        res.status(201).json(newcomment)
    }
    
}
