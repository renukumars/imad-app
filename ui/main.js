var button = document.getElementById('counter');
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.state===200){
                var counter = request.requestText;
                var span = document.getElementById('Count');
                span.innerHTML = count.toString();
            }
        }
    };
    request.open('GET','http://renukumars.imad.hasura-app.io/counter',true);
    request.send(null);
};
