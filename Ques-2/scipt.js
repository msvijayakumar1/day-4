let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = () =>{
    let flag_arr = JSON.parse(req.response);
    console.log(flag_arr);
    for(const i in flag_arr) {
        console.log(flag_arr[i].flags)
    }
}

req.onerror = () =>{
    console.log("Something Went Wrong");
}