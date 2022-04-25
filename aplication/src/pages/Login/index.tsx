import { parseCookies } from 'nookies';
import { useContext  } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductsContext } from '../../hooks/useProducts';
import styles from './home.module.scss';

export function Login() {

    const { 'Nextoken': token } = parseCookies();
    const { register, handleSubmit } = useForm();
    const { Login, isAthenticated } = useContext(ProductsContext)

    if(isAthenticated === true || token){
        return <Navigate to="/Products"/> 
    }

    async function handleSign(data) {
        if (data.email == '' || data.pass == '') {
            return (
                Swal.fire(
                    'Todos os campos DEVEM SER PREENCHIDOS',
                    'Algum campo esta vazio',
                    'error'
                )
            )
        }
        try {
            await Login(data)
        }
        catch (e) {
            if (e.request.response == '{"error":"User/Pass not exist"}') {
                return (
                    Swal.fire(
                        'Usuario ou senha INCORRETOS',
                        'O usuario ou senha digitado estão(a) incorretos',
                        'error'
                    )
                )
            }
            else {
                return (
                    Swal.fire(
                        'ALGO DEU ERRADO',
                        'Algo deu errado, aperte F5 ou atualize a pagina, se o problema persistir entre em contato com um ADMIN',
                        'error'
                    )
                )
            }
        };
        
    }
    

    return (
        <div className="App">
            <div className={styles.pageauth}>
            <main>
                <div className={styles.maincontent}>
                    <img src="/login.png" alt="logo" />
                    <form onSubmit={handleSubmit(handleSign)}>
                        <input
                            type="text"
                            placeholder="E-mail"
                            {...register('email')}
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            placeholder="Senha"
                            {...register('pass')}
                        />
                        <button className={styles.createroom}>
                            <img src="/entrar.png" alt="Logo Entrar" />
                            Entrar
                        </button>
                    </form>
                    <div className={styles.separator}><a href="/Register_User">Caso não tenha uma conta, Crie</a></div>
                </div>
                </main>
            </div>
        </div>
    );
    
}
