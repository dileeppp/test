// let inpt = document.getElementById('search')
// let p = document.getElementById('para')

// // inpt.onkeyup = function() {
// //     console.log(inpt.value);
// // }

// // inpt.addEventListener("keyup", data)
// // function data() {
// //     let value = inpt.value
// //     p.innerText=value
// // }

// let submt = document.getElementsByTagName("button")[0]
// submt.addEventListener("click", data1)
// function data1() {
//     let value = inpt.value
//         p.innerText=value

// }

// // var x = document.getElementsByTagName("p")[0].style.color = "green"

// // var y = document.createElement("p")

// // y.innerHTML = "this is dileep kumar"

// // document.body.appendChild(y)

// var lov = document.createElement("p")

//  lov.innerText = "this is special one"

//  var sun = document.getElementById("second")
// //  console.log(second);
//  var arr = document.getElementById("first")
//      arr.insertBefore(lov,sun)
//      arr.style.backgroundColor = "yellow"
//      arr.style.border = "grey solid "

// var div = document.createElement("div")
// document.body.append(div)
// console.log(div)

// div.style.border = "green solid"
// div.style.width = ""
// div.style.height = "50px"
// div.style.backgroundColor = "lightblue"

// var gg = document.createElement("h2")
// gg.innerHTML = "This is New one"

// div.appendChild(gg)
// gg.style.display = "flex"
// gg.style.justifyContent = "center"
// gg.style.height = "100vh"
// gg.style.padding = "10px"

var inpt = document.getElementById("search");
var p = document.getElementById("para");
var ul = document.getElementsByTagName("ul")[0];
var submt = document.getElementsByTagName("button")[0];

submt.addEventListener("click", inside);

function inside() {
  let value = inpt.value;
  // p.innerText = value
  inpt.value = "";
  var p2 = document.createElement("li");
  var danger = document.createElement("button");
  
  danger.setAttribute("class", "btn btn-danger");
  danger.innerHTML = "x";

  var edit = document.createElement("button");
      edit.innerHTML = "E"

  p2.innerHTML = value;
  p2.append(danger);
  p2.append(edit)
  ul.append(p2);
  edit.addEventListener("click",data1)
function data1() {
    let val = p2.innerText
    inpt.value = val
}
danger.addEventListener("click",data2)
function data2(){
    p2.remove()
    // p2.value = ""
}
}







