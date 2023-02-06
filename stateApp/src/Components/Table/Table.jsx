import React from "react";
import "./body.css";
export const Table = ({data}) => {
  return (
    <div className="tablecontainer">
      <table className="table">
        <tr className="tablehead">
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Market Cap</th>
        </tr>
{data.map((item)=>{
  return(
    <tr>
    <td className="flex">
      <img src={item.image} alt="no" className="image" />
      <div className="wrapper">
        <h1 className="text1">{item.text1}</h1>
        <h4 className="text2">{item.text2}</h4>
      </div>
    </td>
    <td>{item.change}</td>
    <td>{item.change}</td>
    <td>{item.marketcap}</td>
  </tr>
  )
})}
       
      </table>
    </div>  
  );
};
