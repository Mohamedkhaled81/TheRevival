var myObj = {
    [Symbol.replace]:function(str, chr){
        str = str.replace("m", chr);
        if(str.length > 15){
            return str.slice(0,16) + "..."
        }
        return str;
    }
}

console.log("mkmkmkmkmkmkmkmkmkkmkmkmkmkmkmkmkmkmkmkmkmkmkmkmkmkmk".replace(myObj, 'z'));

console.log("mkmkmkmkmkm".replace(myObj, "k"));
console.log(myObj[Symbol.replace]("mkmkmkmkmkm", "k"));

console.log("m k".replace(" ", "_"));