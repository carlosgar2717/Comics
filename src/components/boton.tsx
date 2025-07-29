import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  OnClick: () => void;
};

function boton({ children, isLoading, OnClick }: Props) {
  return (
    <div>
      <button
        disabled={isLoading}
        onClick={OnClick}
        type="button"
        className={`btn btn-${isLoading ? "Secondary" : "Primary"}`}
      >
        {isLoading ? "cargando..." : children}
      </button>
    </div>
  );
}

export default boton;
