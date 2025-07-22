import React from 'react'
import './Slidebar.css';
import { BsSearch } from "react-icons/bs";
 const Slidebar = () => {
  return (
    <>
    <div className='slidebar'>
        <div className='slidebar-content'>
        <h2>History</h2>
        <div className='search'>
            <input type="text" placeholder='Search' className='search-input'/>
            <BsSearch className='search-icon'/>
        </div>
        <div className="list">
            <ul>
                
            </ul>
        </div>
        </div>
    </div>
    </>
  )
}
export default Slidebar;