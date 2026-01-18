let childWindow, mssg="Hello User!";

function createChild() {
    const windowFeatures = "width=300,height=200"
    childWindow = window.open(
        "./child.html",
        "",
        windowFeatures
    );
}

function getGreetingElem() {
    let greetElem = childWindow.document.getElementById("greet");
    return greetElem;
}

function runScript() {
    createChild();

    // when adding a delay custom function it doesnt work..
    childWindow.onload = function dispMssg() {
        let greetElem = getGreetingElem();
        let tempChar = "";
        for(let indx = 0; indx < mssg.length; indx++) {
            setTimeout(() => {
                console.log(mssg[indx])
                tempChar = mssg[indx];
                greetElem.textContent += tempChar;
            }, 500 * indx)
        }
    }
}
runScript();
