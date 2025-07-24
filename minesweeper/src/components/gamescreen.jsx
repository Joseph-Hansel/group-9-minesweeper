import TopBar from "./gamescreen/topbar"
import Game from "./gamescreen/game"


function GameScreen(){
    return(
        <div className="game-box-container">
            <div className="game-box">
                <h2>Game box</h2>
                <TopBar />
                <Game/>
            </div>
        </div>
    );
};

export default GameScreen;