import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProfilePopup from '../GlobalComponents/TestPopup'; // Importar ProfilePopup
import './Sidebar.css';

const SidebarTwo = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para el popup

  const items = [
    { id: 1, i: "Home", path: "/home", icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /> </svg> )},
    { id: 2, i: "Catalog", path: "/lists", icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" /> </svg> )},
    { id: 3, i: "Library", path: "/test", icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> </svg> )},
  ];

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Abrir el popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Cerrar el popup
  };

  return (
    <div className="containerSidebar">
      <div className="containerButtons">
        <div className='divnewTestButtonSidebar'>
          <button className='newTestButtonSidebar' onClick={handleOpenPopup}>
            <div className='splitSumandText'>
              <div className='iconsplitSumandText'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div className='textsplitSumandText'>{t('ZxAsDfGhJkLm')}</div>
            </div>
          </button>
        </div>
        {items.map(item => (
          <Link to={item.path} key={item.id}>
            <button className={`buttonShaper ${location.pathname === item.path ? 'active' : ''}`}>
              <div className="buttonsSplit">
                <div className="iconButton">{item.icon}</div>
                <div className="textButton">{item.i}</div>
              </div>
            </button>
          </Link>
        ))}
      </div>

      {isPopupOpen && <ProfilePopup closePopup={closePopup} />} {/* Renderizar el popup */}
    </div>
  );
};

export default SidebarTwo;
