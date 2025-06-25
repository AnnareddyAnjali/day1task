import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const HomePage = () => {
    let page1=useNavigate("");
    let page2=useNavigate("");
    return (
        <div id='home-btnContainer'>
            <button onClick={()=>{
                page1("/suggestions")
            }}>Suggestions Page</button>
            <button onClick={()=>{
                page2("/preference")
            }}>Preference Page</button>

               <Outlet />
        </div>
    )
}

export default HomePage
