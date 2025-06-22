// import React, {useContext, useState} from 'react'
// import { CartContext, StagedContext, SelectedContext } from './context/ColorContext'
// function SideBar() {
//   const [staged, setStaged] = useContext(StagedContext)
//   const [display, setDisplay] = useState(false)
//   const [cart, setCart] = useContext(CartContext)
//   const [selected, setSelected] = useContext(SelectedContext)

//   return (
//     <div className="bottom-15 justify-end bg-red-700 ">
       
//         {
//       cart.map((food) => (

//         <div className='bg-yellow-600 border-b-2 hover:scale-105 lg:p-4'>
//            <img className={display ? 'h-10 w-5' : "hidden"}src={food.image} />
//           <div onPointerOver={() => setDisplay(true)}className=''>
//           $ {food.name}
//           </div>
//           <div className=''>
//           {food.price}
//           </div>

//         </div>
        


//       ))};

//     </div>
//   )
// }

// export default SideBar