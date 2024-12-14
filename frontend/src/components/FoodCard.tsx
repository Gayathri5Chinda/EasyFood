export const FoodCard = (props: any) => {
    return <div className="flex justify-center shadow-none transition-shadow hover:shadow-lg hover:shadow-gray-400 border-slate-200  cursor-pointer w-96 h-96 rounded-xl m-14">
                <div>
                    <img src={props.picture} className="w-72 h-52 m-9 rounded-xl"></img>
                    <div className="flex justify-between">
                        <div>
                            <div className="ml-10 font-bold">{props.description}</div>
                            <div className="ml-10 text-sm font-light">Rs.250 per serving</div>
                        </div>
                        <div>
                            <div className=" flex justify-center border rounded-md border-black text-sm w-10 mb-1 mr-10 bg-red-700 text-white font-light">n-veg</div>      
                        </div>
                    </div>
                    
                </div>
           </div>
}


// <div>
//                         
//<button className = "mr-10 p-3 rounded-full border bg-black text-white" type = "button">Add to Cart</button>
//                         <div>protein: 32g</div>
//                         <div>calories: 160g</div>
//                         </div>