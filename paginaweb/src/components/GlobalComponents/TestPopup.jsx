import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import './ProfilePopup.css';

const ProfilePopup = ({ closePopup }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [language, setLanguage] = useState('');
  const [trialPeriodDays, setTrialPeriodDays] = useState(3);
  const [selectedTrialPeriodDays, setSelectedTrialPeriodDays] = useState(3);
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [fileDropped, setFileDropped] = useState(false); // Estado para manejar el archivo
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await fetch(`http://localhost:5001/api/users/${userId}`);
          const data = await response.json();
          setUserInfo(data);
          setLanguage(data.language || 'en');
          setTrialPeriodDays(data.trialPeriodDays || 3);
          setSelectedTrialPeriodDays(data.trialPeriodDays || 3);
          i18n.changeLanguage(data.language || 'en');
        } catch (error) {
          console.error("Error al obtener la información del usuario:", error);
        }
      }
    };

    const fetchProductInfo = async () => {
      const productId = localStorage.getItem('selectedProductId');
      if (productId) {
        try {
          const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${productId}.json`);
          const data = await response.json();
          if (data.product) {
            setProductImage(data.product.image_url);
            setProductName(data.product.product_name);
          }
        } catch (error) {
          console.error("Error al obtener la información del producto:", error);
        }
      }
    };

    fetchUserInfo();
    fetchProductInfo();
  }, []);

  const closepls = () => {
    closePopup();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setFileDropped(true); // Actualizar el estado para indicar que se cargó un archivo
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
  };

  return (
    <div className="popupOverlayqwer">
      <div className="popupContentqwer">
        <div className='oasmpdsop'>
          <div className='iodsfino'>
            Upload file
          </div>
          <button onClick={closepls} className="iodfna">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="dropzone-container" onDrop={handleFileDrop} onDragOver={handleDragOver}>
          {!fileDropped ? (
            <div className="dropzone">
              {t('Arrastra un archivo aquí o haz clic para seleccionarlo.')}
            </div>
          ) : (
            <div className="file-confirmation">
              {t('Archivo cargado correctamente.')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
