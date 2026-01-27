function reversed() {
    let array = []
    /*
    array.reverse.call(arguments);
    return arguments;
    */

    
    array = Array.from(arguments);
    return array.reverse();
}

console.log(reversed(1, 2, 3, 4, 5));