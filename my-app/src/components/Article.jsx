import {useState} from 'react';
import mikiePhoto from '../assets/mikie.png';
import '../App.css';
import Breaking from './Breaking.jsx';

function Article() {
    return (
        <div id="article">
            <img src={mikiePhoto} alt="Mikie in front of town hall" width="49%"/>
            <h2>UNITY: THE HOA RISES</h2>

            <p>In a surprising yet celebrated move, Wolfgang has officially named the enigmatic CloakedOne02 as Vice President of the Home Owners Association. Known for their razor-sharp project managament skills and a taste for mystery-laced efficiency, CloakedOne02 has already sent waves of curiosity and excitement through the community. Rumors swirl that the new VP intends to bring sweeping reforms—starting with a "Standardized Sapling Initiative" and stricter adherence to garden gnome placement guidelines. Residents are eager—and perhaps a little nervous—to see how CloakedOne02's silent authority will compliment Wolfgang's visionary leadership in shaping the next era of HOA governance across the island.</p>

            <div>
                <h3>"SOCIETY'S ESSENCE, REFLECTED IN UNITY."</h3>
            </div>

            <p>Wolfgang has firmly set his place in history uniting our world under the banners of his self-appointed "Home Owners Association". Current, Former, and Future residents can expect stiff but reasonable fines regarding policy enforcements from suitable infrastructure to ensuring community members are using pre-approved building materials. With the recent construction of the town hall nearing completion, many citizens are eager to see what will come next for our island (archipelago).</p>
        </div>
    );
}

export default Article;