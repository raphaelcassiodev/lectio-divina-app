export interface SelectProps {
  livros: LivroBiblia[];
  capitulos: number[];
  versiculos: number[];
}

export interface LivroBiblia {
  name: string;
  abr: string;
}

export const SelectBible: React.FC<SelectProps> = (props) => {
  return (
    <div>
      <select>
        {props.livros.map((livroBiblia, i) => {
          return (
            <option key={i} value={livroBiblia.name}>
              {livroBiblia.name}
            </option>
          );
        })}
      </select>

      <select>
        {props.capitulos.map((capitulo, i) => {
          return (
            <option key={i} value={capitulo}>
              {capitulo}
            </option>
          );
        })}
      </select>

      <select>
        {props.versiculos.map((versiculo, i) => {
          return (
            <option key={i} value={versiculo}>
              {versiculo}
            </option>
          );
        })}
      </select>

      <select>
        {props.livros.map((livroBiblia, i) => {
          return (
            <option key={i} value={livroBiblia.name}>
              {livroBiblia.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
