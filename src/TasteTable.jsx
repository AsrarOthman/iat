import React from "react";

const tasteOptions = ["Tak sedap", "Sederhana sedap", "Sedap"];

const tasteData = [
  { rasa: "Manis" },
  { rasa: "Pahit" },
  { rasa: "Masam" },
  { rasa: "Masin" },
];

const TasteTable = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Rasa</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
              Rasa Anda
            </th>
          </tr>
        </thead>
        <tbody>
          {tasteData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {item.rasa}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                <select style={{ width: "100%", padding: "5px" }}>
                  <option value="">-- Pilih --</option>
                  {tasteOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasteTable;
