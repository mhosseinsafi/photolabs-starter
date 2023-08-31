import React from 'react';
import './App.scss';
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';


const App = () => (
  <div className="App">
    <HomeRoute topics={topics} photos={photos} />
  </div>
)

export default App;
