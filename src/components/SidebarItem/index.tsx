import { Link } from "react-router-dom";
import * as C from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faBriefcase, faFileLines } from '@fortawesome/free-solid-svg-icons';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active}: Props) => {

    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.BarraIconInfo>
                    <C.IconArea active={active}>
                        {icon === "user" && 
                            <FontAwesomeIcon icon={faUser}/>
                        }
                        {icon === "contact" && 
                            <FontAwesomeIcon icon={faEnvelope}/>
                        }
                        {icon === "profession" && 
                            <FontAwesomeIcon icon={faBriefcase}/>
                        }
                        {icon === "interest" && 
                            <FontAwesomeIcon icon={faFileLines}/>
                        }
                    </C.IconArea>
                </C.BarraIconInfo>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}