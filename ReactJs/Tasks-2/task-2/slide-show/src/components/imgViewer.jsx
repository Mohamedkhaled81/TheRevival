import { useState } from "react"
import PrevButton from "./prevButton";
import NextButton from "./nextButton";


const ImgViewer = function () {
    const [imgArry] = useState(['1.jpg', '2.jpg', '3.jpg']);
    const [currPos, setCurrPos] = useState(0);
    return (
        <>
            <div className="container">
                <img src={imgArry[currPos]}></img>
                <div className="buttons">
                    <PrevButton handlePrev={() => setCurrPos(currPos === 0 ? 0 : currPos - 1)}>Prev</PrevButton>
                    <NextButton handleNext={() => setCurrPos((currPos + 1) % imgArry.length)}>Next</NextButton>
                </div>
            </div>
        </>
    )
}

export default ImgViewer