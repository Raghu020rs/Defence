const str1 = "Raghu";
const str2 = "Raghu chauhan";
const str3 = `Strike is coming soon`;

console.log(str1,str2,str3);
//why backticks are used
const multiLineString = `This is my first line
This is my second line
This is my third line`;

const str11 = "Raghu";
console.log(str11.length);
console.log(multiLineString.length);
//Space is a character.
//String is immutable
const str12 = "Raghu Chauhan";
console.log(str12[0]); 
// We cant change the character at index 0

// str12[0] = "B"; //This will not work
const a = str11.toUpperCase();
console.log(a);


const str = "Raghu Chauhan";
console.log(str.indexOf(`cod`)); //-1 if not found
console.log(str.indexOf(`h`));  //1st occurrence

// Date 
const now = new Date();
console.log(now);

console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth()+1); //Month is zero based
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

//year month date hours minutes seconds milliseconds
const now_1 = new Date(2025,8,20,10,33,30,0);


console.log(now_1.toString());
const now_2 = Date.now();
console.log(now_2); //gives time in milliseconds from 1 Jan 1970

const date_3 = new Date(now_2);
console.log(date_3.toString());
//converted milliseconds to date object
//UTC time
console.log(now.toUTCString());
console.log(now.toISOString());
//is it univeral in all timezones
