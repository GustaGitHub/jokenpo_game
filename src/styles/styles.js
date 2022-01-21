
import styled from "styled-components";

/// Menu Game ///////////////////////////////
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputName = styled.input.attrs({
    type : "text",
    placeholder: "Insira seu nome (opcional)",
    maxLength: 20
})`
    padding: 0.8em;
    width: 40%;
    margin-top: 10px;
    font-size: 13.5pt;
    text-align: center;
    border: none;
    border-bottom: 2px solid black;
    outline: 0;
`

export const Title = styled.span`
    font-size: 19pt;
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
`
export const GameScore = styled.div`
    text-align: center;
    font-size: 25pt;
    margin-top: 8%;
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
`

export const ButtonReset = styled.button`
    height: 80px;
    width: 160px;
    font-size: 18pt;
    margin-top: 60px;
    cursor: pointer;
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
`

/// Global-Components ///////////////////////////
export const ButtonDefault = styled.button`
    margin-top: 5em;
    padding: 1em;
    width: 200px;
    border-radius: 5%;
    font-size: 15pt;
    cursor: pointer;
`

export const FooterGame = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 15pt;
`
export const LinksFooter = styled.a`
    text-decoration: none;
`


