const sliceNickname = (nickname) => {
  const sliceNickname = [];
  for(let i = 0; i < nickname.length - 1; i += 1){
    let slice = nickname.substr(i, SPLIT_LENGTH);
    sliceNickname.push(slice);
  }
  return sliceNickname;
}

const getDuplicateNickname = (arr) => {
  return [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))]
}

function problem6(forms) {
  const sliceNicknameList = forms.reduce((acc, [_ , nickname]) => { 
    return [...acc, ...sliceNickname(nickname)];
  }, []);
  
  const duplicateNicknameList = getDuplicateNickname(sliceNicknameList);
  
  return forms
    .filter(([,nickname]) => isDuplicate(duplicateNicknameList, nickname))
    .map(([email,]) => email);
}

module.exports = problem6;
