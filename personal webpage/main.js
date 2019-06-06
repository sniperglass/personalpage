console.log('Hello World');

const name = 'John';
const age = '30';

console.log('Hi, my name is ' + name + ' and I am '
+ age);

console.log(`Hi, my name is ${name} and I am ${age}`);

const k = 'Hello World';

console.log(k.split(''));

//$("img").hide();

const todos = [

  {id: 1,
  text: 'Take out trash',
  isCompleted: true
},

{id: 2,
text: 'meet boss',
isCompleted: true
},

{id: 3,
text: 'Pick up chinese',
isCompleted: false
}

]

  for(let i = 0; i < 10; i++) {
   console.log(i);
}

let i = 0;

while(i < 10){
  console.log('While Loop Number: ${i}');
  i++;

}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
