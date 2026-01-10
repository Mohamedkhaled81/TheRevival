let text = prompt("Please Enter a text :D")

document.writeln("<h1>Heading</h1>")
document.writeln("<hr>")

for(let indx = 1; indx <= 6; indx++) {
    let openedHeaderTag = `<h${indx}>`;
    let closedHeaderTag = `</h${indx}>`;
    document.writeln(`${openedHeaderTag}${text}${closedHeaderTag}`)
}