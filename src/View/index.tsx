import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  PrimaryButton,
} from "@fluentui/react";
import { Link } from "react-router-dom";
import { HiPencil, HiEye, HiCircleStack } from "react-icons/hi2";
import { MdOutlineDelete } from "react-icons/md";
import "./index.scss";


const View = () => {
  const [data, setData] = useState<any>();
  const getData = async () => {
    try {
      const url = "http://localhost:5000/data";
      const result: any = await axios.get(url);
      setData(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRequest = async (id: any) => {
    try {
      const url = `http://localhost:5000/data/${id}`;
      const result: any = await axios.delete(url);
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Roll Number",
      fieldName: "rollnumber",
      minWidth: 50,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column3",
      name: "English",
      fieldName: "english",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },

    {
      key: "column4",
      name: "Telugu",
      fieldName: "telugu",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },

    {
      key: "column6",
      name: "Hindi",
      fieldName: "hindi",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },
    {
      key: "column7",
      name: "Science",
      fieldName: "science",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },
    {
      key: "column8",
      name: "Social",
      fieldName: "social",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },
    {
      key: "column9",
      name: "Activities",
      fieldName: "activities",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },
    {
      key: "column10",
      name: "total",
      fieldName: "total",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
    },
    {
      key: "column11",
      name: "",
      fieldName: "id",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
      onRender: (item: any) =>
        item && (
          <div className="icon">
            
           
            <Link className="icon__button" to={`/View/${item.id}`}>
              <HiEye color={"#2F303157"} size={20} />
            </Link>
            <Link className="icon__button" to={`/Update/${item.id}`}>
              <HiPencil color={"#2F303157"} size={20} />
            </Link>
            <Link
              className="icon__button"
              onClick={() => deleteRequest(item.id)}
              to=""
            >
              <MdOutlineDelete color={"#2F303157"} size={25} />
            </Link>
          </div>
        ),
    },
  ];
  
  return (
    <div>
      <Link className="button" to="/Create">
        <PrimaryButton className="App__btn">Add</PrimaryButton>
      </Link>
      <h1>All Student's Result</h1>
     
      <div className="list">
        {data && (
          <DetailsList
            items={data}
            columns={columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            
          />
        )}
        
      </div>
    </div>
  );
};

export default View;
