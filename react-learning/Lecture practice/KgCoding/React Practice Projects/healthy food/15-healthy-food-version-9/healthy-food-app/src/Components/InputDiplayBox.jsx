// import React from 'react'

function InputDiplayBox({ inputTextValue }) {
  console.log(inputTextValue);
  return (
    <div className="mb-10 py-2 px-5 rounded-lg">
      Your Enter Item : {inputTextValue}
    </div>
  );
}

export default InputDiplayBox;
