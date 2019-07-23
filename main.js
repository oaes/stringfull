//String methods in js

var a = 'i am'
var b = 'AKASH'

//concating a string
var c = a.concat(' ', b)

console.log(a > b)

//for change small to uppercase
console.log(a.toUpperCase())

//for change small to lowercase
console.log(b.toLowerCase())

//for counting the string numberf
console.log(a.charAt(3))
console.log(b.charAt(2))

//we can justify which are start with,and it return us boolean value.
console.log(a.startsWith('i am'))

//we can justify which are end with,and it return us boolean value.
console.log(b.endsWith('AKASH'))

//for ignoring white spaces in output
console.log('    iamakash      '.trim())

//for replacing it into array
console.log(c.split(''));


//for counting length of any string
var str = 'oaes kuruni'
console.log(str.length);