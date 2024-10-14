import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import ContentCompetences from "./components/ContentCompetences";
import Menu from "./components/Menu";
import './styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element=
          {
            <div className="container-fluid">
              <div className="row">
                <Menu />
                <Content />
              </div>
            </div>
          } 
        />
        <Route 
          path="/competences" 
          element=
          {
            <div className="container-fluid">
              <div className="row">
                <Menu />
                <ContentCompetences />
              </div>
            </div>
          } 
        />
        <Route 
          path="/projets" 
          element=
          {
            <div className="container-fluid">
              <div className="row">
                <Menu />
              </div>
            </div>
          } 
        />
        <Route 
          path="/contact" 
          element=
          {
            <div className="container-fluid">
              <div className="row">
                <Menu />
              </div>
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
