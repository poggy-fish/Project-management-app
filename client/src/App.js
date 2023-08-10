import Nav from "./views/nav/index";
import HomePage from "./views/homePage";
import Footer from "./footer";
function App() {
  return (
    <div style={{ background: '#f5f9ff', minHeight: '100vh'}}>
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
