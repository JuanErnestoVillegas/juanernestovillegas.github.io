import { useState, useEffect } from "react";
import axiosClient from "./../config/axiosConfig";


const useGet = (url) =>{
    const [data,setData] = useState([]);
    const getData = async () => {
        try {
          const response = await axiosClient.get(url);
          setData(response.data.data);
        } catch (error) {
          console.error(error);
        }
      }   
      useEffect(()=>{
        getData();
      },[])

      return [data,setData,getData]
}
 
export default useGet