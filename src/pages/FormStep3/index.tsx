import * as C from "./style";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStep3 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentsStep,
                payload: 3
            });
        }
    },[]);

    const handleNextStep = () => {
        if(state.profession !== '' && state.workingTime !== 0){
            navigate("/step4");
        } else{
            alert("Preencha todos os campos!");
        }
    }

    const changeProfession = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProfession,
            payload: e.target.value
        });
    }

    const changeWorkingTime = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setWorkingTime,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/4</p>
                <h1>Dados Profissionais</h1>
                <p>Olá, {state.name}. Informe os dados solicitados abaixo</p>

                <hr/>

                <label>
                    Qual sua profissão?
                    <input 
                        type="text"
                        autoFocus
                        value={state.profession}
                        onChange={changeProfession}
                    />
                </label>
                <label>
                    Quanto tempo trabalha no atual emprego? (em anos)
                    <input 
                        type="number"
                        value={state.workingTime}
                        onChange={changeWorkingTime}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}