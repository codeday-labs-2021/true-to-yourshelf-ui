import { queryAllByTestId } from "@testing-library/react";
import axios from "axios";

export default{

    getBooks: async (apiRequest) => {
        const {query, pageSize, apiKey} = apiRequest;
        let path = `emotion-request?query=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
        return axios.get(`http://localhost:8080/${path}`)
        .then((response) =>{
            return response && response.data;
        })
        .catch((err)=>{
            console.log(err);
            return Promise.reject(err)
        });
    },

    getEmotions: async () => {
        let path = "http://localhost:8080/emotions";
        return axios.get(path)
            .then((response) =>{
                return response && response.data;
            })
            .catch((err)=>{
                console.log(err);
                return Promise.reject(err);
            });
    }

}