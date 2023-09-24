function openModal() {
 
    let modal = document.getElementById("myModal");

    modal.style.display = "block";
}

function closeModal() {

    let modal = document.getElementById("myModal");

    modal.style.display = "none";


    let input = document.getElementById("textInput");
    let text = input.value;
  
    console.log(text);
}
