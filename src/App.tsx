import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Form from "./components/Form";
import Card from "./components/Card";
import Badge from "./components/Badge";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <Form>
            <Search placeHolder="Search your photo..." />
          </Form>
          <div className="d-flex justify-content-center my-3">
            <a className="text-24" href="">
              <Badge text="category" type="bg-primary" />
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {Array(20)
            .fill(20)
            .map((item) => {
              return (
                <Card
                  imageAlt="photo"
                  imageUrl="http://frontend-gallery.darkube.app/images/1170986.jpeg"
                  id={2}
                  category="animal"
                  photographer="Mohammad"
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
