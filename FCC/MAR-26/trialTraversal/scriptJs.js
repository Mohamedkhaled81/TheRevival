const findCurr = function(map) {
    for(let row = 0; row < map.length; row++) {
        let col = map[row].indexOf('C');
        if (col !== -1) {
            return [row, col];
        } 
    }
}

/* const navigateTrail = function(map) {
    let currPos = findCurr(map);
    let stack = [[...currPos, '']];
    const directions = [[-1, 0],[1, 0],[0, 1],[0, -1]];
    const mapedDir = new Map([['-1,0', 'U'],['1,0','D'],['0,1', 'R'],['0,-1', 'L']]);
    let visitedSet = new Set();

    while (stack.length) {
        let [currRow, currCol, path] = stack.pop();
        const key = `${currRow},${currCol}`;

        if(visitedSet.has(key)) {
            continue;
        }

        visitedSet.add(key);

        if (map[currRow][currCol] === 'G') return path;

        for(const [dr, dc] of directions) {
            let nr = currRow + dr;
            let nc = currCol + dc;

            const validBound = (nr >= 0 && nr < map.length) && (nc >= 0 && nc < map[0].length);
            const notVisitedNeighbour = !visitedSet.has(`${nr},${nc}`);
            
            if(notVisitedNeighbour && validBound && (map[nr][nc] === 'T' || map[nr][nc] === 'G') ) {
                stack.push([nr, nc, path + mapedDir.get(`${dr},${dc}`)]);
            }
        }
    }
} */

const navigateTrail = function(map) {
    const directions = [[-1, 0],[1, 0],[0, 1],[0, -1]];
    const mapedDir = new Map([['-1,0', 'U'],['1,0','D'],['0,1', 'R'],['0,-1', 'L']]);
    const visitedSet = new Set()
    let path = '';

    let [currRow, currCol] = findCurr(map);
    while (map[currRow][currCol] !== 'G') {
        visitedSet.add(`${currRow},${currCol}`);
        for(const [dr, dc] of directions) {
            let nr = currRow + dr, nc = currCol + dc;
            const validBound = (nr >= 0 && nr < map.length) && (nc >= 0 && nc < map[0].length);
            if(validBound && !visitedSet.has(`${nr},${nc}`) && (map[nr][nc] === 'T' || map[nr][nc] === 'G')) {
                path += mapedDir.get(`${dr},${dc}`);
                currRow = nr, currCol = nc;
                break;
            }
        }
    }
    return path;
}


console.log(
  navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) === "RDDRDD", navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"])
);

/* console.log(
  navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) === "RRUUURR"
);

console.log(
  navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) === "DLDDRRRRD"
);

console.log(
  navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) === "RRRDDL"
);

console.log(
  navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) === "ULLLUUURRRRRRDDDR"
); */