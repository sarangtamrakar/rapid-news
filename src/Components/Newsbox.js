import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

function Newsbox(props) {


   const options = [
      {
         label: "Business",
         value: "business",
      },
      {
         label: "Entertainment",
         value: "entertainment",
      },
      {
         label: "General",
         value: "general",
      },
      {
         label: "Health",
         value: "health",
      },
      {
         label: "Science",
         value: "science",
      },
      {
         label: "Sport",
         value: "sport",
      },
      {
         label: "Technology",
         value: "technology",
      }
   ];



   const [category, setCategory] = useState('general');
   const [page, setPage] = useState(1);
   const [URL, setURL] = useState(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ea7aa26cd8fd438ca854226df43e0077&page=${page}&category=${category}`)
   const [totalResults, setTotalResults] = useState(0);
   const [articles, setArticles] = useState([]);



   async function handleChange(e) {
      console.log('category changed');
      setCategory(e.target.value);
      setURL(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ea7aa26cd8fd438ca854226df43e0077&page=${page}&category=${e.target.value}`)

   }







   useEffect(() => {

      async function fetchData() {

         setURL(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ea7aa26cd8fd438ca854226df43e0077&page=${page}&category=${category}`)

         let data = await fetch(URL);
         let parsedData = await data.json();

         setTotalResults(parsedData.totalResults);
         setArticles(parsedData.articles);
      }

      fetchData();

   }, [URL,category,page])



   async function prevHandler() {

      setPage(page - 1);
      setURL(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ea7aa26cd8fd438ca854226df43e0077&page=${page}&category=${category}`)

   }


   async function nextHandler() {
      console.log('next');
      setPage(page + 1);
      setURL(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ea7aa26cd8fd438ca854226df43e0077&page=${page}&category=${category}`)
   }



   return (
      <div className="container-fluid my-3" style={{ color: props.mode ? 'white' : 'gray', backgroundColor: props.mode ? 'gray' : 'white' }}>


         <div className="container-fluid d-flex justify-content-between ">

            <h2 style={{ color: props.mode ? 'white' : 'gray', backgroundColor: props.mode ? 'gray' : 'white' }} >Rapid {category} News</h2>
            <div className="dropdown">
               <label htmlFor="Topic" style={{ padding: '10px' }} >Choose a Topic:</label>
               <select id="Topic" value={category} onChange={handleChange}>
                  {
                     options.map((opt) => {
                        return <option value={opt.value} key={opt.value} >{opt.label}</option>
                     })
                  }
               </select>
            </div>

         </div>

         <div className="row">
            {
               articles.map((element) => {

                  // this the check for null values
                  if (element.urlToImage && element.url && element.title && element.description) {
                     return (
                        <div className="col-md-4" key={element.url}>
                           <Newsitem mode={props.mode} urlToImage={element.urlToImage} url={element.url} title={element.title} description={element.description} date={element.publishedAt} source={element.source.name} />
                        </div>

                     )
                  } else {
                     return null;
                  }
               })
            }

         </div>

         <div className="container-fluid d-flex justify-content-between my-2">
            <button type="button" disabled={page <= 1 ? true : false} className="btn btn-dark" onClick={prevHandler}>Prev</button>
            <button type="button" disabled={page >= Math.ceil(totalResults / 20) ? true : false} className="btn btn-dark" onClick={nextHandler} >Next</button>
         </div>
      </div>
   )
}

export default Newsbox
