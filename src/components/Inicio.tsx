import { usuarios } from "../data/data";
import "../styles/inicio.css";
import "../styles/App.css";

interface Usuario {
  id: number;
  img: string;
  title: string;
  txt: string;
  link: string;
}

type props = {
  add: Usuario[];
  setadd: (value: Usuario[]) => void;
};

export function card({ add, setadd }: props) {
  const onadd = (usuario: Usuario) => {
    if (add.find((item) => item.id === usuario.id)) {
      alert("Ya fue agregado en la biblioteca");
      return;
    }
    setadd([...add, usuario]);
  };

  const abrirVentana = (usuario: Usuario) => {
    // Parámetros: URL, nombre, especificaciones (opcional)
    window.open(
      usuario.link,
      "comic",
      "width=1200,height=1200,top=100,left=400,"
    );
  };

  return (
    <div className="cards">
      {usuarios.map((usuario: Usuario) => (
        <div key={usuario.id}>
          <div className="card1" id="marvel">
            <div className="face front">
              <img src={usuario.img} />
            </div>

            <div className="face back">
              <h3>{usuario.title}</h3>
              <p>Sinopsis</p>
              <p>{usuario.txt}</p>
              <div className="link">
                <button onClick={() => abrirVentana(usuario)}>more</button>
                <h3 onClick={() => onadd(usuario)}>📚</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default card;
