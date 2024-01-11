import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import { useState } from "react";
import ModeState from "./context/mode/ModeState";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <ModeState>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News category="business,technology,sports,health,entertainment" key="general" setProgress={setProgress} />} />
          <Route exact path="/business" element={<News category="business" key="business" setProgress={setProgress} />} />
          <Route exact path="/technology" element={<News category="technology" key="technology" setProgress={setProgress} />} />
          <Route exact path="/sports" element={<News category="sports" key="sports" setProgress={setProgress} />} />
          <Route exact path="/health" element={<News category="health" key="health" setProgress={setProgress} />} />
          <Route exact path="/entertainment" element={<News category="entertainment" key="entertainment" setProgress={setProgress} />} />
        </Routes>
      </Router>
    </ModeState>
  );
}

export default App;
