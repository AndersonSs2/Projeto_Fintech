import Style from '../CSS/Area_Cartao_Credito.module.css'
import cartao from '../imagens/cartao_credito.png'

function Area_Cartao_Credito(){
    return(
        <main>
            <article>
                <div className={Style.areatexto}>
                    <h1>Conheça nosso cartão de crédito</h1>
                    <hr/>
                    <h2>Você está pronto para uma revolução no seu jeito de lidar com o dinheiro? Apresentamos o Cartão de Crédito Bank Vision, a chave para desbloquear um universo de possibilidades financeiras inovadoras!</h2>
                </div>
                <img className={Style.imgcartao} src={cartao} alt='cartao'/>
            </article>
        </main>
    )
}

export default Area_Cartao_Credito