var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6d69b0a0fc3d8a92c8eb8f010f1691bc";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});


