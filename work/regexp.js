// let re;
// re = /hello/;
// re = /hello/i;// i - case insensitive
// re = /hello/g;// g - Global search will check for all instances of hello
// re = /hello/ig;//both i and g are applied


// console.log(re);
// console.log(re.source);

//exec() - return result in an array if there is a match otherwise null this is case Sensitive we can use flags to get rid of that
// const result = re.exec('Hello world');

// console.log(result);

// const result1 = re.exec('hey world');

// console.log(result1);

// console.log(result.input);


// test() -  rteurns true or false if there is a match this is case Sensitive we can use flags to get rid of that

// const result = re.test('Hello world');

// console.log(result);

//match() - returns result as array or null

// const str= 'Hello there';
// const result = str.match(re);

// console.log(result);

// search() - returns the index of first occurence otherwise return -1

// const str = 'Hello there';
// const result = str.search(re);

// console.log(result);

// replace() - returns new string with some or all matches of a pattern 
// const str = 'hello there Hello hello minty';

// const newstr = str.replace(re,'hi');

// console.log(newstr);



//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////




let re;

// literal characters
re =/hello/;
re =/hello/i;

//Meta character symbols
re=/^h/i; // Must start with index 0
re=/ worLd$/i; // Must ends with index n-1
re=/^hello$/i; // Must start with index 0 and Must ends with index n-1
re=/^h.llo$/i; // MAtches any one character in place of .  (. acts like wildcard)
re=/h*llo/i; // MAtches any character 0  or more times in place of *  (* acts like wildcard)
re=/gra?e?y/i; // optional chahracter either a or e are present or might be absent it will work 
re=/gra?e?y\?/i; // escape characters here it escapes ?

// [] bracket - Character set

re=/gr[ae]y/; // Either an a or e must be present if both of them are absent its invalid
                 // Takes any any one character from within the bracket

re = /[GF]ray/;

re = /[^GF]ray/; // Match anything except a G and F
re = /^[GF]ray/; // Must start with G or F
re = /[A-Z]ray/; // Match any upper case A to Z
re = /[a-z]ray/; // Match any lower case a to z
re = /[A-Za-z]ray/; // Match any case a to z
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any digit multiple brakets are possible


//Braces {} - Quantifiers 
// Considers the alphabet before it 

re =/Hel{2}o/; // l will be considered over here // it must occur exactly {m} times

re =/Hel{2,4}o/; // l can occur between 2 to 4 inclusive

re =/Hel{2,}o/; // l should occur atleast 2


//Parentheses () - Grouping

re = /^([0-9]x){3}$/; // it will group the part within () and check if it is present 3 times



//Short hand Character classes
re= /\w/; //word character - alphanumeric or _
re= /\w+/; // + looks at one or more word character
re= /\W/; // Non word character
re= /\d/; // Match any digit
re= /\d+/; // + looks at one or more digits
re= /\D/; // Match any non digit
re= /\s/; // Match any whitespace char
re= /\S/; // Match any non whitespace char
re=/Hell\b/i;//Word boundary checks that particular word is present not as a substring


//Assertion

re = /x(?=y)/ ; //Match x only if its followed by y
re = /x(?!y)/ ; //Match x only if its NOT followed by y


//string to match
const str = 'yyxyyyy';




// log results
const result = re.exec(str);
console.log(result);

function reTest(re,str) {
   if(re.test(str)){
      console.log(`${str} matches ${re.source}`);
   } else {
      console.log(`${str} does not matches ${re.source}`);
   }
}

reTest(re,str);