import TestOptions from "../core/components/TestOptions";

const data = {
  ques: "ques1",
  option: [1, 2, 3, 4],
  quesSelectionType: "single",
};

const TestPage = () => {
  return (
    <div>
      <TestOptions data={data} />
    </div>
  );
};

export default TestPage;
