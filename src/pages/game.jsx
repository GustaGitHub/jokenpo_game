import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import stone from '../images/pedra.png'
import paper from '../images/papel.png'
import scissors from '../images/tesoura.png'
import {
    FooterGame,
    LinksFooter,
    NamePlayer,
    GameScore,
    DivMainGame,
    DivImageThrow,
    DivButtonGame,
    ButtonDefault,
    ButtonReset,
    InputInfoGame
} from '../styles/styles'

function Game(){

    const [reset, setReset] = useState(false)
    const [displayBtn, setDisplayBtn] = useState(true)
    const [imgPlayer, setImgPlayer] = useState()
    const [imgCpu, setImgCpu] = useState()
    const [infoGame, setinfoGame] = useState('Faça uma Jogada !')
    const [scorePlayer, setScorePlayer] = useState(0)
    const [scoreCPU, setScoreCPU] = useState(0)

    const { nameParam } = useParams()

    function JOKENPO(obj){
        switch (obj) {
            case 1:
                setImgPlayer(stone)
                break;
            case 2:
                setImgPlayer(paper)         //Definindo a ferramenta em que o jogador lançou
                break;                      // 1 - pedra, 2 - papel, 3 - tesoura  
            case 3:
                setImgPlayer(scissors)
            default:
                break;
        }

        const imgsJokenpo = [stone, paper, scissors]
        const throwCpu = Math.floor(Math.random() * imgsJokenpo.length) //Definindo a ferramenta em que a CPU lançou
        setImgCpu(imgsJokenpo[throwCpu])                                // ALEATORIAMENTE
    }

    function resetGame(){ //Função Para Reiniciar O jogo
        setScorePlayer(0)
        setScoreCPU(0)
        setinfoGame('Jogo Reiniciado, Faça uma Jogada !')
        setDisplayBtn(true)
        setReset(false)
        setImgPlayer()
        setImgCpu()
    }
    
    useEffect(()=>{
        function checkScore(){
            if(imgPlayer === stone && imgCpu === stone || 
            imgPlayer === paper && imgCpu === paper ||         //Verifica se ocorreu EMPATE
            imgPlayer === scissors && imgCpu === scissors 
            ){
                setinfoGame('Deu empate, Faça outra jogada !')
            }
            else if(imgPlayer === stone && imgCpu === scissors ||        
                    imgPlayer === paper && imgCpu === stone ||        //Verifica se o usuario GANHOU
                    imgPlayer === scissors && imgCpu === paper
            ){
                setinfoGame(`Ponto para ${ nameParam }`)
                setScorePlayer(scorePlayer + 1)
            }
            else if(imgCpu === stone && imgPlayer === scissors ||
                    imgCpu === paper && imgPlayer === stone ||        //Verifica se a CPU GANHOU
                    imgCpu === scissors && imgPlayer === paper
            ){
                setinfoGame(`Ponto para a CPU`)
                setScoreCPU(scoreCPU + 1)
            }
        }
        checkScore()    
    },[imgCpu, imgPlayer])
    

    useEffect(()=>{
        function checkWinner(){
            if(scoreCPU == 5){
                setinfoGame(`CPU ganhou o Jogo :)`)
                setReset(true)
                setDisplayBtn(false)
            }
            else if(scorePlayer == 5){
                setinfoGame(`${nameParam} ganhou o Jogo :)`)
                setReset(true)
                setDisplayBtn(false)
            }
        }
        checkWinner()
    },[scoreCPU, scorePlayer])

    return(
        <>
            <DivMainGame>
                <div>
                    <NamePlayer>{nameParam}</NamePlayer>
                        <DivImageThrow>
                        {imgPlayer ? (
                                <img src={imgPlayer} alt="alguma foto" width="90px" height="90px"/>
                        ) : (
                                <p>Pronto !</p>
                        ) }
                        </DivImageThrow>
                    <GameScore>{scorePlayer}</GameScore>
                </div>      
                <div>
                    <NamePlayer>CPU</NamePlayer>
                        <DivImageThrow>
                            {imgCpu ? (
                                    <img src={imgCpu} alt="alguma foto" width="90px" height="90px"/>
                                ) : (
                                    <p>Pronto !</p>
                                ) 
                            }
                        </DivImageThrow>
                    <GameScore>{scoreCPU}</GameScore>
                </div>
            </DivMainGame>
            
            { displayBtn && (
                <DivButtonGame>
                    <ButtonDefault onClick={()=>JOKENPO(1)}>
                        PEDRA
                    </ButtonDefault>
                    <ButtonDefault onClick={()=>JOKENPO(2)}>
                        PAPEL
                    </ButtonDefault>
                    <ButtonDefault onClick={()=>JOKENPO(3)}>
                        TESOURA
                    </ButtonDefault>        
                </DivButtonGame>
                )
            }

            <br/>
             <div style={{textAlign: "center"}}>              
                <InputInfoGame value={infoGame}/>
            </div>
            <DivButtonGame>
                {reset && (
                    <ButtonReset onClick={()=>resetGame()}>
                        Reiniciar
                    </ButtonReset>
                )}
            </DivButtonGame>           
        </>
    )
}

export default Game