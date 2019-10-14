const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach( item => {
    console.log(item);
})

// for of
// Iteration - arrays, strings
for (item of basket) {
    console.log( item);
}

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
    console.log(item)
}