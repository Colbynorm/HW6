$(document).ready(function() {
    $('.submit').click(function() {
        var city = $('.city').val();
        var key = '6d69b0a0fc3d8a92c8eb8f010f1691bc';

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            dataType: "json",
            data: {q:city, appid: key, unit: 'imperial'},
            success: function(data) {
                var wf = '';
                $.each(data.weather,function(index, val) {
                wf += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>"
                data.main.temp + '&deg;F' + ' | ' + val.main + " , " + 
                val.description
                // var widget = show(data);
                // $("#weather").html(widget);
                // $(".city").val('');
            });
               $("#weather").html(wf); 
            }
        
        });
    });
});

function show(data){
    return "<header>Current Weather" + data.name + ", " + data.sys.country +"</header>" +
           "<h3>Weather:" + data.weather.main +"</h3>" +
           "<h3>Description:" + data.weather.description +"</h3>" +
           "<h3>Temperature:" + data.main.temp + "</h3>" +
           "<h3>Humidity:" + data.main.humidity + "</h3>" +
           "<h3>Wind Speed:" + data.wind.speed + "</h3>" +
           "<h3>Weather:" + data.weather.icon + "</h3>";
};

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6d69b0a0fc3d8a92c8eb8f010f1691bc";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});


