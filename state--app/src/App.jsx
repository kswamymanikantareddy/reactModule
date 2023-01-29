import "./App.css";
import { data } from "./data";
import { Table } from "./Components/Table/Table";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const SearchData = () => {
    return data.filter(
      (item) =>
        item.text1.toLowerCase().includes(search) ||
        item.text2.toLowerCase().includes(search) ||
        item.price.toLowerCase().includes(search)||item.change.toLowerCase().includes(search)||item.marketcap.toLowerCase().includes(search)
    );
  };
  console.log(search);
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="containerwrapper">
            <div className="topleft">
              <span className="topleft">
                <a href="*">All Assets</a>
              </span>
            </div>
            <div className="topright">
              <input
                type="text"
                placeholder="Search all assets"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <Table data={SearchData(data)} />
      </div>
    </>
  );
}

export default App;
