let timer;

$("#start").click(function(){
    clearInterval(timer);
    timer = setInterval(changeColor,100);
});

$("#stop").click(function(){
    clearInterval(timer);
});

let count = 1;

function changeColor(){
    if(count==1){
        $("#one").css('background-color', '#cc0000');
        $("#two").css('background-color', '#990000');
        $("#three").css('background-color', '#993333');
        $("#four").css('background-color', '#d98c8c');
        $("#five").css('background-color', '#ecc6c6');
        $("#six").css('background-color', '#cc0001');
    }

    if(count==2){
        $("#one").css('background-color', '#cc00001');
        $("#two").css('background-color', '#cc0000');
        $("#three").css('background-color', '#990000');
        $("#four").css('background-color', '#993333');
        $("#five").css('background-color', '#d98c8c');
        $("#six").css('background-color', '#ecc6c6');
    }
    if(count==3){
        $("#one").css('background-color', '#ecc6c6');
        $("#two").css('background-color', '#cc00001');
        $("#three").css('background-color', '#cc0000');
        $("#four").css('background-color', '#990000');
        $("#five").css('background-color', '#993333');
        $("#six").css('background-color', '#d98c8c');
    }
    if(count==4){
        $("#one").css('background-color', '#d98c8c');
        $("#two").css('background-color', '#ecc6c6');
        $("#three").css('background-color', '#cc00001');
        $("#four").css('background-color', '#cc0000');
        $("#five").css('background-color', '#990000');
        $("#six").css('background-color', '#993333');

    }
    if(count==5){
        $("#one").css('background-color', '#993333');
        $("#two").css('background-color', '#d98c8c');
        $("#three").css('background-color', '#ecc6c6');
        $("#four").css('background-color', '#cc00001');
        $("#five").css('background-color', '#cc0000');
        $("#six").css('background-color', '#990000');
    }
    if(count==6){
        $("#one").css('background-color', '#990000');
        $("#two").css('background-color', '#993333');
        $("#three").css('background-color', '#d98c8c');
        $("#four").css('background-color', '#ecc6c6');
        $("#five").css('background-color', '#cc00001');
        $("#six").css('background-color', '#cc0000');
    }

    if(count==7){
        /* $("#five").css('background-color','#cc0000');*/
        $("#six").css('background-color', '#990000');
        $("#five").css('background-color', '#993333');
        $("#four").css('background-color', '#d98c8c');
        $("#three").css('background-color', '#ecc6c6');
        $("#two").css('background-color', '#cc00001');
        $("#one").css('background-color', '#cc0000');
    }
    if(count==8){
        $("#six").css('background-color', '#cc0000');
        $("#five").css('background-color', '#990000');
        $("#four").css('background-color', '#993333');
        $("#three").css('background-color', '#d98c8c');
        $("#two").css('background-color', '#ecc6c6');
        $("#one").css('background-color', '#cc00001');
    }
    if(count==9){
        $("#six").css('background-color', '#990000');
        $("#five").css('background-color', '#993333');
        $("#four").css('background-color', '#d98c8c');
        $("#three").css('background-color', '#ecc6c6');
        $("#two").css('background-color', '#cc00001');
        $("#one").css('background-color', '#cc0000');
    }
    if(count==10){
        $("#six").css('background-color', '#cc0000');
        $("#five").css('background-color', '#990000');
        $("#four").css('background-color', '#993333');
        $("#three").css('background-color', '#d98c8c');
        $("#two").css('background-color', '#ecc6c6');
        $("#one").css('background-color', '#cc00001');
    }
    if(count==11){
        $("#six").css('background-color', '#cc00001');
        $("#five").css('background-color', '#cc0000');
        $("#four").css('background-color', '#990000');
        $("#three").css('background-color', '#993333');
        $("#two").css('background-color', '#d98c8c');
        $("#one").css('background-color', '#ecc6c6');
    }
    if(count==12){
        $("#six").css('background-color', '#ecc6c6');
        $("#five").css('background-color', '#cc00001');
        $("#four").css('background-color', '#cc0000');
        $("#three").css('background-color', '#990000');
        $("#two").css('background-color', '#993333');
        $("#one").css('background-color', '#d98c8c');

    }
    if(count>12){
        count=-1;
    }
    count++;
}