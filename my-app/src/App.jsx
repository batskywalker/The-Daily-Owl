import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Article from './components/Article.jsx'
import Breaking from './components/Breaking.jsx'
import List from './components/List.jsx'

import './App.css'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // Fetch files from backend
    fetch('https://vpb1hm0m-5173.usw2.devtunnels.ms/newest')
      .then(response => response.json())
      .then(result => setData(result[0]))
      .catch(error => console.error('Error fetching files:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  else {
    console.log(data)
  }

  return (
    <>
      <div id="body">
        <Header />
        <Breaking volume={data.volume} day_month={data.day_month} year={data.year} />
        <Article heading={data.heading} paragraph_one={data.paragraph_one} paragraph_two={data.paragraph_two} image={data.image} quote_block={data.quote_block} />
      </div>
    </>
  )
}

export default App
