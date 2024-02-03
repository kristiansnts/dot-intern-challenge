import Timer from "../Timer/Timer";
import Questions from "../../data/Questions";

const Quizes = () => {
    return ( 
        <>
            <div className="wrapper p-4 w-96 bg-gray-700 rounded-lg">
                <Timer />
                <Questions />
            </div>
        </>
     );
}
 
export default Quizes;