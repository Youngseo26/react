import "./App.css";
import NewPayment from "./components/NewPayment/NewPayment";
//import Toast from "./components/Toast";

function App() {
  // const messageArray = [
  //   {
  //     title: "success",
  //     text: "Right On! Your account has been updated.",
  //   },
  //   {
  //     title: "warning",
  //     text: "Hmmm. Something doesn't look right.",
  //   },
  //   {
  //     title: "error",
  //     text: "Un oh! Something went terribly wrong!",
  //   },
  // ];

  return (
    // <div className="wrapper">
    //   {messageArray.map((message) => (
    //     <Toast message={message} />
    //   ))}
    // </div>
    <NewPayment />
  );
}

export default App;
