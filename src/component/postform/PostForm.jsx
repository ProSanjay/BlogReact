import React ,{useCallback,useRef} from "react";
import { useForm } from "react-hook-form";
import Button from "../Button"
import {Select,Input,RTE} from "../Index.js"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StorageService from "../../appWrite/database/Database.js";
import FileUpload from "../fileUpload/FileUpload.jsx";



export default function PostForm({post}){
    const ref = React.createRef()
    const {register,handleSubmit,watch,setValue,getValues,control} =  useForm({
          defaultValues : {
            tittle : post?.tittle || "" , 
           slug : post?.slug || "" ,
           content : post?.content || "",
           status : post?.status || ""
          },
    })

    const navigate = useNavigate()
    const userData = useSelector((select)=> select.userData)

    const  submit = (data)=>{
      console.log(data,"dfsdfsdfsd");

      
        
        if(post){
            const file = data.image[0] ? StorageService.uploadFile(data.image[0]) : undefined

            if(file){
                // const deleteStatus = StorageService.deleteFile(post.id) 
                // will write code about delete file
            }

            const updatePost = StorageService.updatePost(
                post.$id ,{ ...data , featuredImage : file ? file.$id : undefined} , 
            )

            if(updatePost){
                navigate(`/post/${updatePost.$id}`)
            }
        }else{
            const file =  StorageService.uploadFile(data.image[0])
            file.then((value) =>{
                data.FeatureImage = value.$id
                const postData = StorageService.createPost({
                    ...data,
                    UserId:userData.$id
                })
                if(postData){
                    navigate(`/post/${postData.$id}`)
                }
            })
            
        }
    }

    const slugTrans = useCallback((value) =>{
       if(value && typeof value === 'string'){
          return value.trim().toLowerCase()
       }else{
        return ""
       }
    },[])

    React.useEffect(()=>{
     const subscription = watch((value,{name})=>{
            if(name === "tittle"){
                setValue('slug',slugTrans(value.tittle,{shouldValidate: true}))
            }
     })
     return ()=>{
        subscription.unsubscribe()
     }
    },[slugTrans,watch,setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="tittle :"
                    labelClass= "text-sm font-bold text-gray-500 tracking-wide"
                    placeholder="tittle"
                    className="mb-4"
                    onInput={(e) => {
                        setValue("slug", slugTrans(e.currentTarget.value), { shouldValidate: true });
                    }}
                    {...register("tittle", { required: false })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    labelClass= "text-sm font-bold text-gray-500 tracking-wide"
                    {...register("slug", { required: false })}
                    
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className=" px-2 mt-7 ml-8">
                
                <FileUpload  register={register}   />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={StorageService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                
                <Select 
                    options={["active", "inactive"]}
                    value = {[true,false]}
                    label="Status"
                    className="mb-4 mt-4"
                    {...register("Status", { required: false })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className=" bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {post ? "Update" : "Save"}
                </Button>
            </div>
        </form>
    );
}