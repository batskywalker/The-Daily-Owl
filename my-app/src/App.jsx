import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Article from './components/Article.jsx'
import Breaking from './components/Breaking.jsx'

import './App.css'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // Fetch files from backend
    fetch('http://localhost:3001/api/files')
      .then(response => response.json())
      .then(result => console.log('Files:', result.files))
      .catch(error => console.error('Error fetching files:', error));

    // Fetch article data
    fetch('vol-1.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="body">
        <Header />
        <Breaking volume={data[0].volume} day_month={data[0].day_month} year={data[0].year} />
        <Article heading={data[0].heading} paragraph_one={data[0].paragraph_one} paragraph_two={data[0].paragraph_two} image={data[0].image} quote_block={data[0].quote_block} />
      </div>
    </>
  )
}

export default App
