import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleName(e) {
    setItemName(e.target.value)
  }

  function handleCategory(e) {
    setItemCategory(e.target.value)
  }


    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,

  }
  return( 
   <form className="NewItem"  onSubmit= {(e => {e.preventDefault(); onItemFormSubmit(newItem)})}>
      <label>
        Name: {itemName}
        <input type="text" name="name" value = {itemName} onChange = {handleName}/>
      </label>

      <label>
        Category: 
        <select name="category" onChange = {handleCategory} value={itemCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
