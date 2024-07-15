import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    (props.colaboradores.length > 0) ? ( // Usando && para renderização condicional
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
              aoExcluir={
                props.aoExcluir ? () => props.aoExcluir(colaborador) : null
                }
              // Passando a função para o Colaborador
            />
          ))}
        </div>
      </section>
    )
    : ''
  );
};

export default Time;