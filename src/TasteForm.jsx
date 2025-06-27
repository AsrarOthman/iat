import React, { useState, useEffect } from "react";
import axios from "axios";

const TasteForm = () => {
  const [panels, setPanels] = useState([]);
  const [samples, setSamples] = useState([]);
  const [panel, setPanel] = useState("");
  const [sample, setSample] = useState("");
  const [formData, setFormData] = useState({});
  const [isExisting, setIsExisting] = useState(false);

  const tasteOptions = ["Tak sedap", "Sederhana sedap", "Sedap"];

  useEffect(() => {
    const fetchOptions = async () => {
      const panelRes = await axios.get("http://localhost:3001/api/panels");
      const sampleRes = await axios.get("http://localhost:3001/api/samples");
      setPanels(panelRes.data);
      setSamples(sampleRes.data);
    };
    fetchOptions();
  }, []);

  const handleCheckData = async () => {
    if (panel && sample) {
      const res = await axios.get(
        `http://localhost:3001/api/penilaian/${panel}/${sample}`
      );
      if (res.data) {
        setFormData(res.data);
        setIsExisting(true);
      } else {
        setFormData({});
        setIsExisting(false);
      }
    }
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3001/api/penilaian", {
      panel,
      sample,
      ...formData,
    });
    alert(isExisting ? "Data dikemaskini" : "Data disimpan");
  };

  return (
    <div>
      <h3>Panel & Sample</h3>
      <select value={panel} onChange={(e) => setPanel(e.target.value)}>
        <option value="">Pilih Panel</option>
        {panels.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <select value={sample} onChange={(e) => setSample(e.target.value)}>
        <option value="">Pilih Sample</option>
        {samples.map((s) => (
          <option key={s.name} value={s.name}>
            {s.name}
          </option>
        ))}
      </select>

      <button onClick={handleCheckData}>Cari</button>

      {panel && sample && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Input</th>
                <th>Rasa Anda</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 25 }, (_, i) => (
                <tr key={i}>
                  <td>Input {i + 1}</td>
                  <td>
                    <select
                      value={formData[`input${i + 1}`] || ""}
                      onChange={(e) =>
                        handleChange(`input${i + 1}`, e.target.value)
                      }
                    >
                      <option value="">-- Sila pilih --</option>
                      {tasteOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSubmit}>
            {isExisting ? "Edit/Save" : "Save"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TasteForm;
