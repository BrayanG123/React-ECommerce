import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../../store";
import ecommerceApi from "../../api/ecommerceApi";





export const useAuthStore = () => {

    const { status, user, erroMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    
    const startLogin = async( { email, password } ) => {

        dispatch( onChecking );

        try {
            const { data } = await ecommerceApi.post('/auth/', {email, password}  );
            localStorage.setItem('token', data.token);
            dispatch( onLogin( {name: data.name, id: data.id} ) ); //revisar que nos retornara el backend
        } catch (error) {
            dispatch( onLogout('Credenciales Incorrectas') );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10 )
        }

    }
    
    return {


    }

}
