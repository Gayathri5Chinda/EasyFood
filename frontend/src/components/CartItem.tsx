import { useState } from 'react';
import image from '/grilledchicken.jpg';

export const CartItem = () => {

    const [number, setNumber] = useState(1); //number of item

	const updateQuantity = (id: number, value: number) => {
        if(id > 0 || value == 1){
            setNumber(id + value);
        }
			
	};

    
    return <div className='mt-10 grid grid-cols-6'>
           <div className='col-span-1'>
        <img className = "w-56 h-44" src = {image}></img>
        </div>
        <div className='col-span-4 pl-2'>
           <div className='text-xl'>Grilled Chicken</div>
           <div className='pt-2'>
               <div className='text-sm text-gray-500'>weight: 100g</div>
               <div className='text-sm text-gray-500'>protein: 36g</div>
               <div className='text-sm text-gray-500'>calories: 156g</div>
           </div>
        </div>
        <div className='col-span-1'>
        <div className='grid-container border border-black w-24 rounded-2xl'>
        <button className='inline-block m-1 pr-5 pl-2' onClick={() => updateQuantity(number, -1)}>-</button>
        <p className='inline-block text-sm'>{number}</p>
        <button className='inline-block  pl-5 ' onClick={() => updateQuantity(number, 1)}>+</button>

               
          
        </div>

    </div>
    </div>
}