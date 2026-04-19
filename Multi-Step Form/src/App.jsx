import { useState } from "react";

const inputBoxes = [
  {
    id: crypto.randomUUID(),
    step: 1,
    inputType: "text",
    inputLabel: "Name",
    value: ""
  },
  {
    id: crypto.randomUUID(),
    step: 2,
    inputType: "email",
    inputLabel: "Email",
    value: ""
  },
  {
    id: crypto.randomUUID(),
    step: 3,
    inputType: "date",
    inputLabel: "DOB",
    value: ""
  },
  {
    id: crypto.randomUUID(),
    step: 4,
    inputType: "password",
    inputLabel: "Password",
    value: ""
  }
];

const App = () => {
  const [inputBoxData, setInputBoxData] = useState(inputBoxes)
  const [currentInputBox, setCurrentInputBox] = useState([inputBoxData[0]]);
  const [inputValue, setInputValue] = useState("");

  const resetAll = () => {
    setCurrentInputBox([inputBoxData[0]]);
    setInputBoxData(inputBoxes);
    setInputValue("");
  }

  const handleNextStep = (e, step) => {
    e.preventDefault();

    const finalValues = inputBoxData.map((item) => {
      if (item.step === step) {
        return { ...item, value: inputValue };
      }
      return item;
    });

    // 2. Check if this is the final step
    if (step === inputBoxData.length) {
      const values = finalValues.map(item => item.value);
      alert(`Name: ${values[0]}, Email: ${values[1]}, DOB: ${values[2]}, Password: ${values[3]}`);
      resetAll();
    } else {
      setInputBoxData(finalValues); 
      setCurrentInputBox([inputBoxData[step]]);
      setInputValue("");
    }
  };

  const handleBackStep = (e, step) => {
    e.preventDefault();
    const previousStep = step - 1;
    if (previousStep > 0) {
      setCurrentInputBox([inputBoxes[previousStep - 1]]);
    }
  }

  return (
    <div className="max-w-3xl mx-auto my-8">
      <h1 className="text-2xl text-center">Multi-Step Form</h1>
      <div className="my-12 bg-blue-100 max-w-88 mx-auto p-4">
        {
          currentInputBox.length > 0 && currentInputBox.map(({ id, inputLabel, inputType, step }) => {
            return (
              <form key={id} onSubmit={(e) => handleNextStep(e, step)}>
                {
                  step > 1 &&
                  <button onClick={(e) => handleBackStep(e, step)} className="my-5 underline cursor-pointer hover:text-blue-500">Back</button>
                }
                <div className="flex flex-col gap-4 ">
                  <label htmlFor={inputLabel} className="text-xl">{inputLabel}</label>
                  <input
                    type={inputType}
                    className="outline-1 bg-white text-lg p-1"
                    placeholder={`Your ${inputLabel} here...`}
                    name={inputLabel}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                  <div>
                    <button
                      className="px-4 py-1 bg-blue-700 text-white cursor-pointer"
                      type="submit"
                    >
                      {step === 4 ? "Submit" : "Next"}
                    </button>
                  </div>
                </div>
              </form>
            )
          })
        }
      </div>
    </div>
  )
}

export default App