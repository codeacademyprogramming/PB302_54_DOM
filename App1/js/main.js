
let ul = document.querySelector("ul")
nodeList = document.querySelectorAll("ul")
nodeList = document.querySelectorAll(".list-group")
nodeList = document.querySelector("#list1")


elemList = document.getElementsByTagName("ul")
elemList = document.getElementsByClassName("list-group")
ul = document.getElementById("list1");


let li = document.querySelector("#list2 li")

let ulList = document.getElementsByTagName("ul");
li = ulList[1].children[0];


ul = document.getElementById("list2");
li = ul.children[0]

li = document.getElementById("list2").firstElementChild;
li = document.getElementById("list2").children[0];

console.log(li)
console.log(li.nextElementSibling);

li = document.getElementById("list2").children[3];
console.log(li)
console.log(li.parentElement.children[0])
li.parentElement.children[0].style.color="yellow"


li = document.getElementById("list1").children[3]

let firstSbl = getFirstSibling(li);
console.log(firstSbl)

function getFirstSibling(elem){
    if(elem.previousElementSibling==null){
        return elem;
    }
    return getFirstSibling(elem.previousElementSibling)
}

li.style.color="red"




let listItems1 = document.querySelectorAll("li");
console.log(listItems1)

let listItems2 = document.getElementsByTagName("li");
console.log(listItems2)

alert();
// document.querySelector("li").remove();
document.getElementById("list1").appendChild(document.createElement("li"))

console.log(listItems1)
console.log(listItems2)






