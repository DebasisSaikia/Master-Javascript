console.log('JS DOM');

/**
 * getElementById
 * const title = document.getElementById('title');
console.log(title)
 */

/**
 * getElementsByTagName
 * const heading = document.getElementsByTagName('h1')
console.log(heading[0])
 */

/**
 *
 * querySelector
 * const query = document.querySelector('#title');
console.log(query)
 */

/**
 * querySelector methods
 * const parent = document.querySelector('.parent');
console.log(parent.childNodes)
 */


/**
 * const query = document.querySelector('.children');
console.log(query.nextElementSibling)
 */

/**=================================================================== */

// DOM MANIPULATION;

/**
 * const query = document.querySelector('#title');
query.innerHTML = 'Javascript is Awesome'
query.style.color = 'red'
query.style.fontSize = '4rem'
query.classList.add('title')
 */


// create element
const heading = document.createElement('h4')
heading.innerHTML = 'This is such an amazing thing';

const parent = document.querySelector('.parent');
parent.appendChild(heading)