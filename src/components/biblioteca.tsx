import "../styles/inicio.css";
import "../styles/App.css";

type Props = {
  add: Usuario[];
  setadd: (value: Usuario[]) => void;
};

interface Usuario {
  id: number;
  img: string;
  title: string;
  txt: string;
  link: string;
}

function biblioteca({ add, setadd }: Props) {
  const onDeleteProduct = (mapeo: Usuario) => {
    const results = add.filter((item) => item.id !== mapeo.id);

    setadd(results);
  };

  const abrirVentana = (mapeo: Usuario) => {
    // Parámetros: URL, nombre, especificaciones (opcional)
    window.open(
      mapeo.link,
      "comic",
      "width=1200,height=1200,top=100,left=400,"
    );
  };

  return (
    <div>
      {add.length ? (
        <div className="biblioteca">
          {add.map((mapeo) => (
            <div key={mapeo.id}>
              <div className="card1" id="marvel">
                <div className="face front">
                  <img src={mapeo.img} />
                </div>

                <div className="face back">
                  <h3>{mapeo.title}</h3>
                  <h4>Sinopsis</h4>
                  <p>{mapeo.txt}</p>
                  <div className="link">
                    <button onClick={() => abrirVentana(mapeo)}>more</button>
                    <h3 onClick={() => onDeleteProduct(mapeo)}>❌</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="cart-empty">La biblioteca esta Vacia</p>
      )}
    </div>
  );
}

export default biblioteca;
