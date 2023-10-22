import Style from '../CSS/Area_ExemploAPP.module.css'
import app from '../imagens/exemplo_app.png'

function Area_ExemploAPP(){
    return(
        <main>
            <section className={Style.sectionexemploapp}>
                <img className={Style.imagem_app} src={app} alt='aplicativo'/>
                <p className={Style.paragrafoapp}>Na seção 'Últimas Transações' do seu cartão, você pode acompanhar facilmente suas atividades financeiras mais recentes, incluindo detalhes como data, valor e descrição das transações. Personalize sua visualização com recursos de filtragem e mantenha-se no controle de suas finanças de maneira simples e intuitiva.</p>
            </section>
        </main>
    )
}

export default Area_ExemploAPP