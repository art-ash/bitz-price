import { useState } from "react";

const Price = props => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="row">
      <ul className="list-group col-lg-6 col-sm-12">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi[currency].description} &nbsp;
          : &nbsp; <span className="badge badge-primary">{props.bpi[currency].code}</span> 
          &nbsp; <strong>{props.bpi[currency].rate}</strong>
        </li>
      </ul>
      <select className="form-control form-control-select col-lg-6 col-sm-12" onChange={e => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
      <style jsx>{`
        .form-control-select {
          font-size: 1.4rem;
        }
      `}</style>
    </div>
  );
};

export default Price;
