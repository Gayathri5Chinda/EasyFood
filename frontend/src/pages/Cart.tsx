import { useNavigate,} from "react-router-dom"
import { CartItem } from "../components/CartItem.tsx"
import { Navbar } from "../components/Navbar"

export const Cart = () => {
    const navigate = useNavigate();
    


  const handleClick = () => {
    navigate('/trans');
  };

    return <div className="bg-gray-100 h-screen">
        <Navbar/>
        <div className="grid grid-cols-3">
        <div className=" col-span-2 bg-white m-10 rounded-md p-10 w-[70rem] h-auto">
            <div className="text-3xl pb-2 border-gray-300 border-b-2">
                  Shopping Cart
            </div>
            <CartItem/>
            
        </div>
        <div className="col-span-1 ml-24 mt-10 w-96 h-80 rounded-lg bg-white">
        <div className=" m-10 p-1 border-b-2 text-2xl">Total</div>
        <div className="grid justify-center text-xl">
            <div>Subtotal: <span className="font-bold">Rs 250.00</span></div>
            <button onClick = {handleClick} className="mt-9 p-1 border border-black bg-pink-500 rounded-xl text-lg">Proceed to Buy</button>
        </div>
        
        </div>
        </div>
        
    </div>
}