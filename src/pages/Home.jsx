import React, { useEffect, useState } from "react";
import StorageService from "../appWrite/database/Database";
import { Container ,PostCard } from "../component/Index";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
 

export default function Home(){
     const [allPost,setPost] = useState([])
     const userData = useSelector((state) => state.status);
     const navigate = useNavigate()

     useEffect(()=>{
            if(!(userData)){
                navigate("/login")
            }else{ 
                StorageService.getAllPost().then((data)=>{
                    setPost(data.documents)
                 })
            }
          
     },[])


     

    if(allPost.length > 0){ 
        return(
        <div>
            <Container className = "grid grid-cols-[repeat(auto-fill,_336px)] gap-y-36 gap-x-36 p-44">
                {
                    allPost.map((data)=>(
                        <div key={data.$id}>
                         <PostCard  post={data} />
                        </div>
                    )
                        
                    )
                }
            </Container>
        </div>)
    }else{
        return(<div>
            <Container>
                <div>No Post available</div>
                <div>Log In to see post</div>
            </Container>
        </div>)
    }
}