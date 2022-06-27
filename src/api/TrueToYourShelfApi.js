import { queryAllByTestId } from "@testing-library/react";
import axios from "axios";

export default{

    getBooks: async (apiRequest) => {
        const {query, pageSize, apiKey} = apiRequest;
        // let path = `emotion-request?query=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
        let path = `emotion-request?query=IMAGINATIVE&pageSize=20&apiKey=c44b31886102636bcb386abc55a62211`;
        // return axios.get(`${trueToYourShelfApi}${path}`)
        return axios.get(`http://localhost:8080/${path}`)
        .then((response) =>{
            return response && response.data;
        })
        .catch((err)=>{
            console.log(err);
            return Promise.reject(err)
        });

    }

}