
export const Card = (props) => {
    function hello (){
        alert("hey there")
    }
    return (
        <div>
            <div className='p-3 flex justify-around'>
                <img className="rounded-xl" src={props.image} alt="" />
                </div>
                <div className="ml-4">
                    {props.description}
                </div>
                <div className="text-xs ml-4 text-gray-600">
                    {props.unit}
                </div>
                <div className="flex justify-between  mt-3 ml-4" >
                    <div>{props.rupees}  </div>
                <button className="cursor-pointer px-5 py-1 border border-blue-500 rounded-lg
                 text-blue-500 hover:text-white mr-2 bg-white hover:bg-blue-500" onClick={hello}>
                    {props.Add}</button>
            
                </div>
            
        </div>
    )
}