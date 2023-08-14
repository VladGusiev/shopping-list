import React from "react";
import "../styles/ListItem.css";

function List({item, deleteItemFunction}) {
    return (
        <div className="list-item">
            <p className="item-txt">{item.text}</p>
            <button className="rmv-btn" onClick={() => deleteItemFunction(item.id)}>X</button>
        </div>
    )
}

export default List;
