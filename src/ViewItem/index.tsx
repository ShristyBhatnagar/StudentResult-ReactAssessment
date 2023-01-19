import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import { GrView } from "react-icons/gr";
const ViewItem = () => {
  const [data, setData] = useState<any>();
  const id = useParams();
  console.log(id);
  useEffect(() => {
    if (!data) {
      getData(id);
    }
  }, [id]);
  const getData = async (item: any) => {
    try {
      const url = `http://localhost:5000/data/${item.id}`;
      const result: any = await axios.get(url);
      setData(result.data);
      console.log("Inside view --> ", result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container2">
      {data && (
        <table className="container2__mylist">
          <th>
            <h2>{data.name}'s Result</h2>
          </th>

          <tr>
            <td>Name-</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Rollnumber-</td> <td>{data.rollnumber}</td>
          </tr>
          <tr>
            <td>English Score-</td> <td>{data.english}</td>
          </tr>
          <tr>
            <td>Telugu Score-</td> <td>{data.telugu}</td>
          </tr>
          <tr>
            <td>Hindi Score-</td> <td>{data.hindi}</td>
          </tr>
          <tr>
            <td>English Score-</td> <td>{data.english}</td>
          </tr>
          <tr>
            <td>Social Score-</td> <td>{data.social}</td>
          </tr>
          <tr>
            <td>Activity Score-</td> <td>{data.activities}</td>
          </tr>
          <tr>
            <td>Total Score-</td> <td>{data.total}</td>
          </tr>
          <Link className="icon__button" to={`/view`}>
            <GrView size={20} />
            View all data
          </Link>
        </table>
      )}
    </div>
  );
};

export default ViewItem;
