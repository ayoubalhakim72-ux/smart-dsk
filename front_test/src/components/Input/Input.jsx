import eyeClosed from "../../assets/icons8-hide-password-30.png"
import eyeOpen from "../../assets/icons8-show-password-30.png"
import "./Input.css";
import { useState } from "react";


const Input = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="box">
      <input className="user" type="text" placeholder="Username" />
      <input className="pass" type={showPassword ? "text" : "password"} placeholder="Password" />
       <button
        type="button"
        className="show"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
  <img src={eyeClosed} alt="Hide password" />
) : (
  <img src={eyeOpen} alt="Show password" />
)}
      </button>
    </div>
  );
};

export default Input;
