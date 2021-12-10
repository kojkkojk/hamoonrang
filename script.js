var list = document.querySelector("#lists");
function showing(arr) {
   let tag = `<div class="imgBoxs">`;
   for (let i = 0; i < arr.length; i++) {
      tag = tag + `
      <div class="imgBox">
         <img src="https://kojkkojk.github.io/hamoonrang/dccon/images/${arr[i].name}" width="100px" height="100px"/>
         <span>${arr[i].keywords}</span>
      </div>`
   }
   tag = tag + `</div>`;
   return tag
};
function acc() { list.innerHTML = showing(dcConsData) };
var dcConsData = [
   { name: "mollu.jpg", keywords: ["몰루"], tags: ["몰?루"] },
   { name: "화랑몰루.jpg", keywords: ["화랑몰루"], tags: ["몰?루"] },
   { name: "주톱호랑이2.gif", keywords: ["댄스호랑2"], tags: ["댄스"] },
];
acc();