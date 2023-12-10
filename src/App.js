// src/App.js
import React from 'react';
import RatingWidget from './RatingWidget.js';
import WeatherWidget from './WeatherWidget.js';

const App = () => {
    return (
        <div className="App">
            <h1>Rating and Weather App</h1>
            <RatingWidget />
            <WeatherWidget />
        </div>
    );
};

export default App;

