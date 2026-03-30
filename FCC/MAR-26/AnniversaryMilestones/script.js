function getMilestone(years) {
  const hashMap = new Map([
      [0, "Newlyweds"],
      [1, "Paper"],
      [5, "Wood"],
      [10, "Tin"],
      [25, "Silver"],
      [40, "Ruby"],
      [50, "Gold"],
      [60, "Diamond"],
      [70, "Platinum"]
    ]);

  const reversedMap = Array.from(hashMap.entries()).reverse();

  for(let [key, val] of reversedMap) {
    if(years - key >= 0) {
      return val
    }
  }
}

console.log(getMilestone(0), "=> Expected: Newlyweds");
console.log(getMilestone(1), "=> Expected: Paper");
console.log(getMilestone(8), "=> Expected: Wood");
console.log(getMilestone(10), "=> Expected: Tin");
console.log(getMilestone(26), "=> Expected: Silver");
console.log(getMilestone(45), "=> Expected: Ruby");
console.log(getMilestone(50), "=> Expected: Gold");
console.log(getMilestone(64), "=> Expected: Diamond");
console.log(getMilestone(71), "=> Expected: Platinum");