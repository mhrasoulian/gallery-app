import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Form from "./components/Form";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Form>
              <Search placeHolder="Search your photo..." />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
