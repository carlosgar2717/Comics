type props = {
  texto: string;
  image: string;
  setimage: (image: string) => void;
};

function user({ texto, image }: props) {
  return (
    <div className="user">
      <img className="image" src={image} />
      <p className="texto">{texto}</p>
    </div>
  );
}

export default user;
