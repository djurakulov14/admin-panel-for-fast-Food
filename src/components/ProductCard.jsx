import { useState } from 'react';
import MyModal from './MyModal';

import Button from "./Button";
import ModalChild from './ModalChild';
import { useDispatch } from 'react-redux';
import { removePizza } from '../../Redux/features/pizzas/pizzaasThunk';

const ProductCard = ({ item, price }) => {
   const [visible, setVisible] = useState(false)
   const dispatch = useDispatch();

   return (
      <>
         <div id={item.type} className="max-lg:flex  max-md:block bg-white overflow-hidden rounded-2xl drop-shadow-[0px_20px_30px_rgba(0,0,0,0.09)]">
            <a href="#0" className='rounded-2xl overflow-hidden max-lg:max-w-[210px] w-full'>
               <img className="rounded-2xl  w-full" src={item.img} alt="" />
            </a>
            <div className="p-5 w-full">
               <a href="#0">
                  <h5 className="mb-2 text-2xl text-black max-md:text-xl">{item.title}</h5>
               </a>
               <p className="mb-3 font-normal text-base text-[#75797F] max-md:truncate max-sm:text-sm">{item.body}</p>
               <div className="flex justify-between items-center w-full">
                  <span className='text-black font-bold'>{item.price}</span>
                  {/* <Button onClick={() => setVisible(true)}>Order Now</Button> */}
                  <Button onClick={() => dispatch(removePizza(item.id))}>Order Now</Button>
               </div>
            </div>
         </div>
         <MyModal visible={visible} setVisible={setVisible}>
            <ModalChild item={item}/>
         </MyModal>
      </>
   );
}

export default ProductCard;