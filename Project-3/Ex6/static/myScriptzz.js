let rowNum = Number(prompt("Enter the number of rows.. :D"));

function drawTriangle(rows) {
    for(let i = 0;i < rows;i++){
        let tempStr = "";
        for(let j = 0;j < i + 1;j++){
            tempStr += "* ";
        }
        console.log(tempStr);
    }
}

drawTriangle(rowNum);