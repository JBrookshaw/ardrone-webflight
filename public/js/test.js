/**
 * Created by JBrookshaw on 2/17/2015.
 */

$(document).ready(function(){




        var ctx = $('#dronestream canvas').getContext("webgl");

        //this.getImageData(100, 100, 1, 1);
        var imgData = ctx.getImageData(100, 100, 1, 1);
        console.log("Pixel Colors 0-6: " + imgData[0] + imgData[1] + imgData[2] + imgData[3] + imgData[4] + imgData[5] + imgData[6]);
        alert("hi"+imgData[0]);


    // alert("hi");
//                var ctx = document.getElementsByName('canvas').get(0).getContext("2d");
//
//
//                var imgData = ctx.getImageData(100, 100, 1, 1);
//                console.log("Pixel Colors 0-6: " + imgData[0] + imgData[1] + imgData[2] + imgData[3] + imgData[4] + imgData[5] + imgData[6]);
//                alert("hi"+imgData[0]);
//    // jQuery methods go here...
//
//
//var c = $("canvas").get(0);
//var ctx=c.getContext("2d");
//
//
//alert("hello");
//
//    var imgData=ctx.getImageData(100,100, 100, 100);
//   alert("hello");
//alert(imgData.data[100]);
});