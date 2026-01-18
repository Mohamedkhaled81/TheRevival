function delay() {
    console.log("Start - Blocking")
    let ref = Date.now();
    while(Date.now() - ref < 5000){};
    console.log("End - Blocking")
}