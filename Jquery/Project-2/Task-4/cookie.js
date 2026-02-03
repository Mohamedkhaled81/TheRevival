(function(){function getCookie(cookieName=null){if(cookieName===null){throw new Error("You have not entered a cookieName!")};const parsedCookies=parseCookies();if(!(cookieName in parsedCookies)){throw new Error("That cookie name doesn't exist!")}
return parsedCookies[cookieName]}
function setCookie(cookieName,cookieValue,expiryDate=null){if((typeof cookieName!=='string')){throw new Error("You should pass a string value for the cookieName!")}
if((cookieName.length===0)){throw new Error("You should not pass an empty string for a cookieName!")}
if(expiryDate===null){document.cookie=cookieName+"="+cookieValue+"; path=/";return}
if(!(expiryDate instanceof Date)||isNaN(expiryDate.getTime())){throw new TypeError("You should pass a date object!")}
let cookieAdded=encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieValue);document.cookie=cookieAdded+"; "+"expires="+expiryDate.toUTCString()+"; path=/"}
function deleteCookie(cookieName){if(!(hasCookie(cookieName))){throw new Error("You dont have the cookie: "+cookieName+" in your cookies!")}
document.cookie=encodeURIComponent(cookieName)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
console.log(document.cookie)}
function allCookieList(){return parseCookiesList()}
function hasCookie(cookieName){const parsedCookies=parseCookies();if(!(cookieName in parsedCookies)){return!1}
return!0}
function parseCookies(){let parsedCookies={};let splitCookies=document.cookie.split(';');for(let indx=0;indx<splitCookies.length;indx++){let trimmedCookie=splitCookies[indx].trim();let keyValuePair=trimmedCookie.split("=");parsedCookies[decodeURIComponent(keyValuePair[0])]=decodeURIComponent(keyValuePair[1])}
return parsedCookies}
function parseCookiesList(){let parsedCookiesList=[];let splitCookies=document.cookie.split(';');for(let indx=0;indx<splitCookies.length;indx++){let trimmedCookie=splitCookies[indx].trim();parsedCookiesList.push(decodeURIComponent(trimmedCookie))}
return parsedCookiesList}
function noConflict(){if(window.$c===this){window.$c=oldVariable}}
var oldVariable=window.$c;window.$c={get:getCookie,set:setCookie,delete:deleteCookie,all:allCookieList,has:hasCookie,noConflict}})()