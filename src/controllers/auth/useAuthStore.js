import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../../store";
import ecommerceApi from "../../api/ecommerceApi";





export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    
    const startLogin = async( { email, password } ) => {

        dispatch( onChecking() );

        try {
            const { data } = await ecommerceApi.get(`/v1/users?email=${email}&password=${password}`, {}  );
            console.log(data[0]);
            // localStorage.setItem('token', data.token);
            // dispatch( onLogin( {name: data[0].name, id: data[0].id} ) ); //revisar que nos retornara el backend
            dispatch( onLogin( data[0] ) ); //revisar que nos retornara el backend
        } catch (error) {
            dispatch( onLogout('Credenciales Incorrectas') );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10 )
        }

    }

    const startRegister = async( { name, email, password } ) => { //Crear Usuario

        dispatch( onChecking() );

        try {
            const { data } = await ecommerceApi.post('/v1/users', { name, email, password }); 
            console.log(data);
            localStorage.setItem('token', data.token);
            dispatch( onLogin( { name: data.name, id: data.id} ) );
        } catch (error) {
            
        }

    }
    
    return {
        //Propeidades
        status,
        user,
        errorMessage,

        //Metodos
        startLogin,
        startRegister,
    }

}
