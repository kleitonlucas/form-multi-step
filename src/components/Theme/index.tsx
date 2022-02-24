import { ReactNode } from "react";
import { Header } from "../Header";
import * as C from "./style";
import { SidebarItem } from "../SidebarItem";
import { useForm } from "../../contexts/FormContext";

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {
    const {state} = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem 
                            title="Pessoal"
                            description="Forneça os dados pessoais solicitados"
                            icon="user"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem 
                            title="Contatos"
                            description="Forneça as informções de como podemos encontra-lo"
                            icon="contact"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem 
                            title="Profissional"
                            description="Forneça os dados profissionais"
                            icon="profession"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem 
                            title="Interesse"
                            description="Escolha a sua área de interesse"
                            icon="interest"
                            path="/step4"
                            active={state.currentStep === 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}