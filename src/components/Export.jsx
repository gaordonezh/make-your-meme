import React, { useState } from "react";
import html2Canvas from "html2canvas";
import sleep from "../utils/sleep";

const Export = ({ name }) => {
  const [loading, setLoading] = useState(false);

  const exportar = async () => {
    setLoading(true);
    const canvas = await html2Canvas(document.querySelector("#meme"));
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = name;
    link.href = img;

    await sleep(1000);

    link.click();
    setLoading(false);
  };

  return (
    <button onClick={exportar} disabled={loading}>
      {loading ? "CARGANDO..." : "EXPORTAR"}
    </button>
  );
};

export default Export;
