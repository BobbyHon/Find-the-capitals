var capitals = function (word) {
	let answer = []
  for(let i = 0; i < word.length; i++){
    if (word.charCodeAt(i) <= 90){
      answer.push(i)
    }
  }
  return answer
};