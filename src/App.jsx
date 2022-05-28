import React, { useRef, useState } from "react";
import SelectType from "./components/SelectType";
import InputTempURL from "./components/InputTempURL";
import InputText from "./components/InputText";
import Export from "./components/Export";
import ContentMEME from "./components/ContentMEME";

const App = () => {
  const memeRef = useRef(null);
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");
  const [upload, setUpload] = useState(undefined);

  const handleSetImage = (event) => {
    setImagen(event.target.value);
    if (upload) setUpload(undefined);
  };

  return (
    <section>
      <article>
        <ContentMEME memeRef={memeRef} upload={upload} imagen={imagen} text={{ linea1, linea2 }} />
      </article>
      <article>
        <h1>
          MEMEXD
          <span />
        </h1>
        <h6>Welcome onboard with us</h6>
        <ContentMEME memeRef={memeRef} upload={upload} imagen={imagen} text={{ linea1, linea2 }} />

        <SelectType imagen={imagen} handleSetImage={handleSetImage} />
        {imagen === "custom" && <InputTempURL setUpload={setUpload} />}
        <InputText label="Top text" value={linea1} setValue={setLinea1} />
        <InputText label="Bottom text" value={linea2} setValue={setLinea2} />
        <Export name={`MEMEXD_${imagen}.png`} memeRef={memeRef} />
      </article>
    </section>
  );
};

export default App;
