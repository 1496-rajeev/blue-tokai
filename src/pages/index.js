import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import SubHeader from "../components/sub-header";
import placeholder from '../assets/placeholder.png'

//styles
import './style.css'



function Index() {
  const navigate = useNavigate()
  const List = [
    { id: 1, name: "Popular Series", image: placeholder, path: "/series" },
    { id: 2, name: "Popular Movies", image: placeholder, path: "/movies" }
  ]

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="">
      <div className='page-header'>
        <Header />
        <SubHeader title={"Popular Titles"} />
      </div>
      <div className="content">
        {List.map((el) => {
          return (
            <div key={el.id} className='list-item' onClick={() => handleNavigation(el.path)}>
              <img style={{ backgroundColor: "gray" }} src={el.image} width="100px" alt='img' />
              <p>{el.name}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Index;