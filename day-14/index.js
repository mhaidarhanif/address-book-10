console.log("Day 14");

const sayHelloButtonElement = document.getElementById("say-hello");

const alertHello = function () {
  console.log(this);
};

sayHelloButtonElement.addEventListener("click", alertHello);
