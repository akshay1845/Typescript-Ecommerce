import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./view.scss";

export default function View() {

    const { id }:any = useParams();

    const [data, setData]:any = useState("")    
    
    const prodData =  useSelector((state: any): any => state.API_Data.Apidata);
    const productData = prodData.filter((e:any)=> e.id === parseInt(id))
    
    useEffect(()=>{
        setData(productData[0])
    },[id])
  
  return (
    <>
      <div className="products row">
        <div className="left col">
          <img src={`../${data.img}`} alt="img" />
        </div>
        <div className="right col ">
          <h2 className="title">{data.name}</h2>
          <div className="container">
            <p className="description">
             {data.desc}
            </p>

            <h4 className="price">
              price <span>$ {data.price}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
