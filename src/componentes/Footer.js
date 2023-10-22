import Style from '../CSS/Footer.module.css'
import linkedin from '../imagens/skill-icons_linkedin.png'
import facebook from '../imagens/logos_facebook.png'
import whatsapp from '../imagens/logos_whatsapp-icon.png'
import instagram from '../imagens/skill-icons_instagram.png'
import Iframe from './Iframe'

function Footer(){
    return(
        <main>
            <section className={Style.sectionfooter}>
                    <ul className={Style.ulfooter1}>
                        <li>Início</li>
                        <li>Transações</li>
                        <li>Configurações</li>
                        <li>Sobre nós</li>
                        <li>Perguntas Frequentes</li>
                    </ul>
                    <ul className={Style.ulfooter2}>
                        <li>Contato</li>
                        <li>Política de Privacidade</li>
                        <li>Termos de Uso</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                    <div className={Style.areaiconesapp}>
                        <img src={linkedin} alt='linkedin'/>
                        <img src={facebook} alt='facebook'/>
                        <img src={whatsapp} alt='whatsapp'/>
                        <img src={instagram} alt='intagram'/>
                    </div>
                    <Iframe/>
            </section>
            <div className={Style.direitos}>
                <h5>Direitos Autorais © 2023 Bank Vision</h5>
            </div>
        </main>
    )
}

export default Footer