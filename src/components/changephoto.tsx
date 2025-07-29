import "../styles/config.css";

type Props = {
  image: string;
  setImage: (image: string) => void;
};

function ChangePhoto({ image, setImage }: Props) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Usamos el operador de encadenamiento opcional

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string); // Cambia la imagen de perfil
        }
      };
      reader.readAsDataURL(file); // Lee el archivo como URL de datos
    }
  };

  return (
    <div className="container">
      <h1>Imagen de Perfil</h1>
      <img src={image} alt="Imagen de perfil" className="imagen" />
      <input
        className="input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ChangePhoto;
