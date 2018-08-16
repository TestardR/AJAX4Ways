var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosbtn = document.querySelector("#axios");
var quoteDisp = document.querySelector("#quote");

xhrbtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      console.log(XHR.responseText);
     var quote =  JSON.parse(XHR.responseText)[0];
      console.log(quote);
      quoteDisp.innerText = quote;
    }
  }
  XHR.open("GET", url);
  XHR.send()
});

fetchbtn.addEventListener("click", function(){
  fetch(url)
  .then(function(req){
    req.json().then(function(data){
      quoteDisp.innerText = data[0];
    })
  })
  .catch(function(){
    alert("error!")
  })
})

$("#jquery").click(function(){
  $.getJSON(url)
  .done(function(data){
    console.log(data[0]);
    $('#quote').text(data[0])
  });
});

axiosbtn.addEventListener("click", function(){
  axios.get(url)
  .then(function(res){
    quoteDisp.innerText = res.data[0];
  })
  .catch(function(err){
    console.log(err)
  })
})