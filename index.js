let count = 0;
function increment() {
    count++;  
    document.getElementById("count-el").innerText = count;
}

let saveEl = document.getElementById("save-el");
function save()
{
    saveEl.textContent += count + " - ";
    count = 0;
    document.getElementById("count-el").innerText = count;

}