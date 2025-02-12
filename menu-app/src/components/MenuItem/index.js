import React from"react"

const MenuItem = ({item}) => {
    return(
        <div className="menu-item" id={`menu-item-${item.itemId}`}>
            <h2>{item.itemName}</h2>
            <p>{item.itemDescription}</p>
            <p>${item.itemPrice}</p>
            <button>Add to Cart</button>
        </div>
    );
};
export default MenuItem;