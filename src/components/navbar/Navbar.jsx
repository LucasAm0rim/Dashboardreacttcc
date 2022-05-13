import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Pesquisar...' />
          <SearchOutlinedIcon/>
        </div>
        <div className="itens"></div>
          <div className="item">
          <DarkModeIcon/>
          </div>
          <div className="item">
           <NotificationsNoneIcon/> 
          </div>
          <div className="item">
            
          </div>
          <div className="item">
            
          </div>
          <div className="item">
            
          </div>
          
          
      </div>
    </div>
  );
};

export default Navbar