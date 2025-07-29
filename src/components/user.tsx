type props = {
  texto: string;
  image: string;
  setimage: (image: string) => void;
};

function user({ texto, image }: props) {
  return (
    <div className="user">
      <img className="image" src={image} />
      <p style={{ marginLeft: "10px" }}>{texto}</p>
    </div>
  );
}

export default user;
