var dislike = document.getElementById("poop");
var like = document.getElementById("pound");
var dislike2 = document.getElementById("poop2");
var like2 = document.getElementById("pound2");
var xhr = new XMLHttpRequest();

var count = 0;

like.addEventListener("click", function(e) {
  addUp()

})

dislike.addEventListener("click", function() {
  minusDown();
})

like2.addEventListener("click", function(e) {
  addUp2();
})

dislike2.addEventListener("click", function() {
  minusDown2();
})

function addUp() {
    var counter = document.getElementById("counter");
    if (counter) {
      counter.innerHTML = ++count;
      xhr.open('POST',"/add", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json)
        }
      }
      var data = JSON.stringify({
        count: parseInt(counter.innerHTML)
      });
      xhr.send(data);
    }
};

function minusDown() {
    var counter = document.getElementById("counter");
    if (counter) {
      counter.innerHTML = --count;
      xhr.open('POST',"/minus", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json)
        }
      }
      var data = JSON.stringify({
        count: parseInt(counter.innerHTML)
      });
      xhr.send(data);
    }
};

function addUp2() {
    var counter = document.getElementById("counter2");
    if (counter) {
      counter.innerHTML = ++count;
      xhr.open('POST',"/add2", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json)
        }
      }
      var data = JSON.stringify({
        count2: parseInt(counter.innerHTML)
      });
      xhr.send(data);
    }

};

function minusDown2() {
    var counter = document.getElementById("counter2");
    if (counter) {
      counter.innerHTML = --count;
      xhr.open('POST',"/add2", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json)
        }
      }
      var data = JSON.stringify({
        count2: parseInt(counter.innerHTML)
      });
      xhr.send(data);
    }
};

window.onLoad(

)
