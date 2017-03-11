var dislike = document.getElementById("poop");
var like = document.getElementById("pound");
var dislike2 = document.getElementById("poop2");
var like2 = document.getElementById("pound2");
var count = 0;

like.addEventListener("click", function(e) {
  addUp();
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
    if (counter) counter.innerHTML = ++count;
};

function minusDown() {
    var counter = document.getElementById("counter");
    if (counter) counter.innerHTML = --count;
};

function addUp2() {
    var counter = document.getElementById("counter2");
    if (counter) counter.innerHTML = ++count;
};

function minusDown2() {
    var counter = document.getElementById("counter2");
    if (counter) counter.innerHTML = --count;
};
