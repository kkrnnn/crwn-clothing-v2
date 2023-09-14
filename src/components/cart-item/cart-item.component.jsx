import { useState } from 'react';


export const CartItem = () => {
    const { name, quantity } = useState();
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )

}

export default CartItem;