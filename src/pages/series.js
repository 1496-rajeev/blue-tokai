import React from 'react'
import { useEffect, useState } from 'react'

//components
import Header from '../components/header'
import SubHeader from '../components/sub-header'
import Footer from '../components/footer'

//data
import data from '../feed/sample.json'

//style
import './style.css'

export default function Series() {
  const [seriesData, setSeriesData] = useState([])

  useEffect(() => {
    //filter data according to "series" and `releaseYear`  >= `2010`
    const filteredData = data.entries.filter((data) => data.programType === "series" && data.releaseYear >= `2010`)
    //sorted data according to title
    const sortedData = filteredData.sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0)
    //sliced 21 item
    const slicedData = sortedData.slice(0, 21)
    setSeriesData(slicedData)
  }, [])
  return (
    <div>
      <div className='page-header'>
        <Header />
        <SubHeader title={"Popular Series"} />
      </div>
      <div className='content'>
        {seriesData?.map((item) => {
          return (<div key={item.title} className='list-item'>
            <img src={item.images["Poster Art"].url} width="120px" alt="img" />
            <p>{item.title}</p>
          </div>)
        })}
      </div>
      <Footer />
    </div>
  )
}
