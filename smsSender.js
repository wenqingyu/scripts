var request = require('request');

var base64 = require('base-64');

// var phoneList = require('./testPhone.js');
var phoneList = require('./phone.js');

var TinyURL = require('tinyurl');

// googl.setKey('AIzaSyDGa13NoMQuVH8WJSzfB4dnaLzHO5ho9BE');
// googl.getKey();


var main = async () => {

    console.log(phoneList)

    for(let i = 0; i < phoneList.length; i ++) {

        // 范围
        if(i < 1000 && i > 2000){
            continue;
        }

        let phone = phoneList[i];
        console.log('--', i, '--');
        // Generate url
        let contentURL = await urlEngine(phone);

        // Shortner url
        contentURL = await shorten(contentURL);

        // Send smsByTemplate
        let result = await sendSMS(phone, contentURL);

    }


}









var sendSMS = async (phone, uri) => {

    var requestData = {
        templateid: "2",
        tel: phone,
        message: uri
    }

    // console.log(requestData);

    return new Promise((resolve, reject) => {
        request({
            url: 'http://staging-api.chinacloudapp.cn/api/smsByTemplate',
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            // body: JSON.stringify(requestData)
            body: requestData
        }, (error, response, body) => {
            if (error) reject(error)
            else {
                console.log(requestData)
                resolve(body)
            }
        });
    })


}



var urlEngine = async (phone) => {
    var phone = await base64.encode(phone);
    // Production
    var base = "http://production.ye-dian.com/u/?p=";

    // Staging
    // var base = "http://yddev.ye-dian.com/u/?p=";
    var url = base + phone;
    return url;

}



var shorten = async (contentURL, cb) => {

    return new Promise((resolve, reject) => {
        TinyURL.shorten(contentURL, (res) => {
            // if (null) reject(res)
            // else resolve(res)
            resolve(res);

        });
    });

}





main();