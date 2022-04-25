import { destroyCookie, setCookie } from 'nookies';
import {createContext, useEffect, useState, ReactNode, useContext} from 'react'
import { Navigate, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import { api } from '../services/api';

interface Products{
    id_user:string, 
    name_product:string, 
    price:string
}


interface Login{
    email:string, 
    pass:string, 
}

interface Register{
    name:string,
    email:string, 
    pass:string,
    pass2:string
}

interface ProductsProviderProps{
    children : ReactNode;
}


type ProductContext = {
    isAthenticated: boolean;
    register_user:boolean;
    Products:Products[];
    Login: (data: Login) => Promise<any>;
    ListProducts: () => Promise<void>;
    Register_User: (data:Register) => Promise<any>;
    Logout: () => Promise<any>;
}

export const ProductsContext = createContext<ProductContext>({} as ProductContext);

export function ProductsProvider({children} : ProductsProviderProps){

    const [Products, setProducts] = useState<Products[]>([]) 
    const [isAthenticated, setAthenticated] = useState(false)
    const [register_user, setRegister_user] = useState(false)

    async function ListProducts(){
        useEffect(() => {
            api.post('/listProducts')
            .then( response => setProducts(response.data))
        },[])
        
    }
    
    async function Login({email, pass}:Login){
        
        const { data, status } = await api.post('/authenticate', {
            email,
            pass
        });

        
        if(status === 200){
            setCookie(undefined, 'Nextoken', data)
            setAthenticated(true);
        }
        else{
            Swal.fire(
                'ALGO DEU ERRADO',
                'Algo deu errado, aperte F5 ou atualize a pagina, se o problema persistir entre em contato com um ADMIN',
                'error'
            )
        }
    }

    async function Register_User({name, email, pass, pass2}:Register){
        
        if (pass === pass2) {
            const { status } = await api.post('/register', {
                name,
                email,
                pass
            });

            if(status === 200){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cadastrado com Sucesso',
                    showConfirmButton: false,
                    timer: 2000
                })
                setTimeout(() => {
                    setRegister_user(true)
                }, 2000);
            }
            else{
                Swal.fire(
                    'ALGO DEU ERRADO',
                    'Algo deu errado, aperte F5 ou atualize a pagina, se o problema persistir entre em contato com um ADMIN',
                    'error'
                )
            }

        }
        else {
            Swal.fire(
                'Senha Incorreta',
                'As senhas estão diferentes',
                'error'
            )
        }
        
    }

    async function Logout() {

        Swal.fire({
            title: 'Deseja sair?',
            text: "Sair da sua conta?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.isConfirmed) {
                destroyCookie(undefined, 'Nextoken');
                window.location.reload();
            }
        });
    }

    return (
        <ProductsContext.Provider value={{ ListProducts, isAthenticated, Products, Login, Register_User, register_user, Logout }}>
            {children}
        </ProductsContext.Provider>
    )

}

export function useProduct() {
    const context = useContext(ProductsContext)
    return context
}

export async function PegaUsu(id_usu: string) {
    return {
        user:{name:'Jhonatan'}
    }
}