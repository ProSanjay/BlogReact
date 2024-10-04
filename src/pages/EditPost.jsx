import React, { useEffect ,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import StorageService from "../appWrite/database/Database";
import PostForm from "../component/postform/PostForm";

export default function EditPost(){
    const [post , setPost] = useState()
    const slug = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            StorageService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])

    return  post ? <div className="py-8">
        <Container>
            <PostForm post ={post}/>
        </Container>
    </div> : null
}