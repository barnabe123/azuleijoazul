/*console.log(Window);

alert(1);*/

//Selection

//Single element selector
/*const form = document.getElementById('my-form');

console.log(form)*/

console.log(document.getElementById('my-form')); //Older

console.log(document.querySelector('#my-form')); //Newest //We can select anything
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); //Bearing in mind that it's a single selector, even if there's more than one h1 it will take just the first one

//Multiple element selector
//console.log(document.getElementsByClassName('item')); //Old, it works only with classes and you can't use arrays...Also, if you need you can put Tag instead class
console.log(document.querySelectorAll('.item'))

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

/*Let's look at manupulationg the DOM or changing things and when
I say DOM I just mean that the user interface here*/

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Rodrigo';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//Let's take a lookt at events now
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
/*
btn.addEventListener('mouseover', (e) => {
    //e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/

btn.addEventListener('mouseout', (e) => {
    //e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

//For another events you can look at mdn documentation