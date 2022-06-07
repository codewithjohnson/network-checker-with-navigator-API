const body = document.querySelector('body');
const STATUS = document.querySelector('.status');

function online() {
    body.style.backgroundColor = `deepskyblue`;
    STATUS.innerHTML = `<span> online</span>`;

}

function offline() {
    body.style.backgroundColor = `lightgreen`;
    STATUS.innerHTML = `<span> offline</span>`;
}


if (navigator.onLine){
    online();
}else{
    offline();
}
