import React from "react";
import ReactDOM from "react-dom";
import DynamicBox from "./components/DynamicBox";

const books = ["https://shorturl.at/bnTW5",
"https://shorturl.at/jnI38", "https://shorturl.at/klqs0" ]

class App extends React.Component {
  eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    const bookImageBoxes = books.map((book, index) => (
      <div key={index} className="image-box-container">
        <DynamicBox src={book} />
      </div>
    ));

    return <div id="root">{bookImageBoxes}</div>;
  }
}


export default App;