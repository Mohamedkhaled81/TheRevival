const dispCourseInfo = function(optionObj) {
    let defaultObj = {
        courseName: "Es6",
        courseDuration: "3-Days",
        courseOwner: "JavaScript"
    }

    let validParamters = Object.keys(optionObj)
            .every(property => Object.keys(defaultObj).includes(property));
    
    if(!validParamters) {
        throw new Error("You Passed Wrong Paramters!");
    }

    let courseObj = {...defaultObj, ...optionObj};
    console.log(`CourseName: ${courseObj.courseName}\nCourseDuration: ${courseObj.courseDuration}\nCourseOwner: ${courseObj.courseOwner}`);
}

dispCourseInfo({});