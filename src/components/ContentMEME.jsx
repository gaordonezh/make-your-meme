const ContentMEME = ({ imagen, upload, text, memeRef }) => {
  const img =
    imagen === "custom" ? upload ?? "./static/images/empty.jpg" : `./static/images/${imagen}.jpg`;

  return (
    <div className="meme" id="meme" ref={memeRef}>
      <p>{text.linea1}</p>
      <p>{text.linea2}</p>
      <figure>
        <img src={img} alt={`MEMEXD_${imagen}.png`} />
      </figure>
    </div>
  );
};

export default ContentMEME;
