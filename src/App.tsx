import "./styles/App.css";
import Slice from "./components/slice";
import Pages from "./components/pages";
import User from "./components/user";
import { useState } from "react";

function App() {
  const [bt, setBt] = useState(1);
  const click = () => {
    setBt(2);
  };
  const click2 = () => {
    setBt(1);
  };
  const click3 = () => {
    setBt(3);
  };
  const [fondo, setFondo] = useState(false);
  const change = () => {
    setFondo(!fondo);
  };

  const [text, setText] = useState("Agregar Nombre de Usuario");
  const [inputValue, setInputValue] = useState("");

  const [Image, setimage] = useState<string>("default-profile.png"); // Imagen por defecto

  return (
    <div className={`conten${fondo ? "Cambio" : ""}`}>
      <Slice modo={fondo} ir3={click3} ir2={click2} ir={click} />
      <Pages
        bt={bt}
        imag={Image}
        setimag={setimage}
        text={text}
        setText={setText}
        inputvalue={inputValue}
        setinputvalue={setInputValue}
        config={fondo}
      />

      <User image={Image} setimage={setimage} texto={text} />

      <button onClick={change} className="boton"></button>
    </div>
  );
}

export default App;
