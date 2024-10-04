import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authServiceObj from './appWrite/auth/auth'
import { logIn, logout } from './store/AuthSlice'
import { Header,Footer } from './component/Index'
 
import { Outlet } from 'react-router-dom'
function App() {
  const [loading,setLoading] = useState(true)
  const dispatchs = useDispatch()
  useEffect(() =>{
     authServiceObj.getCurrentUser().then((data) =>{
          if(data){
            dispatchs(logIn(data))
          }else{
            dispatchs(logout())
          }
     }).finally(()=>{
      setLoading(false)
     })
    
  },[])
   
  // const [count , setCount] = useState(0)


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bodybg'>
      <div className='w-full block'>
        <Header />
         
        <Outlet />
         
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
