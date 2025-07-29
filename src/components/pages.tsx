import "../styles/App.css";
import Inicio from "../components/Inicio";
import Config from "../components/config";
import Biblio from "../components/biblioteca";
import { useState } from "react";

type props = {
  text: string;
  setText: (value: string) => void;
  inputvalue: string;
  setinputvalue: (value: string) => void;
  config: boolean;
  imag: string;
  bt: number;
  setimag: (image: string) => void;
};

interface Usuario {
  id: number;
  img: string;
  title: string;
  txt: string;
  link: string;
}
function pages({
  config,
  text,
  setText,
  inputvalue,
  setinputvalue,
  imag,
  setimag,
  bt,
}: props) {
  const [addbiblio, Setaddbiblio] = useState<Usuario[]>([]);

  return (
    <>
      <div className={`body${bt == 2 ? "" : "Cambio"}`}>
        <Inicio add={addbiblio} setadd={Setaddbiblio} />
      </div>
      <div className={`body2${bt == 1 ? "" : "Cambio"}`}>
        <Biblio add={addbiblio} setadd={Setaddbiblio} />
      </div>

      <div className={`body3${bt == 3 ? "" : "Cambio"}`}>
        <Config
          setImage={setimag}
          image={imag}
          text={text}
          setText={setText}
          inputvalue={inputvalue}
          seTinputvalue={setinputvalue}
          fond={config}
        />
      </div>
    </>
  );
}

export default pages;
