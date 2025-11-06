import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import warPhoto from '../../Old/wars.png'
import lecternPhoto from '../../Old/lectern.png'
import Header from './components/Header.jsx'

import './App.css'

function App() {
  return (
    <>
      <div>
        <Header />

        <div id="body">
            <img src={lecternPhoto} class="first-img" />
            <div class="brief small article">
                <p>Candidates were presented with several questions on the following topics: </p>

                <ul>
                    <li>How they plan to keep servers active.</li>
                    <li>What are their plans after taking office.</li>
                    <li>What are their views on the VERY hot topic of keep inventory.</li>
                    <li>How will their office effect the day to day lives of players.</li>
                </ul>
                <p>This was quite astonishing. Candidates were also asked to shed light on their opinions regarding the tragic John Smith bombings.</p>
                <p>(pictured bottom left)</p>
            </div>
            <div class="small article">
                <h2>UNOFFICIAL FLASH DEBATE LEADS TO STARTLING REVELATIONS.</h2>
                <p>LAST NIGHT a surprise debate was held. 3 Candidates were in attendance. WINSTASH WAS NOT IN ATTENDANCE, pending comments from him concerning his absence.</p>
            </div>
            <img src={warPhoto} class="second-img" />
            <div class="article">
                <p class="opinion">[OPINION]</p>
                <p class="opinion">Now that the "Flash Debate" has concluded here are some key takeaways. Mr.Snek plans to install a community prison to house unruly aspirants. Isaac has pledged to make efforts to bring back prosperity to the server via a world reset. Leiadog astounds crowd with professional and satisfying answers to difficult questions. No clear frontrunner has emerged yet. More information will be presented.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
