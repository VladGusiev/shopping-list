
import React, {useState} from "react";
import AddingItems from "./AddingItems.js";
import ListItem from "./ListItem";


let nextItemId = 0;
function ItemsPlaceholder() {
    const [items, setItems] = useState([]);
    function addItem(itemName) {
        if(itemName==='') return; //cannot add 'empty' elements in list
        setItems([
                ...items,
                {
                    id: nextItemId++,
                    text: itemName,
                }
            ]
        );
    }
    function removeItem(itemId) {
        setItems(
            items.filter(item => item.id !== itemId)
        );
    }
    return(

        <>
            <AddingItems
                addingItemFunction={addItem}
            />
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <ListItem
                            item={item}
                            deleteItemFunction={removeItem}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}



export default ItemsPlaceholder;