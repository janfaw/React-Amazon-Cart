import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({items}) {
  const getTotalPrice = () => {
      let total=0;
      items.forEach((item) => {
        total+= (item.price*item.quantity)
        
      })
       return total; 
        
      };
      console.log(items)
  const getTotalItems = () => {
    let totalItems=0;
    items.forEach((item) => {
      totalItems += parseInt(item.quantity);
      
    })
      return totalItems; 
      
    };
  
  return (
      <div className="CartTotal">
         <h3> 
            Subtotal({getTotalItems()} Items):
            <span className="CartTotal-price">
              <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true}  prefix={'$'} decimalScale={2} />
            </span>
          </h3>
          <button>
            Proceed to checkout
          </button>
        
      </div>
    )
}

export default CartTotal
