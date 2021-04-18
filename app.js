function checkAnagram(word1, word2){
    let counter = 0;
    firstWord = word1.toLowerCase();
    secondWord = word2.toLowerCase();
    for(let i = 0; i < firstWord.length; i++){
        if(secondWord.includes(firstWord[i]) && (firstWord.length === secondWord.length)){
            counter++;
        }
    }
    if(firstWord.length === counter){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkAnagram('Mary', 'Army'));
console.log(checkAnagram('durmus', 'zeynep'));
console.log(checkAnagram('ArAbAm', 'maraba'));