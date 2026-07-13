import { Login, Input, Buttons } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="page">
      <div className="contianer">
        <Login />
        <div className="card">
          <Input />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default App;
