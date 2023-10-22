import Style from '../CSS/Slogan.module.css'
import fundo from '../imagens/fundo_inicio.png'

function Slogan(){
    return(
        <main>
            <img className={Style.imgslogan} src={fundo} alt='imagem_fundo'/>
            <div className={Style.textoslogan}>
            Transformando Sonhos em Realidade, rumo a um Futuro Financeiro Inovador!
            </div>
            <div className={Style.textoslogan2}>O plano B que será seu plano A.</div>
        </main>
    )
}

export default Slogan