module.exports = {};

module.exports.sum = function sum(a,b){
    return a+b;
}


const englishCode = "en-US";
const spanishCode = "es-ES";
const mandarinCode = "關於-zh"
module.exports.getAboutUsLink = function getAboutUsLink(language){
    switch(language.toLowerCase()){
        case englishCode.toLowerCase():
            return '/about-us';
        case spanishCode.toLowerCase():
            return 'acerca-de';
        case mandarinCode.toLowerCase():
            return 'about-zh';
    }
}
