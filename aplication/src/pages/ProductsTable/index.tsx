import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { ProductsContext, useProduct } from "../../hooks/useProducts";
import { Container } from "./styles";

export function ProductsTable(){

    let navigate = useNavigate();

    const { ListProducts } = useContext(ProductsContext)

    const { 'Nextoken': token } = parseCookies();
    
    useEffect(() => {
        if (!token){
            return navigate("/");
        }
    });

    
    ListProducts();
    const {Products} = useProduct()
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {Products.map(products => {
                        return(
                            <tr>
                                <td> {products.name_product} </td>
                                <td> {products.price} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}