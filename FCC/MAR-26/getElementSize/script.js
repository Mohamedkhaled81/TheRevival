const getElementSize = function(windowSize, elementVw, elementVh) {
    const windowDim = windowSize.split('x').map((str) => str.trim());
    const [winWidth, winHeight] = [Number(windowDim[0]), Number(windowDim[1])];
    return `${winWidth * (parseInt(elementVw)) / 100} x ${winHeight * (parseInt(elementVh)) / 100}` 
}
