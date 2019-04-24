export function httpGet(url) {
    return fetch(url, {
            method: "GET"
        })
        .then((response) => response.json())
        .then((responseData) => {
            //console.log("responseData", responseData);
            return responseData;
        })
        .catch(error => console.log(error));
}


export function ArrNoDupe(a) {
    var temp = {};
    for (var i = 0; i < a.length; i++)
        temp[a[i]] = true;
    var r = [];
    for (var k in temp)
        r.push(k);
    return r;
}


export function getLocation(href) {
    var location = document.createElement("a");
    location.href = href;
    // IE doesn't populate all link properties when setting .href with a relative URL,
    // however .href will return an absolute URL which then can be used on itself
    // to populate these additional fields.
    if (location.host == "") {
      location.href = location.href;
    }
    return location;
}

