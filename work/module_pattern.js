// Module Pattern


//Blue Print

// (function () {
//    //private variables and functions sit here

//    return {
//       //public variables and functions sit here
//    }
// }) () ;

//STANDARD MODULE PATTERN

// const UICntrl = (function () {

//    const text= 'Hey';
//    const changeText = function () {
//       document.querySelector('h1').textContent=text;
//    }

//    return {
//       changeTextContent: function() {
//          changeText();

//          console.log(text);
//       }
//    }
   
// })();


// UICntrl.changeTextContent();
// UICntrl.changeText();
// console.log(UICntrl.text);


//REVEALING PATTERN map object literals to private function which you want to reveal

const ItemCtrl = (function () {

   let data = [] ;

   function add(item) {
      data.push(item);
      console.log('Item Added......');
   }
   
   function get(id) {

      return data.find(item => {
         return item.id === id;
      });
      
   }

   return {
      add: add,
      // get: get
   }
})();


ItemCtrl.add ({id: 1,name : 'A'});
ItemCtrl.add ({id: 55,name : 'gt'});
ItemCtrl.add ({id: 25,name : 'a'});
ItemCtrl.add ({id: 10,name : 'fs'});
ItemCtrl.add ({id: 8,name : 'e'});
ItemCtrl.add ({id: 7,name : 'f'});
ItemCtrl.add ({id: 4,name : 'D'});

console.log(ItemCtrl.get(25));