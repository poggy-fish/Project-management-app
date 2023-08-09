import Nav from "./views/nav/index";
import HomePage from "./views/homePage";
function App() {
  return (
    <div style={{ background: '#f5f9ff', minHeight: '100vh'}}>
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
