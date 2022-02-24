import * as C from "./style";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";

export const Finish = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentsStep,
                payload: 5
            });
        }
    },[]);

    return (
        <Theme>
            <C.Container>
                <h2>Cadastro Finalizado!</h2>
                <h3>{state.name}, obrigado por se cadastrar em nossa plataforma.</h3>
                <p>
                    Seu cadastro foi realizado com sucesso. Aguarde, em breve você estará recebendo e-mails 
                    de assuntos do seu interesse.
                </p>
            </C.Container>
        </Theme>
    );
}