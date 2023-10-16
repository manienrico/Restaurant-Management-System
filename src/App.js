import { AuthenticationPage,HomePage } from './pages/pages'

import { Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Restaurant management system */}
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
