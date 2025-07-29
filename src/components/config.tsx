import Photo from "../components/changephoto";
import "../styles/config.css";

type props = {
  fond: boolean;
  text: string;
  setText: (value: string) => void;
  inputvalue: string;
  seTinputvalue: (value: string) => void;
  image: string;
  setImage: (image: string) => void;
};

function config({
  fond,
  setText,
  inputvalue,
  seTinputvalue,
  image,
  setImage,
}: props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText(inputvalue);
    seTinputvalue("");
    console.log(inputvalue);
  };

  return (
    <div className={`slice${fond ? "" : "Cambio"}`}>
      <div className="perfil">
        <h2>Perfil</h2>
        <Photo image={image} setImage={setImage} />
        <br />
        <br />
        <p></p>
        <br />
        <p>
          <h1>Nombre de Perfil</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputvalue}
              onChange={(e) => seTinputvalue(e.target.value)}
              placeholder="Nuevo Nombre"
            />
            <button type="submit">Cambiar</button>
          </form>
        </p>
        <br />
        <p>
          <h1>Correo de Perfil</h1>
          <input type="email" name="" id="" />
        </p>
        <br />
        <h2>Biblioteca</h2>
        <p>
          <h3>ordenar por:</h3>
          <select name="" id="">
            <option value="">nombre</option>
            <option value="">fecha</option>
            <option value="">Numero</option>
          </select>
        </p>
        <br />
        <p>
          <h3>Tema</h3>
          <select name="" id="">
            <option value="">tropical</option>
            <option value="">Animation</option>
            <option value="">Porquesi</option>
          </select>
        </p>
      </div>
    </div>
  );
}

export default config;
