import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function About() {
  const [data, getData] = useState([]);
  const fetch = () => {
    axios
      .get("http://localhost:3000/Product")
      .then((res) => getData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  const [page, setPage] = useState(1);
  const TotalEntry = 5;
  const last = page * TotalEntry;
  const first = last - TotalEntry;
  const records = data.slice(first, last);
  const totalPage = 4;
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  function prev() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  function next() {
    if (page !== last) {
      setPage(page + 1);
    }
  }
  return (
    <>
      <h1>product</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          width: "100%",
          margin: "auto",
        }}
      >
        {records.map((el) => (
          <>
            <div
              style={{
                border: "1px solid white",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <h1>{el.id}</h1>
              <img src={el.image} alt={el.id} height={200} width={300} />
              <p>{el.title}</p>
            </div>
          </>
        ))}
      </div>
      <div className="pagi">
        <ul className="pagination" style={{ margin: "auto", width: "20%" }}>
          <li className="page-item">
            <a href="#" className="page-link" onClick={prev}>
              prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${page === n ? "active" : " "}`} key={i}>
              <a href="#" className="page-link">
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={next}>
              next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
