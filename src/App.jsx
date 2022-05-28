import React, { useState } from "react";
import html2Canvas from "html2canvas";

const App = () => {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");
  const [upload, setUpload] = useState(undefined);

  const exportar = async () => {
    const canvas = await html2Canvas(document.querySelector("#meme"));
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `MEMEXD_${imagen}.png`;
    link.href = img;
    link.click();
  };

  const handleUploadImage = (event) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded !== null && fileUploaded !== undefined) {
      setUpload(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSetImage = (event) => {
    setImagen(event.target.value);
    if (upload) setUpload(undefined);
  };

  const img = imagen === "custom" ? upload ?? "./static/images/empty.jpg" : `./static/images/${imagen}.jpg`;

  return (
    <section>
      <article>
        <div className="meme" id="meme">
          <p>{linea1}</p>
          <p>{linea2}</p>
          <figure>
            <img src={img} alt={`MEMEXD_${imagen}.png`} />
          </figure>
        </div>
      </article>
      <article>
        <h1>
          MEMEXD
          <span />
        </h1>
        <h6>Welcome onboard with us</h6>

        <div>
          <label htmlFor="selectImage">Select your meme type</label>
          <select value={imagen} onChange={handleSetImage} id="selectImage">
            <option value="fire">CASA EN LLAMAS</option>
            <option value="futurama">FUTURAMA</option>
            <option value="history">HISTORY CHANNEL</option>
            <option value="matrix">MATRIX</option>
            <option value="philosoraptor">PHILOSORAPTOR</option>
            <option value="smart">SMART GUY</option>
            <option value="custom">PERSONALIZADO</option>
          </select>
        </div>

        {imagen === "custom" && (
          <div>
            <label htmlFor="customImage">Select your image</label>
            <input type="file" placeholder="IMAGEN" id="customImage" onChange={handleUploadImage} />
          </div>
        )}

        <div>
          <label htmlFor="textOne">Top text</label>
          <input
            id="textOne"
            type="text"
            placeholder="Linea 1"
            value={linea1}
            onChange={(event) => setLinea1(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="textTwo">Bottom text</label>
          <input
            id="textTwo"
            type="text"
            placeholder="Linea 2"
            value={linea2}
            onChange={(event) => setLinea2(event.target.value)}
          />
        </div>

        <button onClick={exportar}>EXPORTAR</button>
      </article>
    </section>
  );
};

export default App;
