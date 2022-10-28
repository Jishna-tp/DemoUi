import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import './Header.css'
import ProModal from '../Modal/ProModal';

const Header = () => {
  const [openModal, setOpenModel] = useState(false);

  return (
    <div className='header'>
      <div className='header_items'>
        <Sidebar />
            <div className='search'>
                <input type="search" className='search_bar' name="" id="" />
                <IoIcons.IoMdSearch className='search_icon' />
            </div>
            <div className='icons'>
                <IoIcons.IoIosNotifications className='icon1' />
                <CgIcons.CgProfile className='icon2' onClick={() => {setOpenModel(true);}} />
            </div>   
      </div>
      {openModal && <ProModal closeModal={setOpenModel} />}

    </div>
  )
}

export default Header