
 
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
                <div className="calc-body">
                    <h1>Scientific Calculator</h1>
                    <div className="input-section">
                        <input
                            className="screen"
                            type="text"
                            value={displayval}
                            onChange={outputHandler}
                        />
                        <div className="output">Output: {outputval}</div>
                    </div>
                    <div className="button-section">
                        <div className="numeric-pad">
                            {["0", "1", "2", "3", "4", "5",
                                "6", "7", "8", "9", "."].map(
                                    (input) => (
                                        <button key={input}
                                            onClick={() =>
                                                inputHandler(input)}>
                                            {input}
                                        </button>
                                    )
                                )}
                        </div>
                        <div className="operators">
                            {[
                                "+",
                                "-",
                                "*",
                                "/",
                                "^",
                                "sqrt(",
                                // Add open parenthesis
                                "(", 
                                // Add close parenthesis
                                ")", 
                            ].map((input) => (
                                <button key={input}
                                    onClick={() =>
                                        inputHandler(input)}>
                                    {input}
                                </button>
                            ))}
 
                        </div>
                        <div className="control-buttons">
                            <button className="clear-button"
                                onClick={clearScreen}>
                                C
                            </button>
                            <button className="backspace-button"
                                onClick={backspace}>
                                CE
                            </button>
                            <button className="equals-button"
                                onClick={compute}>
                                =
                            </button>

                        </div>
                    </div>
                </div>
                <div className="variables"></div>
            </div>
        </>
    );
}
 
export default App;