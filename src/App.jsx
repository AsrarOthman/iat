import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import "./App.css";
import DropdownCard from "./DropdownCard";
import TasteTable from "./TasteTable";
import TasteForm from "./TasteForm";

function App() {
  const [count, setCount] = useState(0);
  // State untuk toggle sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="motherx">
        {/* <Login/> */}
        <div className="mother1x">
          <div className="main1x">
            <div className="header">
              <div className="header1">
                <img
                  src="/logo-pertanian.png" // atau hanya "logo.jpeg" pun boleh
                  height={30}
                  alt="logo"
                />
              </div>
              <div>
                <div style={{ fontSize: "20px" }} className="tajuk">
                  <a>Sensori 2025</a>
                </div>
              </div>

              <div className="header2">
                <div className="header2z">
                  <img
                    src="/menu.png" // atau hanya "logo.jpeg" pun boleh
                    height={25}
                    alt="logo"
                    onClick={toggleSidebar} // Klik logo untuk toggle sidebar
                  />
                </div>

                {/* Sidebar */}
                <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                  <button onClick={toggleSidebar}>Tutup Sidebar</button>
                  <h2>Ini Sidebar</h2>
                  <h2>Ini Sidebar</h2>
                  <h2>Ini Sidebar</h2>
                  {/* Tambah kandungan sidebar di sini */}
                </div>

                {/* <img
                  src="/menu.png" // atau hanya "logo.jpeg" pun boleh
                  height={25}
                  alt="logo"
                /> */}
              </div>
            </div>
            <div className="sample1">
              <a style={{ fontSize: "16px" }}>Sample 1234 - karipap</a>
            </div>
            <div className="img">
              <div className="img1">
                <img
                  src="/img1.jpeg" // atau hanya "logo.jpeg" pun boleh
                  height={"100%"}
                  alt="logo"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            <div></div>
          </div>

          <div className="main2x">
            <div className="main21x">
              <DropdownCard />
              <TasteForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
