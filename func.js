$(document).ready(function(){
    $("img").mousedown(function(e){
        e.preventDefault()
   });

   $('#submit').on('click',function(){


    let txt = $('#email').val();

   

    if(txt == ''){
        $('.error').css({"display":"block"});
        return;
    }
    else if(!(txt.indexOf('@gmail.com') >= 0  || txt.indexOf('@yahoo.com') >= 0 || txt.indexOf('@hotmail.com') >= 0 )){
        $('.error').css({"display":"block"});  
            return; 
        } 
    
    else if(txt == "@gmail.com" || txt == "@yahoo.com" || txt == "@hotmail.com"){
        $('.error').css({"display":"block"});  
            return; 
        } 
    else{
        $('.error').css({"display":"none"}); 
    }
    
   });
   
})