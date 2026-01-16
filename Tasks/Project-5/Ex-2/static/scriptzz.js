addrObj = {
  street: "abc st.",
  buildingNum: 15,
  city: "xyz"
};

function showAddr(addrObj) {
    const todayDate = new Date().toLocaleDateString();
    console.log(
        addrObj["buildingNum"] + 
        " " + addrObj["street"] + 
        ", " + addrObj["city"] + 
        " city" + 
        " registered in " + 
        todayDate
    );
}

showAddr(addrObj);