import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDYzOWRlMTRkODVjMmFjNjEzOTc3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTE1NDc2NSwiZXhwIjoxNjQ5NzU5NTY1fQ.ZONu269mdYq2k79U2p8c-sZ2iKFtSjFwEd-rOkD3gKU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});