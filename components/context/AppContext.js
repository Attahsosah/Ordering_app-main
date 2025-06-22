import {  createContext, useEffect, useState } from "react";

export const ChangeContext = createContext(); 
export const HoverContext = createContext();
export const TypeContext = createContext();
export const SelectedContext = createContext();
export const StagedContext = createContext();
export const CartContext = createContext();
export const ColorProvider = ({children}) =>{
    const [clicked, setClicked ] = useState(false);

    console.log(clicked);

    const [hover, setHover] = useState(false);

    const [type, setType] = useState([])

//         burgers = [ 
//             {title:"Cheese burger", price:"20"},
//              {title:"Chicken burger", price:"20"},
//         ],
//         {"fries": [ 
//             {title:"French Fries", price:"20"},
//             {title:"Spicy Fries", price:"20"},
//         ] }

// ])

// let food = [
//     {
//     "id":"34",
//       "type":"Burger",
//        "name":"Beef Burger",
//        "price":"12", 
//        "clicked":true,
//        "accomaniments":"fries, brazed potatoes ",

      
//     },
//     {
//         "id":"33",
//         "type":"fries",
//          "name":"French Fries",
//          "price":"12",
//          "clicked":false

         
        
//       },
//       {
//         "id":"3",
//         "type":"Burger",
//          "name":"Cheese Burger",
//          "price":"12",
//          "clicked":false,
//          "accomaniments":"fries, brazed potatoes ",

         
        
//       },
//       {
//         "id":"6",
//         "type":"Burger",
//          "name":"Wild Salmon Burger",
//          "price":"12",
//          "clicked":false,
//          "accomaniments":"fries, brazed potatoes ",

         
        
//       },
//       {
//         "id":"7",
//         "type":"Burger",
//          "name":"Bison Burger",
//          "price":"12",
//          "clicked":false,
//          "accomaniments":"fries, brazed potatoes ",

         
        
//       },
//       {
//         "id":"8",
//         "type":"Burger",
//          "name":"Turkey Burger",
//          "price":"12",
//          "clicked":false,
//          "accomaniments":"fries, brazed potatoes ",

         
        
//       },
//       {
//         "id":"3",
//         "type":"Burger",
//          "name":"Portbello Mushroom Burger",
//          "price":"12",
//          "clicked":false,
//          "accomaniments":"fries, brazed potatoes ",

         
        
//       },
//       {
//         "id":"4",
//         "type":"Starters",
//         "name":"Garlic Bread",
//         "price":"12",
//         "clicked":false

//       },
//       {
//         "id":"4",
//         "type":"Starters",
//         "name":"Onion Rings",
//         "price":"12",
//         "clicked":false

//       },
//       {
//         "id":"4",
//         "type":"Starters",
//         "name":"Pizza Bombs",
//         "price":"12",
//         "clicked":false

//       },
//       {
//         "id":"4",
//         "type":"Starters",
//         "name":"Chicken Wings",
//         "price":"12",
//         "clicked":false

//       },
      

// ]


const [selected, setSelected] = useState("burgers");
const [staged, setStaged] = useState({})
const [cart, setCart] = useState([])

useEffect(() => {
  console.log(staged)
},[staged])

    return(
        <ChangeContext.Provider value={[clicked, setClicked]}>
            <HoverContext.Provider value={[hover, setHover]}>
                {/* <TypeContext.Provider value={food}> */}
                    <SelectedContext.Provider value={[selected, setSelected]}>
                      <StagedContext.Provider value={[staged, setStaged]}>
                        <CartContext.Provider value={[cart, setCart]}>
                        {children}
                        </CartContext.Provider>

                      </StagedContext.Provider>
                      </SelectedContext.Provider> 
                 {/* </TypeContext.Provider> */}
            </HoverContext.Provider>
            
        </ChangeContext.Provider>
    )
}

