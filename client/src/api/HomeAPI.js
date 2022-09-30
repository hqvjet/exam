import axios from "axios"

export function PostAPI(data) {
    console.log(data);
    axios
        .post('/store', data)
        .then(res => console.log(res.data))

}

export function GetAPI() {
    axios
        .get('/store')
        .then(res => console.log(res.data))
}

