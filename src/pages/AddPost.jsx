import React from "react";
import PostForm from "../component/postform/PostForm"
import { Container } from "../component/Index";

export default function AddPost(){
    return (
        <div>
            <Container className="mt-12 mb-5">
                <PostForm/>
            </Container>
        </div>
    )
}
