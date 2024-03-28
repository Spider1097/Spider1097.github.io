var actual_lat=document.getElementById("send_LATITUDE_data")
var actual_lon=document.getElementById("send_LONGITUDE_data")
var actual_alt=document.getElementById("send_ALTITUDE_data")
var actual_speedx=document.getElementById("send_speed_x_data")
var actual_speedy=document.getElementById("send_speed_y_data")
var actual_speedz=document.getElementById("send_speed_z_data")
var lat_ball=document.getElementById("send_lat_data")
var lon_ball=document.getElementById("send_lon_data")
var alt_ball=document.getElementById("send_alt_data")
var color_ball=document.getElementById("color_of_ball")

const dataList = document.getElementById('dataList');
const dataList2 = document.getElementById('dataList2');
const dataList3 = document.getElementById('dataList3');

var h_text = document.getElementById("h_text");
var m_text = document.getElementById("m_text");
var s_text = document.getElementById("s_text");
var gps_data_lat = document.getElementById("gps_data_lat_input");
var gps_data_lon = document.getElementById("gps_data_lon_input");
var gps_data_alt = document.getElementById("gps_data_alt_input");
var color_of_ball = document.getElementById("color_of_ball_input");

var list_counter=0;

function addDataToList(data) {

    const currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    const listItem = document.createElement('li');
    listItem.innerHTML = "[" + hours + ":" + minutes + ":" + seconds + "] " + 
    "<div class='gps_text'>- GPS Data:</div> " +
    "<div class='text'>" + data[0] + "</div> " +
    "<div class='text'>" + data[1] + "</div> " +
    "<div class='text'>" + data[2] + "</div> " +
    "<div class='ball_text'>- Ball:</div> " +
    "<div class='text'>" + data[3] + "</div>";
    
    if(list_counter <4){
    dataList.appendChild(listItem);
    dataList.appendChild(document.createElement('br'));
    }
    else if(list_counter <8){
        dataList2.appendChild(listItem);
        dataList2.appendChild(document.createElement('br'));
    }else{
        dataList3.appendChild(listItem);
        dataList3.appendChild(document.createElement('br'));
    }
    list_counter+=1;
}

function addToDataNoneStop(data){
    actual_lat.innerHTML=data[0];
    actual_lon.innerHTML=data[1];
    actual_alt.innerHTML=data[2];
    actual_speedx.innerHTML=data[3];
    actual_speedy.innerHTML=data[4];
    actual_speedz.innerHTML=data[5];
}

var last_counter=0;

function addToDataBall(data){

    let rememver_data=data;
    
    if (last_counter == data[4]) {
        lat_ball.innerHTML=data[0]
        lon_ball.innerHTML=data[1]
        alt_ball.innerHTML=data[2]
        color_ball.innerHTML=data[3]
    } else {
        last_counter=data[4]
        //addDataToList(rememver_data)
    }

}

var ws = new WebSocket("ws://localhost:8765");

ws.onopen = function(event) {
    console.log("Connected to server");
};

var receivedData=0

ws.onmessage = function(event) {

    receivedData = event.data.split(',');

    var data_run_none_stop=[];
    var data_aff_ball=[];

    for (let i = 0; i < 6; i++) {
        data_run_none_stop.push(receivedData[i]);
    }

    for (let i = 6; i < receivedData.length; i++) {
        data_aff_ball.push(receivedData[i]);
    }

    addToDataNoneStop(data_run_none_stop);
    addToDataBall(data_aff_ball);
    addDataToList(data_aff_ball)
     
    // console.log("first",data_run_none_stop);
    // console.log("second",data_aff_ball);

    console.log(greet(receivedData))
    
};

ws.onclose = function(event) {
    console.log("Connection closed");
};

ws.onerror = function(event) {
    console.log("Error: ", event);
};



