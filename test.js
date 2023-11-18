import records from "./api.json" assert {type: "json"}

const fileName = "api1.json"

//const fs = import('fs');

const results = {};

const API1 = (pid) => {
    let result

    fetch("https://developers.cathaypacific.com/hackathon-apigw/airport/customers/" + pid + "/details", {
        method: "GET",
        headers: {
            "accept": "application/json",
            "apiKey": "FMw5lJSZPyXwiEYAboABtCXoJqn7GHzn"
        }
    })
        .then(response => response.json())
        .then(data => {
            results[pid] = data
        })
        .catch(error => console.log(error));

    return result
}

const API2 = (pid, sid) => {
    let result

    fetch("https://developers.cathaypacific.com/hackathon-apigw/airport/customers/" + pid + "/" + sid + "/bagallowance", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "apiKey": "FMw5lJSZPyXwiEYAboABtCXoJqn7GHzn"
        }
    })
        .then(response => response.json())
        .then(data => {
            results[pid + sid] = data
        })
        .catch(error => {
            // Handle any errors
        });

    return result
}

const API3 = (pid, sid) => {
    let result;

    fetch("https://developers.cathaypacific.com/hackathon-apigw/airport/customers/" + pid + "/" + sid + "/bagallowance", {
        "method": "POST",
        "headers": {
            "accept": "application/json",
            "apiKey": "FMw5lJSZPyXwiEYAboABtCXoJqn7GHzn"
        }
    })
        .then(response => {
            return response.json()
        }).then(data => {
            results[pid + sid] = data
        })
        .catch(err => {
            console.error(err);
        });

    return result
}

const API4 = (pid, sid, fid) => {
    let result

    fetch("https://developers.cathaypacific.com/hackathon-apigw/airport/flights/" + pid + "/" + sid + "/seatmaps?fid=" + fid, {
        method: "POST",
        headers: {
            "accept": "application/json",
            "apiKey": "FMw5lJSZPyXwiEYAboABtCXoJqn7GHzn"
        }
    })
        .then(response => response.json())
        .then(data => {
            results[pid + sid + fid] = data
            // Handle the response data here
        })
        .catch(error => {
            console.log(error);
            // Handle any errors here
        });

    return result
}

const API5 = (fid) => {
    let result

    fetch("https://developers.cathaypacific.com/hackathon-apigw/airport/flights?fid=" + fid, {
        method: "POST",
        headers: {
            "accept": "application/json",
            "apiKey": "FMw5lJSZPyXwiEYAboABtCXoJqn7GHzn"
        }
    })
        .then(response => response.json())
        .then(data => {
            results[fid] = data
            // Use the data returned from the API
        })
        .catch(error => {
            console.log(error);
            // Handle any errors that occurred during the request
        });

    return result
}

records.forEach((i) => {
    API5(i.Flight)
})

setTimeout(() => {
    //console.log(results)

    const json = JSON.stringify(results);

    console.log(json)
}, 5000)