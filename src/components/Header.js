import './Header.css';
import lemonLogo from '../assets/lemonLogo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'

export const Header = () =>{
    return (
        <div className="header">
            <div className='logoContainer'>
                <img src={lemonLogo} className='lemonLogo' alt='limão' />
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt='Lupa' />
                </div>
                <input className='searchInput' placeholder='Coleções, itens ou usuários...'/>
            </div>

            <div className='headerItems'>
                <p>Coleções</p>
                <p>Loja</p>
                <p>Criação</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt='Troca de Tema' />
                </div>
            </div>
        </div>
    )
}