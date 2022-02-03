import styled from "styled-components";

/// Menu Game ///////////////////////////////
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
`

export const InputName = styled.input.attrs({
    type : "text",
    placeholder: "Insira seu nome (opcional)",
    maxLength: 20
})`
    color: white;
    padding: 0.8em;
    width: 40%;
    margin-top: 10px;
    font-size: 13.5pt;
    text-align: center;
    border: none;
    border-bottom: 2px solid black;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: rgba(255, 255, 255, 0);

    ::placeholder{
        color: white;
    }

    @media (max-width: 415px){
        font-size: 10pt;
        width: 50%;
    }
`

export const Title = styled.span`
    font-size: 19pt;
    color: white;

    @media (max-width: 415px){
        margin-top: 80px;
        font-size: 16pt;
    }
`
/// Page Game //////////////////////////////
export const NamePlayer = styled.div`
    margin-top: 10px;
    border-radius: 8px 8px 0px 0px;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 15pt;
    padding: 5px;

    @media (max-width: 415px){
        margin-top: 12.5pt;
    }
`
export const GameScore = styled.div`
    text-align: center;
    font-size: 25pt;
    margin-top: 8%;
    color: white;
`

export const DivMainGame = styled.div`
    border: 1px solid black;
    margin-top: 3%;
    padding-bottom: 2vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const DivButtonGame = styled.div`
    margin-top: -5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    
    @media (max-width: 415px){
        margin-top: -9%;
    }
`

export const ButtonReset = styled.button`
    height: 80px;
    width: 160px;
    margin-top: 10%;
    font-size: 18pt;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5%; 

    @media (max-width: 415px){
        margin-top: 15%;
    }
`

export const DivImageThrow = styled.div.attrs({
    class : 'cube-game'
})`
    background-color: white;
    padding: 6vh;
    border: 1px solid black;
    border-radius: 0px 0px 8px 8px;
`
export const InputInfoGame = styled.input.attrs({
    type : "text",
    disabled: true
})`
    width: 65%;
    margin-top: 25px;
    text-align: center;
    font-size: 15pt;
    padding: 12px;
    font-family:'Montserrat','sans-serif';
    color: white;

    @media (max-width: 415px){
        width: 80%;
        font-size: 11pt;
    }
`

/// Global-Components ///////////////////////////
export const ButtonDefault = styled.button`
    margin-top: 5em;
    padding: 1em;
    width: 200px;
    border-radius: 5%;
    font-size: 15pt;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 415px){
        padding: 0.5em;
        height: 90px;
    }
`

export const FooterGame = styled.footer`
  	position: fixed;
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 15pt;

    @media (max-height: 398px){
        top: 0;
        left: 0;
        font-size: 10pt;
    }
    @media (max-width: 415px){
        font-size: 10pt;
    }
`
export const LinksFooter = styled.a`
    text-decoration: none;
    color: white;
    border-bottom: 1px white solid;
    margin-right: 0.6em
`


