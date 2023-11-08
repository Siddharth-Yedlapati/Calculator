
 
import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
 
function App() {
    const [displayval, setdisplayval] = useState("");
    const [outputval, setoutputval] = useState("");
 
    function clearScreen() {
        setdisplayval("");
        setoutputval("");
    }
 
    function backspace() {
        const newdisplayval = displayval.substr(0, displayval.length - 1);
        setdisplayval(newdisplayval);
    }
 
    function outputHandler(e) {
        setdisplayval(e.target.value);
    }

    function inputHandler(input) {
        setdisplayval((prevdisplayval) => prevdisplayval + input);
    }

 
    function compute() {
      try {
          const symbols = {}

          const result = math.evaluate(displayval, symbols);
          if (typeof result === "number") {
              setoutputval(Number(result).toFixed(3));
          } else {
              setoutputval("invalid input");
          }
      } catch (error) {
          setoutputval("invalid input");
      }
  }
    return (
        <>
            <div className="App">
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <div className="input-body">
                        <input
                            className="screen"
                            type="text"
                            value={displayval}
                            onChange={outputHandler}
                        />
                        <div
                         className="output">Result: {outputval}
                         </div>
                    </div>
                    <div className="button-pad">
                        <div className="symbol-body">
                            {["0", "1", "2", "3", "4", "5",
                                "6", "7", "8", "9", ".", "(", ")", "+", "-", "*", "/", "^", "sqrt(",].map(
                                    (input) => (
                                        <button key={input}
                                            onClick={() =>
                                                inputHandler(input)}>
                                            {input}
                                        </button>
                                    )
                                )}
                        </div>
                        {/* <div className="arithmetic">
                            {[


                            ].map((input) => (
                                <button key={input}
                                    onClick={() =>
                                        inputHandler(input)}>
                                    {input}
                                </button>
                            ))}
 
                        </div> */}
                        <div className="arithmetic">
                            <button className="clearscreen"
                                onClick={clearScreen}>
                                C
                            </button>
                            <button className="delete-value"
                                onClick={backspace}>
                                CE
                            </button>
                            <button className="equals-value"
                                onClick={compute}>
                                =
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default App;