import * as C from "./style";
import { Theme } from "../../components/Theme";

export const Finish = () => {
    return (
        <Theme>
            <C.Container>
                <h1>Cadastro Finalizado!</h1>
                <p>
                    Seu cadastro foi realizado com sucesso. Aguarde, em breve você estará recebendo e-mails 
                    de assuntos do seu interesse.
                </p>
            </C.Container>
        </Theme>
    );
}