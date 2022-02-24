import * as C from "./style";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";

export const FormStep4 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentsStep,
                payload: 4
            });
        }
    },[]);

    const handleNextStep = () => {
        if(state.profession !== '' && state.workingTime !== 0){
            navigate("/finish");
            //Fazer uma page de finalização de cadastro
        } else{
            alert("Preencha todos os campos!");
        }
    }

    const setInterest = (value: string) => {
        dispatch({
            type: FormActions.setInterest,
            payload: value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/4</p>
                <h1>Assunto de Interesse</h1>
                <p>Olá, {state.name}. Qual o assunto que você tem interesse</p>

                <hr/>

                <SelectOption 
                    title="Administração"
                    selected={state.interest==="Administração"}
                    onClick={()=>setInterest("Administração")}
                />
                <SelectOption 
                    title="Saúde"
                    selected={state.interest==="Saúde"}
                    onClick={()=>setInterest("Saúde")}
                />
                <SelectOption 
                    title="Tecnologia"
                    selected={state.interest==="Tecnologia"}
                    onClick={()=>setInterest("Tecnologia")}
                />

                <Link to="/step3" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}