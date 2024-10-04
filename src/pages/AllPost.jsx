import React from "react";
import { useState,useEffect } from "react";
import { Container,PostCard } from "../component/Index";
import StorageService from "../appWrite/database/Database";

export default function AllPost(){
    const [post , setPost] = useState()
    StorageService.getAllPost([]).then((data) =>{
        if(data){
            setPost(data.documents)
        }
    })
    return (<>
       <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        post.map((post)=>(
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard post={post}/>
                            </div>
                        ))
                    }

                </div>
            </Container>

       </div>
    </>)
}