import html2Canvas from "html2canvas";

const Export = ({ name, memeRef }) => {
  const exportar = async () => {
    const canvas = await html2Canvas(memeRef.current);
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = name;
    link.href = img;
    link.click();
  };

  return <button onClick={exportar}>EXPORTAR</button>;
};

export default Export;
