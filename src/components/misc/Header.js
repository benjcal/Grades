import React from 'react'
import Board from 'react-icons/lib/md/assignment-turned-in'

export default (props) => 
    <header>
        <div className='logo'>
            <Board />
            <span className='text'>Grades</span>
        </div>
        
        <div className='search'>
            <input type='text' placeholder='Search'/>
        </div>
        
        <div className="right">
        </div>
    </header>
