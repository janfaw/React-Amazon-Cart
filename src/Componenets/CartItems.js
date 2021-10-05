import React from 'react'

import './CartItems.css';
import CartItem from './CartItem';

function CartItems({items,setCartItems}) { 

    const deleteItem = (indexToDelete) =>{
        
        const newItems=items.filter((vlaue, index) =>{
            return index!==indexToDelete
        })
        setCartItems(newItems)
    }
    const ChangeItemQuantity=(e, index) =>{
       //Change the state without a setter function is not allowed, so we use the deep clone mehtod 
        const newItems=[...items] 
        newItems[index].quantity=e.target.value
        setCartItems(newItems);
   }
    return (
        <div className="CartItems">
            
            <h1>Shoping Cart</h1>
            <hr />
            <div className="CartItems-items">
                {items.map((item, index)=>
                    <CartItem 
                    index={index}
                    item={item}
                    key={index}
                    changeItemQuantity={ChangeItemQuantity} 
                    deleteItem={deleteItem}                  
                    />
                )}
                
            </div>
            
        </div>
    )
}

export default CartItems
