function imgSlider(params, aka, name) {
   document.querySelector(".champs").src = params
   document.querySelector(".textBox").innerHTML = `
         <h2>${aka}<br/><span>${name}</span></h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quis iusto recusandae corporis enim tempore facere quo harum, adipisci aut ipsum, inventore quibusdam laboriosam, minus est eveniet tempora! Excepturi repudiandae non commodi consequatur perspiciatis laudantium, unde impedit reiciendis quos accusamus vel veniam esse est illo at minus minima ab quis!</p>
         <a href="#">Learn More</a>
         `
      }
function changeColor(color) {
   let circles = document.querySelector(".circle");
   circles.style.background = color
}