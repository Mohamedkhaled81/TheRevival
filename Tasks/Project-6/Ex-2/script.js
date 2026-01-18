let greetElem = document.getElementById("greeting-container");
let userElem = document.getElementById("user-data");


function parseQueryString() {
    let parsedQuery = {};
    let queryString = location.search.slice(1);
    let queries = queryString.split('&');
    for(let indx = 0; indx < queries.length; indx++) {
        let query = queries[indx].split("=");
        parsedQuery[query[0]] = decodeURIComponent(query[1].replace(/\+/g, " "));
    }
    return parsedQuery;
} 

function greetUser(parsedQuery) {
    let userData = parsedQuery["title"] +
    ": " + parsedQuery["firstName"] +
    " " + parsedQuery["lastName"];
    let greetMssg = "Welcome " + userData;

    greetElem.innerHTML = "<h1>" + greetMssg +"</h1>"
}

function displayUserData(parsedQuery) {
    let mulHtml = "";
    for(let key in parsedQuery) {
        mulHtml += "<p>" + "<b>" + key + "</b>" + " : " + parsedQuery[key] + "</p>";
    }
    userElem.innerHTML = mulHtml;
}

greetUser(parseQueryString());
displayUserData(parseQueryString());