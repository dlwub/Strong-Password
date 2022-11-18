function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let num_array = "0123456789".split('')
  let lower_case_array = "abcdefghijklmnopqrstuvwxyz".split('')
  let upper_case_array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let special_array = "!@#$%^&*()-+".split('')
  let numFlag = false, lowerFlag = false, upperFlag = false, specialFlag = false, toAdd = 0
  for(let i = 0; i < n; i++){
      if(num_array.includes(password[i])){
          numFlag = true
      }else if(lower_case_array.includes(password[i])){
          lowerFlag = true
      }else if(upper_case_array.includes(password[i])){
          upperFlag = true
      }else if(special_array.includes(password[i])){
          specialFlag = true
      }        
  }
  
  if(numFlag===false){
      toAdd +=1
      n +=1
  }
  if(lowerFlag===false){
      toAdd +=1
      n +=1
  }
  if(upperFlag===false){
      toAdd +=1
      n +=1
  }
  if(specialFlag===false){
      toAdd +=1
      n +=1
  }
  if(n < 6){
      toAdd += (6 - n)
  }
  return toAdd

}