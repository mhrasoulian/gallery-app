import { useState, useEffect, ChangeEvent } from "react";

import "./App.css";
import Search from "./components/Search";
import Form from "./components/Form";
import Card from "./components/Card";
import { getData, getCategory } from "./api";

function App() {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getData();
      setData(responseJson);
    };

    const fetchCategory = async () => {
      const responseJson = await getCategory();
      setCategory(["All", ...responseJson]);
    };

    fetchData();
    fetchCategory();
  }, [data, category]);

  const handleFilter = (category: string) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filteredData = data.filter((item) => {
        return item.category === category;
      });
      setFilteredData(filteredData);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const result = data.filter((item) => {
      return item.photographer.toLowerCase().includes(event.target.value);
    });
    setFilteredData(result);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Form>
            <input
              onChange={handleSearch}
              className="form-control"
              placeholder="Search photo by photographer ...."
            />
            {/* <Search
              onChange={handleSearch}
              placeHolder="Search your photo..."
            /> */}
          </Form>
          <div className="d-flex justify-content-center my-3">
            {category.map((category, key) => {
              return (
                <button
                  key={key}
                  className="text-24 btn btn-lg btn-success mx-3"
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {filteredData.map((item, index) => {
            return (
              <Card
                key={item.id}
                imageAlt={item.alt}
                imageUrl={item.url}
                id={item.id}
                category={item.category}
                photographer={item.photographer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
