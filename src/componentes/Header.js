import Style from '../CSS/Header.module.css'
import logo from '../imagens/logo.png'
import login from '../imagens/login.png'

function Header(){
    return (
        <header>
            <img className={Style.imagemlogo} src={logo} alt='logo'/>
            <ul className={Style.ulheader}>
                <a href='#'><li className={Style.liheader}>PÁGINA INICIAL</li></a>
                <a href='#'><li className={Style.liheader}>QUEM SOMOS</li></a>
                <a href='#'><li className={Style.liheader}>SERVIÇOS</li></a>
                <a href='#'><li className={Style.liheader}>CONTATOS</li></a>
            </ul>
            <a href='#'><img className={Style.imagemlogin} src={login} alt='login'/></a>
        </header>
    )
}

export default Header