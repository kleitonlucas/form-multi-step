import * as C from "./style";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStep2 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentsStep,
                payload: 2
            });
        }
    },[]);

    const handleNextStep = () => {
        if(state.telephone !== '' && state.email !== ''){
            navigate("/step3");
        } else{
            alert("Preencha todos os campos!");
        }
    }

    const changeTelephone = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelephone,
            payload: e.target.value
        });
    }

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const changeSite = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSite,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/4</p>
                <h1>Contatos</h1>
                <p>Olá, {state.name}. Informe os dados solicitados abaixo</p>

                <hr/>

                <label>
                    Telefone
                    <input 
                        type="text"
                        autoFocus
                        value={state.telephone}
                        onChange={changeTelephone}
                    />
                </label>
                <label>
                    E-mail
                    <input 
                        type="text"
                        value={state.email}
                        onChange={changeEmail}
                    />
                </label>
                <label>
                    Site ou Blog, se tiver
                    <input 
                        type="text"
                        value={state.site}
                        onChange={changeSite}
                    />
                </label>

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}