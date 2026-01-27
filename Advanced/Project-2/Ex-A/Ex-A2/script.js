function Sequence(strtVal=0, endVal=0, stepVal=0) {
    var list = [];
    var strt = strtVal, end = endVal, step = stepVal;

    this.getSequence = function() {
        return list;
    }

    this.popSequenceItem = function() {
        if(list.length === 0) {throw Error("The List is Empty!")}
        return list.pop();
    }

    this.shiftSequenceItem = function() {
        if(list.length === 0) {throw Error("The List is Empty!")}
        return list.shift();
    }

    this.appendSequenceItem = function(val) {
        if(list.includes(val)) {throw Error("This value Exists!")}
        if(list.length && (list[list.length - 1] + step !== val)) {throw Error("This Breaks the Sequence!")}
        list.push(val);
    }

    this.preAppendSequenceItem = function(val) {
        if(list.includes(val)) {throw Error("This value Exists!")}
        if(list.length && (list[0] - step !== val)) {throw Error("This Breaks the Sequence!")}
        list.unshift(val);
    }

    const _generateSquence = function() {
        for(let indx = strt; indx <= end; indx += step) {
            list.push(indx);
        }
    }

    _generateSquence();
}