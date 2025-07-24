import Game from "./gamescreen/game"


function GameScreen(){
    return(
        <div className="game-box-container">
            <div className="game-box">
                <Game/>
            </div>
        </div>
    );
};

export default GameScreen;