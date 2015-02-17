/**
 * Created by JBrookshaw on 2/17/2015.
 */


var c = $("canvas").get(0);
var ctx=c.getContext("2d");


alert("hello");

    var imgData=ctx.getImageData(10,10,50,50);
   alert("hello");
alert(imgData.data[0]);
