import BotaoExcluir from "../BotaoExcluir";
import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoExcluir }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <BotaoExcluir
          onClick={() => {
            console.log("botão Excluir clicado!", nome);
            aoExcluir(nome);
          }}
        >
          excluir
        </BotaoExcluir>
      </div>
    </div>
  );
};

export default Colaborador;
