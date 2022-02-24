import { Children, createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    birthDate: string;
    telephone: string;
    email: string;
    site: string;
    profession: string;
    workingTime: number;
    interest: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode;
}

const initialData: State = {
    currentStep: 0,
    name: '',
    birthDate: '',
    telephone: '',
    email: '',
    site: '',
    profession: '',
    workingTime: 0,
    interest: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
    setCurrentsStep,
    setName,
    setBirthDate,
    setTelephone,
    setEmail,
    setSite,
    setProfession,
    setWorkingTime,
    setInterest
}

//Reducer
const formReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentsStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setBirthDate:
            return {...state, birthDate: action.payload};
        case FormActions.setTelephone:
            return {...state, telephone: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setSite:
            return {...state, site: action.payload};
        case FormActions.setProfession:
            return {...state, profession: action.payload};
        case FormActions.setWorkingTime:
            return {...state, workingTime: action.payload};
        case FormActions.setInterest:
            return {...state, interest: action.payload};
        default:
            return state;
    }
}

//Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error("useForm precisa ser usado dentro do FormProvider");
    }
    return context;
}