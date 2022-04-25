
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';
import { parseCookies } from 'nookies';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../hooks/useProducts';
import styles from './styles.module.scss';


export function Header() {
    const currentDate = format(new Date(), 'EEEEEE , d MMMM', {
        locale: ptBR,
    });
    
    
    const { ['Nextoken']: token } = parseCookies();
    const { Logout } = useContext(ProductsContext)


    if (token) {
        return (

            <header className={styles.headerContainer}>
                <img src="/logo.png" alt="Logo" />

                <p>Teste Nex Digital</p>

                <span>{currentDate}</span>

                <p>Bem vindo</p>
                <button type="button" onClick={() => Logout()}>
                    <img src="/exit.png" alt="Logo" />
                </button>
            </header>
        );
    }
    else {
        return (
            <header className={styles.headerContainer}>
                <img src="/logo.png" alt="Logo" />
    
                <p>Teste Nex Digital</p>
    
                <span>{currentDate}</span>
    
            </header>
        );
    }
    
}
