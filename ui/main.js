/*//counter code
var button= document.getElementById('counter');
button.onclick = function(){
    // Create Request for counter end piont
    var request = XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter= request.reponseText;
                var span = document.getElementById('counter');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET',"http://pariharprahalad26.imad.hasura-app.io/counter",true);
    request,send(null);
        
};
//Submit button (name)
var submit =document.getElementById('submit=btn');
submit.onclick =function(){
    //request for server 
    var request= new XMLHttpRequest();
    
    // capture the response  and store it 
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i = 0;i<name.lenght;i++){
                 list+= '<li>' +name[i]+'</li>';
    }
   var ul =document.getElementById('namelist');
   ul.innerHTML=list;
            }
        }
    };
    //Make request 
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
   /* var submit = document.getElementById('submit_btn');*/
//request.open('GET',"http://pariharprahalad26.imad.hasura-app.io/submit-name?name="+name, true);
   // request.send(null);
    
    //capture list of name
    
//};
var submit =document.getElementById('submit=btn');
submit.onclick =function(){
    //request for server 
    var request= new XMLHttpRequest();
    
    // capture the response  and store it 
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status===200){
               alert("update succesfully");
            }elseif(request.status===500){
               alert("something went wrong");
            }
        }
    };
    //Make request 
    var username = document.getElementById('username').value;
    var mobno =document.getElementById('mobno').value;
    console.log('username');
    console.log('mobno');


   /* var submit = document.getElementById('submit_btn');*/
    request.open('GET',"http://pariharprahalad26.imad.hasura-app.io/algo/update", true);
    request.setRequestHeader('content-type',application/json);
    request.send(JASON.stringify({username:username,mobno:mobno}));
    
    //capture list of name
    
};

