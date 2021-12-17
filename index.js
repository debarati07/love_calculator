document.getElementById("button").addEventListener("click", act);

function act() {
  var firstname = document.getElementById("first").value;
  firstname = firstname.toUpperCase();
  var secondname = document.getElementById("second").value;
  secondname = secondname.toUpperCase();

  var lovescore = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".part").remove();
  new_element = document.createElement("div");
  document.body.appendChild(new_element);
  new_element.innerHTML =
    firstname + " & " + secondname + ",Your Love Score is " + lovescore + "%";
  newpara = document.createElement("p");
  document.body.appendChild(newpara);
  newpara.classList.add("analysis");
  if (lovescore < 20) {
    newpara.innerHTML =
      "Nevermind,Some things are just never meant to be,NO matter how much we wish they were.";
  } else if (lovescore >= 20 && lovescore < 40) {
    newpara.innerHTML =
      "When two people are destined to be together, don't worry. Just wait. The love that you seek will come to you at the right time, the right place, and with the right person that was meant to love you the way you always wanted";
  } else if (lovescore >= 40 && lovescore < 60) {
    newpara.innerHTML =
      "No relationship is easy, but if you're willing to make it work, it will.I think if they mean something to you, you should fight through whatever comes your way.";
  } else if (lovescore >= 60 && lovescore < 80) {
    newpara.innerHTML =
      "Together is a wonderful place to be.You both are happy with each other.Try to stay positive and support each other ";
  } else {
    newpara.innerHTML =
      "What a match! You people are so incredibly fortunate to have crossed paths with eachother . It has brought you people to this beautiful point in our lives.";
  }
  new_element.classList.add("score");
  console.log(firstname);
  console.log(secondname);
}
