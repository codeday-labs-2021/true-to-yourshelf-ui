import { queryAllByTestId } from "@testing-library/react";
import axios from "axios";

export default{

    getBooks: async (apiRequest) => {
        const {query, pageSize, apiKey} = apiRequest;
        let path = `emotion-request?query=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
        return axios.get(`${trueToYourShelfApi}${path}`)
        .then((response) =>{
            return response && response.data;
        })
        .catch((err)=>{
            console.log(err);
            return Promise.reject(err)
        });

    }

}