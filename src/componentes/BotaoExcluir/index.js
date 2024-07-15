import './BotaoExcluir.css'


const BotaoExcluir = (props) => {
    return (<button className='excluirColaborador'>
            {props.children}
        </button>
    )
}

export default BotaoExcluir