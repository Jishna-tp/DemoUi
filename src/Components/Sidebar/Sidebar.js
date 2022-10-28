import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu'


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <div className='Sidebar'>
        <NavLink to='#' className='NavIcon'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </NavLink>
      </div>
      <div style={{left: sidebar ? '0' : '-100%',transition: '350ms'}} className='SidebarNav' sidebar={sidebar}>
        <div className='Head'>
          <h1>Meetule</h1>
          <NavLink to='#' className='NavIcon'>
            <FaIcons.FaBars onClick={showSidebar}/>
          </NavLink>
          </div>
          {
            SidebarData.map((item,index) => {
              return <SubMenu item={item} key={index} />
            })}   
      </div>
    </>
  );
}

export default Sidebar