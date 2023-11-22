// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm'; // Change the import statement
import ColorDetail from './ColorDetail';
const App = () => {
  const [colors, setColors] = useState([
    { id: '1', name: 'red', hex: '#FF0000' },
    { id: '2', name: 'green', hex: '#00FF00' },
    // ... other colors
  ]);

  const addColor = newColor => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route exact path="/colors/:color" element={<ColorDetail colors={colors}  />} />
        <Route path="*" element={<ColorList colors={colors}/>} />
      </Routes>
    </Router>
  );
};

export default App;
