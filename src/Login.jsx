import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Login({ setIsLoggedIn }) {
  const [panel, setPanel] = useState("");
  const [password, setPassword] = useState("");
  const [panelList, setPanelList] = useState([]);
  const navigate = useNavigate();

  // Fetch senarai nama panel
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/panel-names")
      .then((res) => setPanelList(res.data))
      .catch((err) => console.error("Gagal ambil panel:", err));
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/login", {
        name: panel,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("panel_local", panel);
        setIsLoggedIn(true);
        navigate("/main");
      } else {
        alert("Login gagal: Nama atau kata laluan salah");
      }
    } catch (err) {
      alert("Ralat semasa login");
      console.error(err);
    }
  };

  return (
    <div className="mabo">
      <div className="mother1">
        <div className="main1">
          <div className="header">
            <h1 style={{ color: "black", fontSize: "30px" }}>
              Ujian Sensori Bagi Program Pengiktirafan Pahang Best 2025
            </h1>
          </div>
        </div>

        <div className="main2">
          <div className="main21">
            <div className="main211">
              <div className="avatar">
                <img
                  src="/avatar.png"
                  width={100}
                  height={100}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>

            <div className="main212">
              <label>Nama Panel:</label>
              <select
                value={panel}
                onChange={(e) => setPanel(e.target.value)}
                required
              >
                <option value="">-- Pilih Panel --</option>
                {panelList.map((p, idx) => (
                  <option key={idx} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>

              <label>Kata Laluan:</label>
              <input
                type="password"
                placeholder="Kata Laluan"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button onClick={handleLogin}>Masuk</button>
            </div>

            <div className="main213"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
