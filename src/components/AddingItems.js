import {useState} from "react";
import "../styles/AddingItems.css";

function AddingItems({ addingItemFunction }) {
    const [itemName, setItemName] = useState('');
    function handleEnterPressing(e) {
        if(e.keyCode === 13) {
            addingItemFunction(itemName);
            setItemName('')
        }
    }

    return (
        <>
            <input
                type="text"
                value={itemName}
                placeholder="Item to buy"
                onChange={e => setItemName(e.target.value)}
                onKeyDown={handleEnterPressing}
            />
            <button
                className="add-btn"
                onClick={() => {
                    setItemName('');
                    addingItemFunction(itemName);
            }}>Add</button>
        </>
    );
}

export default AddingItems;