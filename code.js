var wImg = 800;
var sizeImage=0;
function resizeJS(){
    var x = document.querySelectorAll('.wrap-img img');
    for (const i of x) {
        sizeImage+=wImg;
    }
}
resizeJS();

var clear = setInterval(function(){
    rightSlideClick();
},5000);
var trans = 0;
document.querySelector('.home .slide .slide-left .btn-left').onclick = leftSlideClick;

function leftSlideClick(){
    if(trans>0){
        trans=trans-wImg;
        document.querySelector('.home .slide .slide-left .wrap-img').style.transform = 'translateX(-'+trans+'px)';
    }
    else{
        trans = sizeImage-wImg;
        document.querySelector('.home .slide .slide-left .wrap-img').style.transform = 'translateX(-'+trans+'px)';   
    }
    clearInterval(clear);
    clear = setInterval(function(){
        rightSlideClick();
    },5000);
}
document.querySelector('.home .slide .slide-left .btn-right').onclick = rightSlideClick;
function rightSlideClick(){
    if(trans<sizeImage-wImg){
        trans = trans + wImg;
        document.querySelector('.home .slide .slide-left .wrap-img').style.transform = 'translateX(-'+trans+'px)';  
    }
    else {
        trans = 0 ;
        document.querySelector('.home .slide .slide-left .wrap-img').style.transform = 'translateX(-'+trans+'px)';
    }
    clearInterval(clear);
    clear = setInterval(function(){
        rightSlideClick();
    },5000);
}



document.querySelectorAll('.slide .slide-right div')