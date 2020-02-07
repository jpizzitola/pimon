var express = require('express');
var app = express()

var http = require('http').Server(app);
var io = require('socket.io')(http);
var os = require('os-utils');

app.use(express.static('html'));

const si = require('systeminformation');

cpuData()

 
async function cpuData() {
    try {
        const data = await si.cpu();
        console.log('CPU Information:');
        console.log('- manufucturer: ' + data.manufacturer);
        console.log('- brand: ' + data.brand);
        console.log('- speed: ' + data.speed);
        console.log('- cores: ' + data.cores);
        console.log('- physical cores: ' + data.physicalCores);
        console.log('...');
    } catch (e) {
        console.log(e)
    }
}

















// const si = require('systeminformation');



// http.listen(80, function(){

//     for(var i = 0; i < histogramLength; i++){
//         cpuHistogram[i] = [i,0];
//     }

//     setInterval(function(){
 
// // promises style - new since version 3
// si.cpuTemperature(function(data) {
//     console.log('CPU Information:');
   
//     console.log(data.cores[1]);
// }, interval);

// })
// })