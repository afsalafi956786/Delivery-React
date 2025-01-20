import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/ExploreMenu/Explore'
import Food from '../../components/FoodDisplay/Food';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {

     const [categroy,setCategory] = useState("All");


  return (
    <div>
        <Header/>
        <Explore category={categroy} setCategory={setCategory} />
        <Food category={categroy}/>
        <AppDownload/>
    </div>
  )
}

export default Home