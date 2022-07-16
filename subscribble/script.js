var XMLHTTP = new XMLHttpRequest() ;

XMLHTTP.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        var output = this.responseText;
        output = JSON.parse(output);
        var sub_number = output.items[0].statistics["subscriberCount"];
        document.getElementById("sub_count").innerHTML = sub_number;
    }

}

XMLHTTP.open("GET" , "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=UCu1Kr4DpPYLd2onXqzSkgQg&key=AIzaSyBYw3zOAW2CX6Fe5ZwE3JmnUDPR-HY2XTI");

XMLHTTP.send();
setTimeout(result,1000);