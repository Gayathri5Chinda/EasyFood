import { useNavigate } from "react-router-dom"


export const Navbar =() => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/cart')
    }

    const handleFood = () => {
        navigate('/food')
    }

    
    return  <div className="bg-black">
                <div className="flex justify-center p-4">
                    <button onClick = {handleFood} className="text-white font-bold pl-10 mr-4 text-2xl">
                        EsyFood
                    </button>
                    <div className="inline-flex mr-10 ml-10">
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
                    </div>
                    <button onClick = {handleClick} className=" h-12 w-12 rounded-full bg-green-500 text-white ">
                       <div className="text-lg">G</div>
                    </button>    
                    </div>
                </div>
    }