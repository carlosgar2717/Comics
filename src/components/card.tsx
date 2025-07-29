import { usuarios } from "../data/data";
import "../styles/App.css";

export function Conten() {
  return (
    <div className="cards">
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="cards">
          <div className="card1" id="marvel">
            <div className="face front">
              <img src={usuario.img} />
            </div>

            <div className="face back">
              <h3>{usuario.title}</h3>
              <h4>Requisitos Minimos</h4>
              <p>{usuario.txt}</p>
              <div className="link">
                <a href={usuario.link}>more</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Conten;
