import {React,useState} from "react";
import { useForm } from "react-hook-form";
import authServiceObj from "../appWrite/auth/auth";
import Input from "./Input";
import { useDispatch } from "react-redux";
import Button from "./Button"
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logIn } from "../store/AuthSlice";
import Logo from "./logo/Logo";


function SignUp(){
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [errorState, setErrorState] = useState("null")
    const navigate = useNavigate()
    
    const SignUpUser = async (data) =>{
        setErrorState("")
         try {
            const status = authServiceObj.register(data.Email,data.Password,data.Name)
            if(status){
              let currentUser = authServiceObj.getCurrentUser()
              dispatch(logIn(currentUser))
              navigate('/')
            }
         } catch (error) {
          console.log(error,"sanjay");
          
            setErrorState(error)
         }
    }

    return (
    <>
       {/* <div>
        <form onSubmit={handleSubmit(SignUpUser)}>
            <Input lable = "Name" type = "text" {...register("Name",{required:true})} />
            <Input   
              type = "email"
              lable = "Email : "
              {...register("Email",{
                required : true,
                validate : {
                    matchPatern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/ . test(value) || "Email should be valid"
                }
              })}
              />
               <Input   
              type = "password"
              lable = "Password : "
              {...register("Password",{
                required : true
              })}
              />
              <Button children = "Register" type = "submit" className = "w-full"/>
        </form>
       </div> */}
       <div className=" font flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo width="100%" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"   onSubmit={handleSubmit(SignUpUser)}>
          <div>
               
               <div className="mt-2">
               <Input label = "Name" type = "text" {...register("Name",{required:true})} />
               </div>
             </div>
            <div>
               
              <div className="mt-2">
                <Input
                  type="email"
                  label="Email : "
                  {...register("Email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                        "Email should be valid",
                    },
                  })}
                />
              </div>
            </div>

            <div>
              {/* <div className="flex items-center justify-between">
                
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div> */}
              <div className="mt-2">
                <Input
                  type="password"
                  label="Password : "
                  {...register("Password", {
                    required: true,
                  })}
                />
              </div>
            </div>

            <div>
              <button
               
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

           
        </div>
      </div>

    </>
    )
}

export default SignUp