import { useState, useEffect } from "react";
import axios from "axios";

const TasteForm = ({ selectedSample }) => {
  const [panel, setPanel] = useState("");
  const [formData, setFormData] = useState({});
  const [isExistingA, setIsExistingA] = useState(false);
  const [isExistingB, setIsExistingB] = useState(false);
  const [tasteOptions, setTasteOptions] = useState([]);
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const labelNames1 = ["Rasa", "Bau", "Masa", "Tempat", "Gita", "Mila"];
  const labelNames2 = ["Rasa2", "Bau2", "Masa2", "Tempat2", "Gita2", "Mila2"];
  const tasteOptionsForRow = [
    ["Lembut", "Keras", "Berderai"],
    ["Cerah", "Gelap", "Pudar"],
    ["Pekat", "Cair", "Sederhana"],
    ["Menarik", "Biasa", "Tidak Menarik"],
    ["Murah", "Sederhana", "Mahal"],
    ["Bagus", "Boleh Ditingkatkan", "Kurang Sesuai"],
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/taste-options1")
      .then((res) => setTasteOptions(res.data))
      .catch((err) => console.error("Gagal ambil taste options:", err));
  }, []);

  useEffect(() => {
    const storedPanel = localStorage.getItem("panel_local");
    if (storedPanel) {
      setPanel(storedPanel);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (panel && selectedSample) {
        try {
          const res = await axios.get(
            `http://localhost:3001/api/penilaian/${panel}/${selectedSample}`
          );
          if (res.data) {
            setFormData(res.data);
            // Tentukan bahagian mana sudah ada data
            const hasA = res.data.input1 || res.data.input2; // contoh syarat minimum
            const hasB = res.data.input7 || res.data.input8;
            setIsExistingA(!!hasA);
            setIsExistingB(!!hasB);
          } else {
            setFormData({});
            setIsExistingA(false);
            setIsExistingB(false);
          }
        } catch (err) {
          console.error("Error fetching data", err);
        }
      }
    };

    fetchData();
  }, [panel, selectedSample]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const isValid = validateInputs(1, 6);
    if (!isValid) {
      alert("Sila isi semua maklumat dalam Bahagian A.");
      return;
    }

    await axios.post("http://localhost:3001/api/penilaian", {
      panel,
      sample: selectedSample,
      ...formData,
    });
    alert(isExistingA ? "Data dikemaskini" : "Data disimpan");
  };

  const handleSubmitB = async () => {
    const isValid = validateInputs(7, 12);
    if (!isValid) {
      alert("Sila isi semua maklumat dalam Bahagian B.");
      return;
    }

    await axios.post("http://localhost:3001/api/penilaian", {
      panel,
      sample: selectedSample,
      ...formData,
    });
    alert(isExistingB ? "Data dikemaskini" : "Data disimpan");
  };

  const validateInputs = (start, end) => {
    for (let i = start; i <= end; i++) {
      if (!formData[`input${i}`] || formData[`input${i}`].trim() === "") {
        return false;
      }
    }
    return true;
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
          <div
            className="slide-down"
            style={{ marginTop: "1rem", padding: "2rem" }}
          >
            <h2>Penilaian Rasa</h2>
            <div>
              {/* <strong>Panel:</strong> {panel}
              <br /> */}
              <strong>Sample:</strong> {selectedSample || "Tiada"}
            </div>

            {panel && selectedSample && (
              <>
                <table className="table-professional">
                  <thead>
                    <tr>
                      <th>Aspek</th>
                      <th>Rasa Anda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labelNames1.map((label, i) => (
                      <tr key={i}>
                        <td>{label}</td>
                        <td>
                          <select
                            value={formData[`input${i + 1}`] || ""}
                            onChange={(e) =>
                              handleChange(`input${i + 1}`, e.target.value)
                            }
                          >
                            <option value="">-- Sila pilih --</option>
                            {tasteOptions.map((opt) => (
                              <option key={opt.id} value={opt.label}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <br />
                <button onClick={handleSubmit}>
                  {isExistingA ? "Kemaskini" : "Simpan"}
                </button>
              </>
            )}
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
            backgroundColor: "grey",
            borderRadius: "8px",
            width: "100%",
            height: "100px",
          }}
        >
          <h3 style={{ padding: "10px" }}>BAHAGIAN B: UJIAN HEDONIK PRODUK</h3>
        </div>

        {isOpenB && (
          <div
            className="slide-down"
            style={{ marginTop: "1rem", padding: "2rem" }}
          >
            <h2>Penilaian Rasa</h2>
            <div>
              {/* <strong>Panel:</strong> {panel}
              <br /> */}
              <strong>Sample:</strong> {selectedSample || "Tiada"}
            </div>

            {panel && selectedSample && (
              <>
                <table className="table-professional">
                  <thead>
                    <tr>
                      <th>Aspek</th>
                      <th>Rasa Anda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labelNames2.map((label, i) => {
                      const inputKey = `input${i + 7}`; // bermula dari input7

                      return (
                        <tr key={i}>
                          <td>{label}</td>
                          <td>
                            <select
                              value={formData[inputKey] || ""}
                              onChange={(e) =>
                                handleChange(inputKey, e.target.value)
                              }
                            >
                              <option value="">-- Sila pilih --</option>
                              {(tasteOptionsForRow[i] || []).map((opt, idx) => (
                                <option key={idx} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <br />
                <button onClick={handleSubmitB}>
                  {isExistingB ? "Kemaskini" : "Simpan"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TasteForm;
