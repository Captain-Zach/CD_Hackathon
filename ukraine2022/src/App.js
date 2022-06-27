import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './ukraineSite/NavBar';
import Intro from './ukraineSite/Intro';
import Mission from './ukraineSite/Mission';
import Footer from './ukraineSite/Footer';
import UkraineApp from "./ukraineApp/UkraineApp";

function App() {
  // TESTING BRANCHES!!!
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Intro />
            <Mission /> 
            <Footer />
          </>
        }/>
        <Route path="/app" element={<UkraineApp/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;