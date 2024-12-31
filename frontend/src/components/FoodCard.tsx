export const FoodCard = (props: any) => {
    return  <div className="flex justify-center shadow-none transition-shadow hover:shadow-lg hover:shadow-gray-400 border-slate-200 cursor-pointer w-auto h-auto mt-10 pb-2 rounded-2xl mr-2 ">
                <div>
                    <img src={props.picture} className="w-72 h-52 m-2 rounded-2xl"></img>
                    <div className="flex justify-between ">
                        <div>
                            <div className="ml-10 font-bold">{props.description}</div>
                            <div className="ml-10 text-sm text-gray-500">Rs.250 per serving</div>
                        </div>
                        <div>
                            <div className=" flex justify-center border rounded-xl p-2 bg-red-700 border-white text-xl mr-7 font-light"></div>      
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