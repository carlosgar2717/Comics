type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function lista({ data, onSelect }: Props) {
  const handleClick = (elemento: string) => {
    onSelect?.(elemento);
  };
  return (
    <ul>
      {data.map((elemento) => (
        <li onClick={() => handleClick(elemento)} key={elemento}>
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default lista;
