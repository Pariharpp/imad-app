//counter code
var button= document.getElementById('counter');
button.onclick = function(){
    // Create Request for counter end piont
    var request= new XMLHttpRequest();
    
    // capture the response  and store it 
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
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
//Submit button (name)
var nameInput = document.getElementById('name');
var submit = document.getElementById('submit_btn');
submit.onclick =function(){
    //request for server 
    
    
    //capture list of name
    var name =['name1','name2','name3'];
    var list='';
    for(var i = 0;i<name.lenght;i++){
        list+= '<li>' +name[i]+'</li>';
    }
   var ul =document.getElementById('namelist');
   ul.innerHTML=list;
};