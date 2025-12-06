const image_element=document.getElementById("school")
console.log(image_element)

let state = 1;
image_element.addEventListener("click",()=> {
    if(state == 1) {
        image_element.src="./school1.jpg"
        state = 2
    }
    else {
        image_element.src="./SKR.png"
        state = 1
    }
})