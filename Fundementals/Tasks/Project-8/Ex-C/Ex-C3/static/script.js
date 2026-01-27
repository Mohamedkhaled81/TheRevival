const imgCollection = document.images;
let lstImg = null, selectedImgId = null, textValue = null, childWindow = null;

function selectCard(imgId) {
    const img = imgCollection[imgId];
    if(lstImg !== null) {lstImg.classList.remove("selectedImg")}
    lstImg = img;
    img.classList.add("selectedImg");
    selectedImgId = imgId;
    console.log(selectedImgId);
}

function fetchText(value) {
    textValue = value;
    console.log(textValue);
}

function createChildWindow() {
    childWindow = window.open("./child.html",
        "",
        "width=700,height=700"
    )
}

function renderData() {
    childWindow.onload = function() {
        const imgCardContainer = childWindow.document.createElement("div");

        const clonedImg = imgCollection[selectedImgId].cloneNode(false);
        clonedImg.style.width = "500px";
        clonedImg.style.height = "500px";

        const textElem = childWindow.document.createElement("p");
        textElem.textContent = textValue;
        textElem.classList.add("childText");

        const buttonDiv = childWindow.document.createElement("div");
        buttonDiv.style.textAlign = "center";

        const killChildWindow = childWindow.document.createElement("input");
        killChildWindow.type = "button";
        killChildWindow.value = "Close Preview";
        killChildWindow.onclick = function() {
            childWindow.close();
            childWindow = null;
        }

        imgCardContainer.style.textAlign = "center";

        imgCardContainer.appendChild(clonedImg);
        buttonDiv.appendChild(killChildWindow);

        childWindow.document.body.appendChild(imgCardContainer);
        childWindow.document.body.appendChild(textElem);
        childWindow.document.body.appendChild(buttonDiv);
    }
}



function generateCard() {
    if(selectedImgId === null) {alert("You have not choosen the card image!");return;}
    if(textValue === null) {alert("You have not written a message!");return;}
    if(childWindow !== null) {alert("Cannot create more than one card!");return;}
    createChildWindow();
    renderData();
}