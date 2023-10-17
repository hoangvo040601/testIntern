import Content from "./components/content/content";
import SideBar from "./components/sidebar/sidebar";
import './app.scss'
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <div className="app-sidebar">
        <SideBar />
      </div>
      <div className="app-content">
        <Content>
          <Footer/>
        </Content>
      </div>
    </div>
  );
}

export default App;
