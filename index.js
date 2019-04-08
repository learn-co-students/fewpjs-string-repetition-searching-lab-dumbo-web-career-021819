// Code your solution here

function heyJude() {
    return "Na na na na na na na, na na na na, hey Jude.".repeat(16) 
}

function prohibitedLanguage(username) {
    let myRegEx = /candycorn|brusselssprouts/;
    return username.search(myRegEx);

}