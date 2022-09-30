import axios from "axios"

export function GetStaffs(data, setData) {
    axios
        .get('/ebooks')
        .then(res => {
            setData(res.data)
        })

}

export function deleteThisStaff(id) {

}