import ItemsPlaceholder from "./ItemsPlaceholder";
import Header from "./Header.js";
import '../styles/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
        <ItemsPlaceholder/>
      </header>
    </div>
  );
}

export default App;
