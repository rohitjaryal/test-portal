import React from "react";

const TestOptions = (data) => {
  console.log(data.data.quesSelectionType);
  return (
    <div>
      <h3> test component</h3>
      <h5>Ques: {data.data.ques} </h5>
      <form id="form1">
        {data.data.quesSelectionType === "multi" && <input type="checkbox" />}{" "}
        {data.data.quesSelectionType === "single" && <input type="radio" />}
        
      </form>
      {/* <form>
        {data.quesSelectionType === "single"} && (
        <input type="checkbox">ddds </input>)
      </form> */}
    </div>
  );
};

export default TestOptions;
