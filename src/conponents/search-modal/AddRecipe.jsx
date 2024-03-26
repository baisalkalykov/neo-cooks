import React from 'react'
import './AddRecipe.scss'
const AddRecipe = ({active,setActive}) => {
  return (
   <>
    {active &&(
      <div className={`modal ${active ? 'active' : ''}`}>
        <div className="modal__overlay">
           <div className="modal__content">
            
           </div>
        </div>
      </div>   
        )}
   </>
  )
}

export default AddRecipe
