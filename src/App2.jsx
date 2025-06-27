import { useState, useEffect } from "react";
import TasteForm from "./TasteForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sampleList, setSampleList] = useState([]);
  const [selectedSample, setSelectedSample] = useState("");
  const [panel, setPanel] = useState("");
  const [panelA, setPanelA] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const storedPanel = localStorage.getItem("panel_local");
    if (storedPanel) {
      setPanelA(storedPanel); // Guna setPanelA di sini
    }
  }, []);
  // Fetch sample list from backend
  useEffect(() => {
    axios.get("http://localhost:3001/api/samples").then((res) => {
      setSampleList(res.data.map((row) => row.name));
    });
  }, []);

  const handleSampleSelect = (sample) => {
    setSelectedSample(sample);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("panel_local");
    navigate("/login");
  };

  // useEffect(() => {
  //   localStorage.setItem("panel_local", "asrar"); // Dummy panel
  // }, []);

  return (
    <div className="motherx">
      <div className="mother1x">
        <div className="main1x">
          <div className="header">
            <div className="header1">
              <img src="/logo-pertanian.png" height={30} alt="logo" />
            </div>
            <div>
              <div style={{ fontSize: "20px" }} className="tajuk">
                <a>Sensori 2025 </a>
              </div>
            </div>
            <div className="header2">
              <img
                src="/menu.png"
                height={25}
                alt="logo"
                onClick={toggleSidebar}
              />
              {/* Sidebar */}
              <div>
                <div
                  style={{ marginRight: " " }}
                  className={`sidebar ${isSidebarOpen ? "open" : ""}`}
                >
                  <a>{panelA}</a>
                  <button onClick={toggleSidebar}>Tutup Sidebar</button>
                  <h3>Senarai Sample</h3>
                  <a>{panel}</a>
                  {sampleList.map((samp) => (
                    <button
                      key={samp}
                      onClick={() => handleSampleSelect(samp)}
                      style={{ display: "block", margin: "5px 0" }}
                    >
                      {samp}
                    </button>
                  ))}
                  <button
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sample1">
            <a style={{ fontSize: "16px" }}>
              {selectedSample
                ? `Sampel: ${selectedSample}`
                : "Tiada sample dipilih"}
            </a>
          </div>

          <div className="img">
            <div className="img1">
              <img
                src="/img1.jpeg"
                height={"100%"}
                alt="logo"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>

        <div className="main2x">
          <div className="main21x">
            <TasteForm
              panel={panel}
              setPanel={setPanel}
              selectedSample={selectedSample}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
