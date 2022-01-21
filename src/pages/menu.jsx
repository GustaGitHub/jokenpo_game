import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { 
    Title,
    InputName,
    Menu,
    ButtonDefault,
    FooterGame,
    LinksFooter
} from "../styles/styles"

function InitialPage() {
    const [name, setName] = useState('')
    let history = useHistory()

    function redirectGame(){
        name.length > 0 ?
            history.push('/jogar/' + name)
        :
            history.push('/jogar/usuario')    
    }
    

    return(
        <Menu>
            <Title><h1>JO - KEN - PO</h1></Title>
                <InputName 
                onChange={e => setName(e.target.value)}
                />
                <ButtonDefault onClick={()=>redirectGame()}>
                    JOGAR
                </ButtonDefault>
            <FooterGame>
                    <LinksFooter href="https://skdesu.com/jokenpo/" target="_blank">
                    Regras do Jogo
                    </LinksFooter>  
                     {" | "}
                    <LinksFooter href="https://github.com/GustaGitHub" target="_blank">
                                    Feito Por &copy;Gustavo Ribeiro
                    </LinksFooter>
            </FooterGame>
        </Menu>
    )
}

export default InitialPage;