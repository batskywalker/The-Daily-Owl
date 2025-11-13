import {useState} from 'react';
import '../App.css';

function Breaking(props) {
    return (
        <div id="breaking-header">
            <div class="inside breaking">
                <div>
                    <p>{props.volume}</p>
                    <p>DAILYOWL.COM</p>
                    <div id="date-block">
                        <p>{props.day_month}</p>
                        <p>{props.year}</p>
                    </div>
                    
                </div>
                <h1>BREAKING NEWS</h1>
            </div>
        </div>
    );
}

export default Breaking;