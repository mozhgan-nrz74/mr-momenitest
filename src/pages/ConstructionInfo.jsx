import React from 'react';
import './ConstructionList.css';
import pic1 from '../assets/pic1.jpg'; 
import mpspic from '../assets/mpspic.jpg'; 
import Untitledllyh from '../assets/Untitledllyh.jpg'; 
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { FaUser, FaHatCowboy } from 'react-icons/fa';


const ConstructionInfo = () => {
    return (
        <div className="container">
            <img
                src={pic1} // Use the imported image here
                alt="Construction Site"
                className="construction-image" // Optional class for CSS styling
            />
            <div className="tabs">
            <span className="tab2"><FaMapMarkerAlt className="location-icon" />پردیس‌شهر</span>

                <button className="tab">اپارتمان</button>
                <button className="tab2x"><FiCircle className="yellow-circle-icon" />گودبرداری</button>

            </div>
<div className="info-row header-row">
                <div  className="info-rows" >
        <span className='colorsetting'>ساخت</span>

        <span>–</span>
       
    </div>
                <div  className="info-rows" >
        <span className='colorsetting'>زیربنا</span>

        <span>540 متر</span>
       
    </div>
                <div  className="info-rows" >
        <span className='colorsetting'>طبقه</span>

        <span>3</span>
       
    </div>
                <div  className="info-rows" >
        <span className='colorsetting'>سقف</span>

        <span>4</span>
       
    </div>
                </div>
            <div className="info-grid">
               
   
    <div className="info-row">
        <span className='colorsetting'>تعداد واحد:</span><span>36</span>
    </div>
    <div className="info-row">
        <span className='colorsetting'>پارکینگ:</span><span>12</span>
    </div>
    <div className="info-row">
        <span className='colorsetting'>تاریخ ثبت سیستم:</span><span>1403/11/3</span>
    </div>
    <div className="info-row">
        <span className='colorsetting'>کد نو سازی:</span><span>-</span>
    </div>
    <div className="info-row">
        <span className='colorsetting'>نام مالک:</span><span>اسلامیان</span>
    </div>
    <div className="info-row">
        <span className='colorsetting'>کاربری:</span><span>اداری تجاری</span>
    </div>
</div>

            <div className="map-info">
            
          <div className='addrressetting'> 
          <p className='colorsetting'>آدرس سازه:</p>
                <p> پردیس‌شهر - خیابان بهاران - جنب‌ملک الشهدای بهار ۱۲ - مجتمع ۱۰ - پلاک ۱۱</p></div>  
                <img
                src={mpspic} // Use the imported image here
                alt="Construction Site"
                className="construction-imagedown" 
            />
            
            </div>
            <div className="contact-info">
               
                
                
            </div>
  <div className="adres-info">
            
            <div className='engineer-info'> 
                <FaHatCowboy className='engineer-icon' />
                <div className='engineer-info2'>
                <p className='colorsetting'>مهندس سازه:</p>
                  <p> محمد رضا</p></div>  
                </div>
                <button className="contact-button">اطلاعات تماس</button>
            
                 
              
              </div>

        </div>
    );
};

export default ConstructionInfo;
