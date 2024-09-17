import Content from "./components/Content";
import Menu from "./components/Menu";
import './styles/App.css'


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
