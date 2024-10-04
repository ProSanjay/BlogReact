import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from "./component/AuthLayout.jsx"
import Home from './pages/Home.jsx'
import SignIn from "./pages/SignIn.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import AllPost from './pages/AllPost.jsx'
import AddPost from  './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { Provider } from 'react-redux'
import store from "./store/Store.js"
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "login",
            element: (
                <AuthLayout authentication={false}>
                    <SignIn/>
                </AuthLayout>
            ),
        },
        {
            path: "signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUpPage />
                </AuthLayout>
            ),
        },
        {
            path: "all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
        {
            path: "add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "post/:slug",
            element: <Post />,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    </React.StrictMode> 
  
)
