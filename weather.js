$(document).ready(function() {
    $('.submit').click(function() {
        var city = $('#city-name').val();
        var key = '6d69b0a0fc3d8a92c8eb8f010f1691bc';
        console.log(city)

        //http://openweathermap.org/img/wn/10d@2x.png

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            dataType: "json",
            data: {q:city, APPID: key, units: 'imperial'},
            success: function(data) {
                console.log(data)
                var infoHTML = show(data)
            //     var wf = '';
            //     $.each(data.weather,function(index, val) {
            //     wf += '<p><b>' + data.name + "</b><img src=http://openweathermap.org/img/wn/" + val.icon + "@2x.png></p>"
            //      + data.main.temp + '&deg;F' + ' | ' + val.main + " , " + 
            //     val.description
            //     var widget = show(data);
            //     $("#weather").html(widget);
            //     $(".city").val('');
            // });
               $("#weather").html(infoHTML); 
            }
        
        });

        var submit = $(".submit");
        console.log(submit);
        submit.on("click", function() {
            console.log("click");
            var task = $(this)
            .siblings("#city-name")
            .val();
            var searchCity = $(this).attr("id");
            localStorage.setItem(searchCity, task);
        });

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + key + "&units=imperial",
            method: "GET",
            success: function(data) {
                var list = data.list;
                console.log(data)
                for(var i =0; i < list.length; i += 8 ){
                    var infoHTML = show(list[i]);
                    $("#five-day").append(infoHTML); 
                }
                //var infoHTML = show(data)
            // });
               
            }
        
        });
    });
});

function show(data){
    return "<header>Current Weather " + data.name + ", " + data.sys.country +"</header>" +
           "<h3>Weather: " + data.weather[0].main +"</h3>" +
           "<h3>Description: " + data.weather[0].description +"</h3>" +
           "<h3>Temperature: " + data.main.temp + "˚F</h3>" +
           "<h3>Humidity: " + data.main.humidity + "</h3>" +
           "<h3>Wind Speed:" + data.wind.speed + "</h3>" +
           "<img src=http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png>"

};

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6d69b0a0fc3d8a92c8eb8f010f1691bc";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    //console.log(response);
});


