import Header from "./components/Header/Header";
import MiniBlog from "./components/MiniBlog/MiniBlog";
import "./App.css";

const App = () => {
   return (
      <div className="app">
         <Header />
         <MiniBlog />
      </div>
   );
};

export default App;
