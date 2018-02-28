//counter code
var button= document.getElementById('counter');
button.onclick = function(){
    // Create Request for counter end piont
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
    };
    
    //Make request 
    request.open('GET',"http://pariharprahalad26.imad.hasura-app.io/counter", true);
    request.send(null);
};
