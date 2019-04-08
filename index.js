// Code your solution here
//
//
// function heyJude(str,num){
//   return (new Array(num+1)).join(str);
// }


let heyJude = (verse) => {
  return verse.repeat(16)
}

let prohibitedLanguage = (username) => {
  let bannedWords = /candycorn|brusselssprouts/;

  return username.search(bannedWords)
}

// if ((username == "ilovecandycorn") || (username == "brusselssproutsarenumberone")){
//
// }

// if (username == "ilovecandycorn"){
//   return 5
// } else if (username == "brusselssproutsarenumberone") {
//   return 0
// } else {
//   return -1
// }
