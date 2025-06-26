import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import "./App.css";
import DropdownCard from "./DropdownCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="motherx">
        {/* <Login/> */}
        <div className="mother1x">
          <div className="main1x">
            <div>
              <div className="header">
                <div className="header1">
                  <img
                    src="/logo-pertanian.png" // atau hanya "logo.jpeg" pun boleh
                    height={45}
                    alt="logo"
                  />
                </div>

                <div className="header2">
                  <img
                    src="/menu.png" // atau hanya "logo.jpeg" pun boleh
                    height={30}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="img">
                <div className="img1">
                  <img
                    src="/img1.jpeg" // atau hanya "logo.jpeg" pun boleh
                    height={"100%"}
                    alt="logo"
                    // style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="main2x">
            <div className="main21x">
              <DropdownCard />
            </div>
          </div>
          <div className="main3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
