import * as C from "./style";
import { Theme } from "../../components/Theme";
import { useForm, FormActions} from "../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

/**
 * 
 * Parei em 1:18:56
 */

export const FormStep1 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentsStep,
            payload: 1
        });
    },[]);

    const handleNextStep = () => {
        if(state.name !== '' && state.birthDate !== ''){
            navigate("/step2");
        } else{
            alert("Preencha todos os campos!");
        }
    }
    
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const changeBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setBirthDate,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/4</p>
                <h1>Dados pessoais</h1>
                <p>Informe os dados solicitados abaixo</p>

                <hr/>
                
                <label>
                    Seu nome Completo
                    <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={changeName}
                    />
                </label>

                <label>
                    Sua data de nascimento
                    <input 
                        type="date"
                        value={state.birthDate}
                        onChange={changeBirthDate}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}