import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mother1">
        <div className="main1">
          <div>
            <div className="header">
              <h1 style={{ color: "black", fontSize: "30px" }}>
                Ujian Sensori Bagi Program Pengiktirafan Pahang Best 2025
              </h1>
            </div>
          </div>
        </div>
        <div className="main2">
          <div className="main21">
            <div className="main211">
              <div className="avatar">
                <img
                  src="/avatar.png" // atau hanya "logo.jpeg" pun boleh
                  width={100}
                  height={100}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
            <div className="main212">
              <a>Nama:</a>
              <div className="login1"></div>
              <a>Kata Laluan:</a>
              <div className="login1"></div>
              <button className="button1" style={{ marginTop: "40px" }}>
                {" "}
                Hantar
              </button>
            </div>

            <div className="main213"></div>
          </div>
        </div>
        <div className="main3"></div>
      </div>
    </>
  );
}

export default Login;
