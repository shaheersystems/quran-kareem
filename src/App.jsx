import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SideBar from "./components/SideBar";

// https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/{id}.mp3 -- For audios
// http://api.alquran.cloud/v1/surah -- For Text
function App() {
  return (
    <div className='App'>
      <div className='flex'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
