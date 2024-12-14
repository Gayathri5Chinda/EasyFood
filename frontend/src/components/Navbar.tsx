import { useNavigate } from "react-router-dom"


export const Navbar =() => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/cart')
    }

    const handleFood = () => {
        navigate('/')
    }

    const handleSignup = () => {
        navigate('signup')
    }

    const handleLogin = () => {
        navigate('signin')
    }

    return  <div className="bg-black border-">
                <div className="">
                    <div className="flex justify-between p-4">
                    
                        <button onClick = {handleFood} className="text-white pl-10 text-2xl">
                           EasyFood
                        </button>
                   
                    <div className=" inline-flex">
                        <form className="max-w-lg mx-auto w-[30rem] l-[20rem]">   
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500    " placeholder="Search a dish..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                            </div>
                        </form>
                        <button onClick = {handleLogin} className="text-white pl-5">
                        Login
                    </button>
                    <button onClick={handleSignup} className="text-white pl-5 ">
                        Signup
                    </button>
                    </div>
                    
                    <button onClick = {handleClick} className="mt-2 pr-5">
 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l3 9h8l3-9h2M3 3h18M8 14h8M10 18h4a2 2 0 11-4 0z"/>
  </svg>


  <div  className="text-white text-sm">cart</div>
</button>


                    
                    
                    </div>
                
                </div>
                
            </div>
    }