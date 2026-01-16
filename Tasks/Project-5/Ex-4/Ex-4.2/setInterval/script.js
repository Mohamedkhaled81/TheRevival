let childWindow, timer, flagDown;

function createChild() {
    childWindow = window.open("./child.html", "", "width=500,height=300");
}


function scrollDown() {
    const doc = childWindow.document.body;
    console.log(childWindow.scrollY, doc.scrollHeight);
    if (childWindow.scrollY + childWindow.innerHeight < doc.scrollHeight) {
        childWindow.scrollBy(0, 20);
        }else {
        stopScrolling();
    }
    }
   
   function stopScrolling() {
       clearInterval(timer);
       childWindow.close();
    }
    
    function runScript() {
        createChild();
        timer = setInterval(scrollDown, 90);
    }