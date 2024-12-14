import { useState } from 'react';

import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export const Item = () => {
  const image = "https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-V1-768x1024.jpeg";
  const navigate = useNavigate();
    const data = [{
        image: image, 
        name: 'Grilled Chicken', 
        weight: '100g'
    }];

    const food1 = {
        Protein: "10g",
        Calories: "250kcal",
        fibre: "5g",
        fats: "15g",
        sodium: "200mg",
        iron: "3mg",
        calcium: "100mg"
      };

      const handleClick = () =>{
        navigate('/cart');
      }


    const [food] = useState(data[0]);
    const foodAttributes = Object.entries(food1);
    return  <div bg-gray-50>
                <Navbar/>
                <div className="ml-40 mr-40 p-10 rounded-xl flex justify-center">
                    <div>
                        <div className='flex justify-between'>
                        <div className=' m-2'> 
                        <div className=' text-4xl text-bold'>{food.name}</div>
                        <div className='text-sm text-gray-500'>weight: {food.weight}</div>
                        </div>
                        <button onClick={handleClick} className='text-black border border-black bg-pink-500 pl-4 pr-4  m-4 p-2 rounded-2xl'>Add to Cart</button>
                        </div>
                        <img className='w-[40rem] h-[25rem] pt-1 rounded-xl' src={food.image} alt={food.name} />
                        
                        
                        <div className="flex items-center justify-center">
      <div className="flex flex-wrap m-10 gap-2 max-w-xl justify-center">
        {foodAttributes.map(([key, value], index) => (
          <span
            key={index}
            className="inline-block px-6 py-2 border border-gray-400 text-gray-900 rounded-full shadow-sm text-md"
          >
            {key}: {value}
          </span>
        ))}
      </div>
    </div>
                       
                    </div>
                </div>
            </div>
}

// <div className='mt-10 border-t border-gray-400 rounded-lg'>