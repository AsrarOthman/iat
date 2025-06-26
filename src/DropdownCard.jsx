import { useState } from "react";
import "./App.css";

function DropdownCard() {
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);

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
          <h3 style={{ padding: "10px" }}>Bahagian A (Klik Saya)</h3>
        </div>

        {isOpenA && (
          <div className="slide-down" style={{ marginTop: "1rem" }}>
            <div>Ini Bahagian A yang muncul bila klik A!</div>
            <h1>data sini</h1>
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
          <h3 style={{ padding: "10px" }}>
            {" "}
            Ujian Sensori Produk Industri Asas Tani
          </h3>
        </div>

        {isOpenB && (
          <div className="slide-down" style={{ marginTop: "1rem" }}>
            Ini Bahagian A yang muncul bila klik A!
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownCard;
