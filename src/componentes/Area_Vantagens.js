import Style from '../CSS/Area_Vantagens.module.css'

function Area_Vantagens(){
    return(
        <main>
            <section className={Style.sectionvantagens}>
                <h1 className={Style.textovantagens}>POR QUE ESCOLHER O BANK VISION ?</h1>
                <hr className={Style.linhavantagens}></hr>
                <div className={Style.caixasvantagens}>
                    <div className={Style.caixa}>
                        <h3 className={Style.h3caixa}>Visão de Futuro:</h3>
                        <h4 className={Style.h4caixa}> Desbrave um caminho para um amanhã financeiro mais inteligente e conectado.</h4>
                    </div>
                    <div className={Style.caixa}>
                        <h3 className={Style.h3caixa}>Tecnologia de Ponta:</h3>
                        <h4 className={Style.h4caixa}> Pagamentos rápidos, seguros e simplificados em suas mãos.</h4>
                    </div>
                    <div className={Style.caixa}>
                        <h3 className={Style.h3caixa}>Recompensas  Exclusivas: </h3>
                        <h4 className={Style.h4caixa}>Acumule pontos e transforme suas compras em experiências incríveis.</h4>
                    </div>
                    <div className={Style.caixa}>
                        <h3 className={Style.h3caixa}>Controle Total: </h3>
                        <h4 className={Style.h4caixa}>Gerencie seu dinheiro de forma simples e transparente, direto no seu dispositivo.</h4>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Area_Vantagens