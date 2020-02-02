$(document).ready(function() {
    $('.submit').click(function() {
        var city = $('.city').val();

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=6d69b0a0fc3d8a92c8eb8f010f1691bc",
            method: "GET",
            dataType: "jsonp",
            success: function(data) {
                var widget = show(data);
                $("#weather").html(widget);
                $(".city").val('');
            }
        
        });
    });
});

function show(data){
    return "<h3>Weather:" +data.weather[0].main +"</h3>" +
           "<h3>Weather:" + data.weather[0].description +"</h3>";
}

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6d69b0a0fc3d8a92c8eb8f010f1691bc";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});


