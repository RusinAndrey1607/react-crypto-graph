import { useEffect, useState } from "react";
import { getData } from "../api/api";

export const useCryptoData = (limit: number) =>{
    const [data, setData] = useState([])
    useEffect(() => {
        getData(limit).then(reposne => setData(reposne))
    }, [limit])
    return data

}