function reverseWords(str){
  
    //first we split string to convert to array
    //use reverse - to reverse order
    //then we join them 
      
    return str.split(' ').reverse().join(' ')
  }
  
  console.log(reverseWords ('hello world!'))
  console.log( reverseWords (`A dog named Jax.`))