import React from "react";
import Input from "../Input";

function FileUpload({register}) {
  return (
    <>
      <div className="grid grid-cols-1 space-y-2 ">
        <label className="text-sm font-bold text-gray-500 tracking-wide font">
          Attach Document
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
            <div className="h-full w-full text-center flex flex-col items-center justify-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <p className="pointer-none text-gray-500 font ">
                <span className="text-sm">Drag and drop</span> files here <br />{" "}
                  or 
                  select a file
                 
                from your computer
              </p>
            </div>
            <Input label=""
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/gif"  
              className="hidden"
              {...register("image", { required: false })}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default FileUpload
