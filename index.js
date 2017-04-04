function fearNotLetter(str) {
  var arr = str.split("")
  var awal = arr[0].charCodeAt()
  if(arr[0].charCodeAt() != 97){
    return undefined
  }else{
    for (var i = 1; i <= arr.length; i++) {
      if(arr[i].charCodeAt() == awal+1){
        awal = arr[i].charCodeAt()
      }else{
        return String.fromCharCode(awal+1)
      }
    }
  }
}

console.log(fearNotLetter("abce"))
