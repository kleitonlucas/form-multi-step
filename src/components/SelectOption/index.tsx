import { ChangeEvent } from "react";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./style";

type Props = {
    title: string;
    selected: boolean;
    onClick: () => void
}

export const SelectOption = ({title, selected, onClick}: Props) => {
    const {state, dispatch} = useForm();

    const handleInterest = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setInterest,
            payload: e.target.value
        });
    }

    //Fazer como botões
    return(
        <C.Container onClick={onClick} selected={selected} >
            <C.Title>{title}</C.Title>
        </C.Container>
    );
}