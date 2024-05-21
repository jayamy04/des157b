(function(){
    'use strict';
    // values from the JSON data
    let globalData;
    // number of entries
    let numDataPoints;
    // fetches a JSON file from the server
    async function getData(){
        const myMoods = await fetch('data/data.json');
        // parses myMoods into JSON
        const data = await myMoods.json();
        // KEYS
        const dataPoints = Object.keys(data);
        // VALUES
        globalData = Object.values(data);
        // # OF KEYS
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showMoodInfo(point, data){
        const faces = [
            '<img src="images/one_face.png" alt="three_face" style="width:100px;height:100px;">',
            '<img src="images/two_face.png" alt="three_face" style="width:100px;height:100px;">',
            '<img src="images/three_face.png" alt="three_face" style="width:100px;height:100px;">',
            '<img src="images/four_face.png" alt="four_face" style="width:100px;height:100px;">',
            '<img src="images/five_face.png" alt="five_face" style="width:100px;height:100px;">',
            '<img src="images/six_face.png" alt="six_face" style="width:100px;height:100px;">',
            '<img src="images/seven_face.png" alt="seven_face" style="width:100px;height:100px;">',
            '<img src="images/eight_face.png" alt="eight_face" style="width:100px;height:100px;">',
            '<img src="images/nine_face.png" alt="nine_face" style="width:100px;height:100px;">',
            '<img src="images/ten_face.png" alt="ten_face" style="width:100px;height:100px;">',
        ];
        const clock = [
            '<img src="images/three.png" alt="three" style="width:100px;height:100px;">',
            '<img src="images/three_fifteen.png" alt="three_fifteen" style="width:100px;height:100px;">',
            '<img src="images/three_thirty.png" alt="three_thirty" style="width:100px;height:100px;">',
            '<img src="images/three_fourfive.png" alt="three_fourfive" style="width:100px;height:100px;">',
            '<img src="images/four.png" alt="four" style="width:100px;height:100px;">',
            '<img src="images/four_fifteen.png" alt="four_fifteen" style="width:100px;height:100px;">',
            '<img src="images/four__thirty.png" alt="four__thirty" style="width:100px;height:100px;">',
            '<img src="images/four_fourfive.png" alt="four_fourfive" style="width:100px;height:100px;">',
            '<img src="images/five.png" alt="five" style="width:100px;height:100px;">',
            '<img src="images/five_fifteen.png" alt="five_fifteen" style="width:100px;height:100px;">',
            '<img src="images/five__thirty.png" alt="five__thirty" style="width:100px;height:100px;">',
            '<img src="images/five_fourfive.png" alt="five_fourfive" style="width:100px;height:100px;">',
            '<img src="images/six.png" alt="six" style="width:100px;height:100px;">',
            '<img src="images/six_fifteen.png" alt="six_fifteen" style="width:100px;height:100px;">',
            '<img src="images/six_thirty.png" alt="six_thirty" style="width:100px;height:100px;">',
            '<img src="images/six_fourfive.png" alt="six_fourfive" style="width:100px;height:100px;">',
            '<img src="images/seven.png" alt="seven" style="width:100px;height:100px;">',
        ];
        document.querySelector('#mood_no').innerHTML = data[point].mood;
        document.querySelector('#location').innerHTML = data[point].location;
        document.querySelector('#company').innerHTML = data[point].company;
        document.querySelector('#time').innerHTML = data[point].time;
        document.querySelector('#clock').innerHTML = clock[ data[point].time_index ];
        document.querySelector('#moods').innerHTML = faces[ data[point].mood ];
    }

    // Event listener for when the mouse moves
    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            showMoodInfo(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();

})(); // end IIFE