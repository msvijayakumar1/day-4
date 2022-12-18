let rq = new XMLHttpRequest();

rq.open("GET", "https://restcountries.com/v3.1/all");
rq.send();

rq.onload = () => {
    let flag_arr = JSON.parse(rq.response);
    for(const i in flag_arr) {
        console.log(`Name: ${flag_arr[i].name.official} Region: ${flag_arr[i].region} Sub-region: ${flag_arr[i].subregion} Population: ${flag_arr[i].population}`);
    }
}

rq.onerror = () => {
    console.log("error");
}