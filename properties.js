const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting property names as keys
const keys = Object.keys(bottle);

// getting values as values
const values = Object.values(bottle);

// getting pair entries keyword
const pairs = Object.entries(bottle);
// seal korle r delete kortye dibe na value change kora jabye 
Object.seal(bottle);
// freeze korle r kicchu kortye dibe na 
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;
// delete korle delete as usal
delete bottle.isCleaned;
console.log(bottle);