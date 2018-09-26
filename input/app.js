const2 elem = document.createElement('h1');
elem.textContent = "Hello, World!";
document.body.appendClild(elem);

const submitButton = document.getElementById('submit');
submitButton.onclick = function(){
    console.log('you clicked me!');
    console.log(this);
    console.log(event);
};