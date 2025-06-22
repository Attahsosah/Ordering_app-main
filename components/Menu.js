import React, { useContext } from 'react'
import { ChangeContext, HoverContext } from './context/AppContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function Menu() {
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'brown',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [clicked, setClicked] = useContext(ChangeContext)
    const [hover, setHover] = useContext(HoverContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = () => {
        setUpdate(true);
        setVisible(true);
        
    }

    let burgers = [
        {
          "type": "Beef Burger",
          
        },
        {
            "type":"Chicken Burger",
        },
        {
            "type":"Veggie Burger",
        },

        {
            "type":"Cheese Burger",
        },

    ]

    let fries = [
        {
          "type": "French Fries",
          
        },
        {
            "type":"Spicy Fries",
        },
       

    ]

    




    
  return (
    <div className=''>
        
            <div className='flex space-x-4 pl-10 bg-gray-800'>
                <h1 className=' text-2xl font-serif font-bold text-white ' >The Menus</h1>
                <div className='bg-yellow-400 w-[0.02em] h-full'/>
            </div>

            <div className=' bg-gray-200'>
                <ul className='flex p-4 justify-between bg-black'>
                    <li className='text-white font-bold text-2xl active:text-yellow-700 active:border-b-2 '>
                        <h1>Starters</h1>

                        <ul className='justify-between pb-4'>
                            <li className='text-yellow-500 pb-4'>Teryaki soup</li>
                            <li className='text-yellow-500pb-4'>Ipsum Lorem</li>
                            <li className='text-yellow-500'>Lorem soup</li>

                        </ul>

                    </li>
                    <li className='text-white font-bold text-2xl hover:text-yellow-700 '>
                    {/* onClick={() => setClicked(!clicked)} */}
                    {/* onPointerOver={() => setHover(!hover)} */}
                        <h1   onClick={handleOpen} onPointerOver={() => setHover(!hover)}>Burgers</h1>
                        <div className= {hover ? 'flex-col space-y-5 justify-between pb-4 ': "hidden"}>
                            <li className='text-yellow-500 pb-4'>Beef Burger</li>
                            <li className='text-yellow-500 pb-4'>Fried Chicken Burger</li>
                            <li className='text-yellow-500'>Cheese Burger</li>

                        </div>
                        
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                      <ul>
                                          <li>Beef Burger</li>
                                      </ul>
                                    </Typography>
                                </Box>
                                </Modal>
                    </li>
                    
                    {/* {clicked ? 'justify-between pb-4' : "hidden"} */}
                        
                    <li className='text-white font-bold text-2xl hover:text-yellow-700 '>
                        <h1>Desert</h1>
                    </li>
                    <li className='text-white font-bold text-2xl  hover:text-yellow-700'>
                        <h1>Snacks</h1>
                    </li>
                </ul>

            </div>

        
    </div>
  )
}

export default Menu