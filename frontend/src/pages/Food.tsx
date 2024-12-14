
import { Navbar } from "../components/Navbar"
// import { RangeSlider } from "../components/RangeSlider"
import { FoodCard } from "../components/FoodCard";
import image from '/grilledchicken.jpg';
import { Link } from "react-router-dom";
import { HomeNavbar } from "../components/HomeNavbar";


export const Food =() => {
    
    // const [ProteinValue, setProteinValue] = useState(50);
    // const [CalorieValue, setCalorieValue] = useState(50);
    const data = [
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' },
        { picture: image, description: 'Grilled Chicken' }

    ]

    return<div className="">
            <Navbar />
            <HomeNavbar/>
            <div className="bg-gray-50 pl-20 pr-20">
            
            <div className="grid justify-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                data.map((dat) => (
                    <Link to={`/item`} ><FoodCard picture = {dat.picture} description = {dat.description} /></Link>
                    
                ))
            }
            
            </div>
            </div>
      </div>
}
  



{/* <div className="grid grid-cols-2 ">
               <div className="col-span-1">
                    <RangeSlider min='0' max='100' value={ProteinValue} onChange={(e: any) => {setProteinValue(+e.target.value)}}/> 
                    <div>{ProteinValue}</div>
                </div>
                <div className="col-span-1">
                    <RangeSlider min='0' max='1500' value={CalorieValue} onChange={(e: any) => {setCalorieValue(+e.target.value)}}/>
                    <div>{CalorieValue}</div>
                </div>
            </div> */}