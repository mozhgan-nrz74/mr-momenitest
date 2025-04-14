import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { FaMapMarkerAlt, FaRegClock, FaSearch  } from "react-icons/fa";
import { FiCircle, FiFilter } from "react-icons/fi";
import { BsBuildingsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.jpg"; 
import pic2 from "../assets/pic2.jpg"; 
import Modal from "../components/Modal";
import ConstructionInfo from "./ConstructionInfo";
import "./ConstructionList.css"


const allProjects = [
  {
    engineer: "مهندس سعید موسوی",
    date: "۱۴۰۰/۰۸/۱۸",
    status: "شهرک صدف",
    stage: "گودبرداری",
    image: pic1,
  },
  {
    engineer: "مهندس مهدی رحعی",
    date: "۱۴۰۰/۰۸/۱۸",
    status: "شهرک صدف",
    stage: "گودبرداری",
    image: pic2,
  },
  {
    engineer: "مهندس رسافر بهاری",
    date: "۱۴۰۰/۰۸/۱۷",
    status: "شهرک صدف",
    stage: "گودبرداری",
    image: pic1,
  },
  {
    engineer: "مهندس علی احمدی",
    date: "۱۴۰۰/۰۵/۰۸",
    status: "شهرک صدف",
    stage: "گدودبرداری",
    image: pic2,
  },
  {
    engineer: "مهندس رضا حیدری",
    date: "۱۴۰۰/۰۵/۰۹",
    status: "شهرک صدف",
    stage: "شروع",
    image: pic2,
  },
  {
    engineer: "مهندس حسن محمدی",
    date: "۱۴۰۰/۰۸/۱۸",
    status: "شهرک صدف",
    stage: "گودبرداری",
    image: pic1,
  },
];

export default function ConstructionList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [stageFilter, setStageFilter] = useState("");
  const [selectedButton ,setSelectedButton] =useState("btn-1")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeSelectedButton = (param)=>{
      setSelectedButton(param)
  }
  

  const filtered = allProjects.filter((project) => {
    const matchesSearch =
      project?.engineer?.includes(search) || project?.street?.includes(search);
    const matchesStatus = statusFilter ? project?.status === statusFilter : true;
    const matchesStage = stageFilter ? project?.stage === stageFilter : true;
    return matchesSearch && matchesStatus && matchesStage;
  });

  console.log(search,isModalOpen)
  return (
    <div className="construction-wrapper">
      <div className="header">

        <div className="header-icon">
          <BsBuildingsFill/>
        </div>
        <div className="header-text">

        <h4>لیست سازه ها</h4>
        <label>
          135,230 سازه یافت شد
        </label>


        </div>
        <div className="header-button">
          <HiChevronLeft/>
        </div>

      </div>
         <div className="search-filter">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="جستجو..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="search-filter">
      
        <span className="filtericon"><FiFilter size={13} className="filtericoncolor" />فیلترها</span>
          
          
       
        <buttun id="btn-1" onClick={(e)=>{setSelectedButton(e.target.id)}}   className={`buttonfilter ${selectedButton === "btn-1" ? 'selected' : ''}`}  value={stageFilter} onChange={(e) => setStageFilter(e.target.value)} >
          مرحله ساخت
          
        </buttun>
        <buttun  id ="btn-2" onClick={(e)=>{setSelectedButton(e.target.id)}}  className={`buttonfilter ${selectedButton === "btn-2" ? 'selected' : ''}`} 
 value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          محله
          
        </buttun>
        <buttun id="btn-3" onClick={(e)=>{setSelectedButton(e.target.id)}}   className={`buttonfilter ${selectedButton === "btn-3" ? 'selected' : ''}`} 
 value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          متراژ سازه
          
        </buttun>
    
      </div>

      <div className="project-list">
        {filtered.map((project, idx) => (
          <div className="project-card" key={idx}>
             <img src={project.image} className="cardImage" />
            <div className="project-info">
           
              <h4 className="enginer">{project.engineer}</h4>
              <div className="badges">
                
                <span className="badgesspan"><FaMapMarkerAlt className="location-icon" />{project.status}</span>


              <span className="badgesspan"><FaRegClock className="time-icon" />{project.date}</span>
                
              </div>
            </div>
            <div className="badges1">
            <span className="badgesspan"><FiCircle className="yellow-circle-icon" />{project.stage}</span>
        {/* <Link to="/constructionInfo"> Add the Link here */}
        
          <label onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                                <HiChevronLeft className="text-gray-100 w-5 h-5" />
                            </label>
        {/* </Link> */}

            
                {/* <span className="status"><FiCircle className="yellow-circle-icon" />{project.stage}</span> */}
              
              {/* <label className="arrow" ><HiChevronLeft /></label> */}
                
              </div>
            
          </div>
        ))}
        {filtered.length === 0 && <p className="no-result">نتیجه‌ای یافت نشد.</p>}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width={"600px"} heigth={"800px"}>
                <ConstructionInfo />
            </Modal>
      </div>
    </div>
  );
}