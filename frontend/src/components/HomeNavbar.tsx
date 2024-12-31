export const HomeNavbar = () => {
    const image = "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-workout-line-icon-vector-png-image_6680960.png";
    const meal = "https://cdn-icons-png.flaticon.com/512/182/182727.png";
    const breakfast = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_4rNjEoxHoRGxX_ij8opnrGBWUbrUHCUew&s"
    return  <div className="flex bg-black text-xl justify-center">
                
        <button className="flex text-white m-6"><img className = "w-12 h-12 bg-white rounded-full" src = {breakfast}></img><div className="ml-6 mt-3">Breakfast</div></button>  
        <button className="flex text-white m-6"><img className = "w-12 h-12 bg-white rounded-full" src = {meal}></img><div className="ml-6 mt-3">Meal</div></button>
        <button className="flex text-white m-6"><img className = "w-12 h-12 bg-white rounded-full" src = {image}></img><div className="ml-6 mt-3">pre/post-workout</div></button>        
    
</div>
}