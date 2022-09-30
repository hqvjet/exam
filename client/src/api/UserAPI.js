import axios from "axios"
import {useParams} from "react-router-dom";

export function GetEbook() {
    const id = useParams()
    axios
        .get(`/ebook/${id}`)
        .then()
}