$(document).ready(main);
var contador = 1;

function main(){
    $('#menu-toogle').click(function(){
        if(contador == 1){
            $('#header__nav').animate({
                left: '0'
            });
            contador = 0;
        }else{
            $('#header__nav').animate({
                left:'-150%'
            });
            contador = 1;
        }
    })
}