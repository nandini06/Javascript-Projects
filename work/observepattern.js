function EventObserve() {
   this.observers = [];

}

EventObserve.prototype = {
   subscribe : function (fn) {
      this.observers.push(fn);
      console.log(`Subscribed to ${fn.name}`);
   },
   unsubscribe : function (fn) {
      this.observers = this.observers.filter(function (item) {
         if(item !== fn) {
            return item;
         }        
      });
      console.log(`You are noe unsubscribe from ${fn.name}`);
   },
   fire : function () {
      this.observers.forEach((item) => {
         item.call();
      });
   }
}

const click = new EventObserve();

//Event listeners

document.querySelector('.sub-ms').addEventListener('click',function () {
   click.subscribe(getCurrMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click',function () {
   click.unsubscribe(getCurrMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click',function () {
   click.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-s').addEventListener('click',function () {
   click.unsubscribe(getCurrSeconds);
});
document.querySelector('.fire').addEventListener('click',function () {
   click.fire();
});

//Click Handler

const getCurrMilliseconds = function () {
   console.log(`Current Miliseconds : ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function () {
   console.log(`Current Seconds : ${new Date().getSeconds()}`);
}