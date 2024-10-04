import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // need to learn
import "./PostCard.css"
import StorageService from "../appWrite/database/Database"

function PostCard({post}) {
   const [fileURL,setFileURL]   =  useState("")
   useEffect(() =>{
      
       
     let imageUrl = StorageService.getFilePreview(post.FeatureImage) 
     imageUrl.then((url)=>{
       setFileURL(url.href)
      
     })
      
     
  },[])

  return (
    <>
      <Link to={`/post/${post.$id}`}>
        {/* <div classNameName="w-full bg-gray-50 rounded-xl p-4">
          <div classNameName="w-full justify-center mb-4">
            <img src={fileURL} alt={post.tittle} classNameName="rounded-xl" />
          </div>
          <h1>{post.tittle}</h1>
        </div> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  font ">
          
            <img
              className="rounded-t-lg CardImg"
              src={fileURL} alt={post.tittle}
            />
         
          <div className="p-5">
            
              <h5 className="mb-2 headingForCard  text-2xl font-bold tracking-tight text-gray-900  ">
              {post.tittle}
              </h5>
             
            <p className="mb-3 font-normal text-gray-700  ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div
            
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard