const ascErr = new Error("This List stores nodes in ASC order your node value is invalid!");
const outRangeErr = new Error("Out of Range Error!");
const existErr = new Error("This Value is already added in the List!");
const notFoundErr = new Error("This node's value doesn't exist!");
const notIntErr = new Error("Position must be Integer!")

// pushMethod Test-cases Done..
// nodeExist Test-cases Done..
// popNode Test-cases Done..
// shiftNode Test-cases Done..
// removeNode Test-cases Done..

const lnkdLst = {
    nodes: [],
    pushNode: function (node) {
        const notEmptyCheck = (this.nodes.length !== 0);
        const existCheck = (this.nodeExist(node.val));
        const ascCheck = (this.nodes.length > 0 && this.nodes[this.nodes.length - 1].val > node.val);

        if (notEmptyCheck) {
            if(existCheck) {throw existErr;}
            if(ascCheck) {throw ascErr;}
        }
        this.nodes.push(node);
    },
    nodeExist: function (nodeVal) {
        for(let indx = 0; indx < this.nodes.length; indx++) {
            if(nodeVal === this.nodes[indx].val) {return true;}
        }
        return false;
    },
    insertNode: function (node, position) {
        const integerCheck = Number.isInteger(position);
        const outRangeCheck = (position > this.nodes.length || position < 0);
        const existCheck = this.nodeExist(node.val);
        const posZeroCheck = (position === 0 && this.nodes.length && this.nodes[0].val < node.val);
        const innerRange = (position > 0 && position < this.nodes.length) && 
        (this.nodes.length > 0 && (this.nodes[position - 1].val > node.val || this.nodes[position].val < node.val));
        const lastIndexCheck = (position === this.nodes.length && this.nodes.length > 0) &&
         (this.nodes[position - 1].val > node.val);
        
        if(!integerCheck) {throw notIntErr;}
        if(outRangeCheck) {throw outRangeErr;}
        if(existCheck) {throw existErr;}

        if(posZeroCheck || innerRange || lastIndexCheck) {throw ascErr;}

        this.nodes.splice(position, 0 , node);
    },
    removeNode: function (val) {
        if(!this.nodeExist(val)) {throw notFoundErr;}
        for(let indx = 0; indx < this.nodes.length; indx++) {
            if(this.nodes[indx].val === val) {
                this.nodes.splice(indx, 1);
                break;
            }
        }
    },
    popNode: function () {
        this.nodes.pop();
    },
    shiftNode: function () {
        this.nodes.shift();
    },
    displayNodes: function () {
        for(let indx = 0; indx < this.nodes.length; indx++) {
            console.log("NodeVal: " + this.nodes[indx].val);
        }
    }
}