function Meal({Type, Clicked, id , name, price}) {
  return (
    <div className='   bg-bg4 bg-no-repeat bg-cover bg-fixed '>
      <div className='flex space-x-8 pt-7 bg-black bg-opacity-75 '>
      <div className='pl-10 mt-16'>
              <div className='flex space-x-4 '>
              <h1 className=' text-2xl font-serif font-bold text-white ' >{name}</h1>
                <div className='bg-yellow-400 w-[0.02em]'/>

              </div>
                
            </div>

        {/* Left side */}
      <div className='block space-y-5'>

      
    
        </div>

        {/* Right side */}
        
        <div className="flex-col space-y-5 pb-5 font-bold  ml-20" >

        <h1 className='text-white'>{name}</h1>
      <p >{price}</p> 
        


          
        </div>
        {/* <div className="space-x-10 text-blue-700 font-bold  ">

         
        {food.filter(food => food.type === selected).map((selected) => (
          <h2>{selected.accomaniments}</h2>
        ))}
          
        </div> */}
          </div>

    </div>
  )
}

export default Meal