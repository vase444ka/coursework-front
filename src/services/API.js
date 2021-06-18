import axios from "axios";

let backUrl = 'http://localhost:8080/'

export async function getYearbooks() {
    return (await axios.get(backUrl + "list")).data;
}

export async function addYearbook(yearbook) {
    let res = await axios.post(backUrl + "add", yearbook.toJSON);
    let data = res.data;
    console.log(data);
}