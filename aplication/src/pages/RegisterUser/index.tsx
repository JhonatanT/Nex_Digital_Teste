import { parseCookies } from 'nookies';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductsContext } from '../../hooks/useProducts';
import styles from './home.module.scss';

export function RegisterUser() {
  
    const { 'Nextoken': token } = parseCookies();
    const { register, handleSubmit } = useForm();
    const { Register_User, register_user } = useContext(ProductsContext)

    if(register_user === true || token){
      return <Navigate to="/"/> 
    }

    async function handleSign(data) {
      if (data.email === '' || data.name === '' || data.pass === '' || data.pass2 === '') {
          return (
              Swal.fire(
                  'Todos os campos DEVEM SER PREENCHIDOS',
                  'Algum campo esta vazio',
                  'error'
              )
          )
      }
      try {
         await Register_User(data);
      }
      catch (e) {
          if (e.request.response == '{"error":"email already exists"}') {
              return (
                  Swal.fire(
                      'Usuario já existe',
                      'O usuario que tentou se cadastrar ja existe, é um usuario por pessoa',
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
        }
    }

    return (
        <div className={styles.pageauth}>

        <main>
          <div className={styles.maincontent}>
            <img src="/register.png" alt="logo" />

            <form onSubmit={handleSubmit(handleSign)} >
              <input
              {...register('name')}
                type="text"
                placeholder="Nome"
              />
              <br />
              <br />

              <input
              {...register('email')}
                type="text"
                placeholder="E-mail"
              />

              <br />
              <br />

              <input
              {...register('pass')}
                type="password"
                placeholder="Senha"
              />
  
              <br />
              <br />
  
              <input
              {...register('pass2')}
                type="password"
                placeholder="Repetir a senha"
              />
              <button className={styles.createroom}>
                <img src="/logoR.png" alt="Cadastrar" />
                Cadastrar
              </button>
            </form>
            <div className={styles.separator}>Preencha os dados acima</div>
          </div>
        </main>
      </div>
    );
    
}
