import axios from "axios";

const BASE_URL= "https://binary-tree.onrender.com/api/";

export const publicRequest= axios.create({
    baseURL: BASE_URL,
});

