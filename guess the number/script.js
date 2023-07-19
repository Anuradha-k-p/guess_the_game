var initialvalue = 100;
    var highscore = null;
    let randomnumber = random(100);
    document.getElementById("hide").innerHTML = randomnumber;
    function refresh() {
      initialvalue = 100;
      document.body.style.backgroundColor = "brown";
      document.querySelector(".message").innerHTML = "Start guessing...";
      document.querySelector(".Chances").textContent = `${initialvalue}`;
      document.querySelector(".Highscore").textContent = `${highscore}`;
      document.querySelector("input").value = "";
      randomnumber = random(100);
      document.querySelector(".hide1").style.display = "block";
      document.querySelector(".btn").style.display = "block";
    }
    function random(n) {
      return Math.floor(Math.random() * n) + 1;
    }
    function check() {
      let inputnumber = document.getElementById("guess").value;
      if (initialvalue !== 0) {
        if (inputnumber > randomnumber) {
          document.querySelector(".message").innerHTML = "Your guess is high";
          document.querySelector(".Chances").textContent = --initialvalue;
        } else if (inputnumber < randomnumber) {
          document.querySelector(".message").innerHTML = "Your guess is low";
          document.querySelector(".Chances").textContent = --initialvalue;
        } else {
          document.body.style.backgroundColor = "green";
          document.querySelector(".message").textContent = "Hurry you won";
          document.querySelector(".Chances").textContent = --initialvalue;
          if (highscore === null || initialvalue > highscore) {
            highscore = initialvalue;
            document.querySelector(".Highscore").textContent = highscore;
          }
          document.querySelector(".btn").style.display = "none";
          document.querySelector(".hide1").style.display = "none";
        }
      } else {
        document.querySelector(".message").textContent = "Game over";
      }

    }
