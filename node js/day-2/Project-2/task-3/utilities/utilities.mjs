import { URLSearchParams } from "node:url";
import fs from "node:fs/promises";

export const parseHtmlTemp = function (obj, htmlContent) {
    for(const key in obj) {
        htmlContent = htmlContent.replace(`{{%${key}%}}`, obj[key]);
    }
    return htmlContent;
}

export const storeData = async function(obj, storagePath) {
    let fileContext = await fs.readFile(storagePath, 'utf-8');
    if(fileContext === '') {
        fileContext = [];
    }else {
        fileContext = JSON.parse(fileContext);
    }
    fileContext.push(obj);
    await fs.writeFile(storagePath, JSON.stringify(fileContext, null, 2));
}

export const parseUserData = function(reqBody) {
    const parsedBody = new URLSearchParams(reqBody);
    return {
        name: parsedBody.get('name'),
        email: parsedBody.get('email'),
        mobile: parsedBody.get('mobile'),
        address: parsedBody.get('address')
    };
}
