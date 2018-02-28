//counter code
var button= document.getElementById('counter');
var counter=0;
button.onclick = function(){
    //Request for counter end piont
    var request= new XMLHttpRequest();
    
    // capture the response  and store it 
    request.onreadystatechange =function(){
        if(request.readystate=== XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.reponseText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
    }
    
    counter = counter +1;
    
};
