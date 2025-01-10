import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes"; // Stellen Sie sicher, dass der Dateiname korrekt ist

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;