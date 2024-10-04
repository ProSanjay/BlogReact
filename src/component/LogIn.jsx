import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authServiceObj from "../appWrite/auth/auth";
import { logIn as reduxLogIn } from "../store/AuthSlice";
import Logo from "../component/logo/Logo";
import Input from "./Input";
import Button from "./Button";

function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const logIn = async (data) => {
    setError("");
    try {
      const session = await authServiceObj.login(data);
      if (session) {
        const currentUser = await authServiceObj.getCurrentUser();
        dispatch(reduxLogIn(currentUser));
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {/* <div>
        <div>
            <div>
                <span>
                   <Logo width = "100%"/>
                </span>
            </div>
            <h2>Sign in to your account</h2>
            <p>Don't have an account 
                <Link
                 to={"/SignUp"} >
                Sign Up
                </Link>
            </p>

            <form onSubmit={handleSubmit((data)=>{
                console.log(data);
                
            })}>
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

              <Button children = "LogIn" type = "submit" className = "w-full"/>
            </form>
        </div>
      </div> */}
      <div className=" font flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo width="100%" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"   onSubmit={handleSubmit(logIn)}>
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
