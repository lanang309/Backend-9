//import fruit controllerny 
//melakukan destructing object

const { index, store } = require("./FruitController.js");

const main = () => {
    index();
    store("Melon");
};

main();