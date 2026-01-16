let childWindow, timer;
let mveVer = 5, mveHorz = 5;
let flgBottom = false;

function createChild() {
    const windowFeatures= "width=320,height=200";
    childWindow = window.open(
        "./child.html",
        "",
        windowFeatures
    );
}

function moveWindow() {
    if(childWindow.outerHeight === screen.height - childWindow.screenY) {
        flgBottom = true;
    }else if(childWindow.screenX === 0){
        flgBottom = false;
    }
    childWindow.moveBy(!flgBottom ? mveHorz : mveHorz * -1, !flgBottom ? mveVer : mveVer * -1);
    childWindow.focus();
    
}

function stopWindow() {
    clearInterval(timer);
}

function runScript() {
    console.log(window.screenLeft, window.screenTop);
    createChild();
    timer = setInterval(moveWindow, 60);
}


runScript();
