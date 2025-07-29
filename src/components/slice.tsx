import { faHouse, faBook, faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/slice.css";

type props = {
  ir: () => void;
  ir2: () => void;
  ir3: () => void;
  modo: boolean;
};

function slice({ ir, ir2, ir3, modo }: props) {
  return (
    <div className={`bar${modo ? "" : "Cambio"}`}>
      <button onClick={ir} className={`botones${modo ? "" : "Cambio"}`}>
        <FontAwesomeIcon
          icon={faHouse}
          className={`icons${modo ? "" : "Cambio"}`}
        />
      </button>
      <button onClick={ir2} className={`botones${modo ? "" : "Cambio"}`}>
        <FontAwesomeIcon
          icon={faBook}
          className={`icons${modo ? "" : "Cambio"}`}
        />
      </button>
      <button onClick={ir3} className={`botones${modo ? "" : "Cambio"}`}>
        <FontAwesomeIcon
          icon={faGears}
          className={`icons${modo ? "" : "Cambio"}`}
        />
      </button>
    </div>
  );
}

export default slice;
