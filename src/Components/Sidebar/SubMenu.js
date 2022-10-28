import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './SubMenu.css';


const SubMenu = ({item}) => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
        <NavLink to={item.path} className='link' onClick={item.subNav && showSubnav} >
          <div>
            <lable>{item.title}</lable>
          </div>
          <div>
            {item.subNav && subnav 
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null
            }
          </div>
        </NavLink>
        {subnav && item.subNav.map((item, index) => {
          return (
            <NavLink to={item.path} className='sublink' key={index}>
              <div>
                <label>{item.title}</label>
              </div>
            </NavLink>
          )
        })}
        {/* <button className='logout'> Log out </button> */}
    </div>
  )
}

export default SubMenu