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
    <h1>Hello world.</h1>
    <Router>
      <Routes>
        <Route path="/React" element={
          <>
            <NavBar />
            <Intro />
            <Mission /> 
            <Footer />
          </>
        }/>
        <Route path="/React/app" element={<UkraineApp/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;