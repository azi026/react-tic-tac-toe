import '../style/result.css';

function Result({winner,reset}){
    return(
        <div className="result">
            {winner==="CIRCLE" && "Circle won the game"}
            {winner==="CROSS" && "Cross won the game"}
            {winner==='it is a tie' && 'it is a tie'}
            <button onClick={reset} className="btn">Reset</button>             
        </div>
    );
}
export default Result;