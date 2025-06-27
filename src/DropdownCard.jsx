import { useState } from "react";
import "./App.css";
import TasteTable from "./TasteTable";

function DropdownCard() {
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/submit", { name, email });
      alert("Berjaya simpan data!");
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Gagal simpan data.");
    }
  };

  return (
    <div>
      {/* Card A */}
      <div
        className="card"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxWidth: "100%",
          margin: "0",
          marginBottom: "30px",
        }}
      >
        <div
          onClick={() => setIsOpenA(!isOpenA)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "20px",
            // border: "solid red 1px",
            backgroundColor: "grey",
            borderRadius: "8px",
            width: "100%",
            height: "100px",
          }}
        >
          <h3 style={{ padding: "10px" }}>
            BAHAGIAN A: PENILAIAN PEMBUNGKUSAN PRODUK
          </h3>
        </div>

        {isOpenA && (
          <div className="slide-down" style={{ marginTop: "1rem" }}>
            <div>Ini Bahagian A yang Bentuk Produk</div>
            <div style={{ padding: "2rem" }}>
              <h2>Rasa</h2>
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "center",
                      width: "100%",
                    }}
                  >
                    <div style={{ padding: "20px" }}>Manis</div>
                    <input
                      className="inputbar"
                      type="text"
                      placeholder="Bau"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <br />
                  <input
                    className="inputbar"
                    type="text"
                    placeholder="Rasa"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <button type="submit">Simpan</button>
                </form>
              </div> */}
              <div>
                <h2>Penilaian Rasa</h2>
                <TasteTable />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card B */}
      <div
        className="card"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxWidth: "100%",
        }}
      >
        <div
          onClick={() => setIsOpenB(!isOpenB)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "20px",
            // border: "solid red 1px",
            backgroundColor: "grey",
            borderRadius: "8px",
            width: "100%",
            height: "100px",
          }}
        >
          <h3 style={{ padding: "10px" }}> BAHAGIAN B: UJIAN HEDONIK PRODUK</h3>
        </div>

        {isOpenB && (
          <div className="slide-down" style={{ marginTop: "1rem" }}>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
            <h1>data sini</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownCard;
