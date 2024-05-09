import React, { useEffect, useState } from 'react'
import axios from "axios"


const News = () => {
    const [myNews, setmyNews] = useState([]);

    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=1f73b79c6b424f19a21fa4bea8d566e4").then(response => {
        console.log(response);
        setmyNews(response.data.articles);
    }).catch(error => {
       console.log(error);
    })
    }
    console.log(myNews);

    useEffect(() => {
     fetchData()
    },[])
  return (
    <>
     <div className='main'>
    {
       
        myNews.map((ele) => {
            return(
                <>
           <div className="card" style={{width:"350px", marginLeft:"4rem", marginTop:"2rem"}}>
            <img src={ele.urlToImage == null ? "https://sportshub.cbsistatic.com/i/r/2019/03/26/31a7ec6e-b846-47d5-8b2e-7eba37233a86/thumbnail/1200x675/ec88302ab4c7cf5a41a4342c449ae2fc/usatsi-12237743.jpg": ele.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
              <p className="card-text">{ele.discription}</p>
              <a href={ele.url} target='_blank' className="btn btn-primary">Readmore</a>
            </div>
          </div>
                </>
            );
        })}
        </div>    
    </>
  )
}

export default News