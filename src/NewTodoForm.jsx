import { useState } from "react"
export function NewTodoForm(props)
{
    props.onSubmit
    const [newItem,setNewItem]= useState("")
    
    function handleSubmit(e)
{
  e.preventDefault()

  props.onSubmit(newItem)
  
  setNewItem("")
}

   return <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label><br />
          <input value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" /><br />
      </div>
      <button className="btn">Add Item</button>
    </form>
}