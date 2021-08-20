//Storage Controller
const storageController = (function (){

   //Public methods
   return {
      storeItem: function (item) {
         let items;

         //Check if any items in local storage
         if(localStorage.getItem('items') === null){
            items = [];
            //Push new items
            items.push(item);
            //Set  LocalStorage
            localStorage.setItem('items', JSON.stringify(items));
         }
         else
         {
            //Get what is already in local storage
            items = JSON.parse(localStorage.getItem('items'));

            //Push the new item
            items.push(item);

            //Re set it to local storage
            localStorage.setItem('items', JSON.stringify(items));
         }
      },

      getItemsFromStorage: function () {
         let items;
         if(localStorage.getItem('items') === null){
            items = [];
         } else {
            items = JSON.parse(localStorage.getItem('items'));
            // console.log(items);
         }
         return items;
      },

      updateItemStorage : function(updateItem) {
         let items = JSON.parse(localStorage.getItem('items'));

         items.forEach(function (item,index) {
            if(updateItem.id === item.id) {
               items.splice(index, 1 ,updateItem);
            }
         });

         localStorage.setItem('items', JSON.stringify(items));
      },

      deleteItemFromLocalStorage : function(id) {
         let items = JSON.parse(localStorage.getItem('items'));

         items.forEach(function (item,index) {
            if(id === item.id) {
               items.splice(index, 1);
            }
         });

         localStorage.setItem('items', JSON.stringify(items));
      },

      clearAllFromStorage : function(){
         localStorage.removeItem('items');
      }

   }
})();


//Item  Controller

const itemController = (function () {
   const Item = function (id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
   }

   //Data structure / state
   const data = {
      // items: [
      //    // { id: 0, name: 'Steak', calories: 1200 },
      //    // { id: 1, name: 'cookie', calories: 400 },
      //    // { id: 2, name: 'egg', calories: 100 }
      // ],

      items: storageController.getItemsFromStorage(),
      currentItem: null,
      totalCalories: 0
   }


   // Public methods
   return {

      getItems: function () {
         return data.items;
      },
      addItem(name, calories) {
         let ID;

         //create id 
         if (data.items.length > 0) {
            ID = data.items[data.items.length - 1].id + 1;
         }
         else {
            ID = 0;
         }

         //Calories to number
         calories = parseInt(calories);

         //Create new items
         newItem = new Item(ID, name, calories);
         //Add to item array
         data.items.push(newItem);
         return newItem;
      },

      getItemById: function (id) {
         let found = null;
         data.items.forEach(function (item) {
            if (item.id === id)
               found = item;
         });

         return found;
      },

      updateItem: function (name, calories) {
         //Calories to number
         calories = parseInt(calories);

         let found = null;
         data.items.forEach(function (item) {
            if (item.id === data.currentItem.id) {
               item.name = name;
               item.calories = calories;
               found = item;
            }
         });
         return found;
      },

      setCurrentItem: function (item) {
         data.currentItem = item;
      },

      deleteItem : function (id) {
         //Get ids
         ids = data.items.map(function (item) {
            return item.id;
         });

         //get index
         const index = ids.indexOf(id);

         //Remove item
         data.items.splice(index, 1);
      },

      clearAllItems : function () {
         data.items =[];
      },

      getTotalCalories: function () {
         let total = 0;
         //Loop through total and get total
         data.items.forEach(function (item) {
            total += item.calories;
         });
         //Set data total calories to total
         data.totalCalories = total;

         return total;
      },

      getCurrentItem: function () {
         return data.currentItem;
      },

      logData: function () {
         return data;
      }
   }
})();

//UI Controller

const UIController = (function () {

   const UISelectors = {
      itemList: '#item-list',
      listItems: '#item-list li',
      addBtn: '.add-btn',
      updateBtn: '.update-btn',
      deleteBtn: '.delete-btn',
      backBtn: '.back-btn',
      itemName: '#item-name',
      itemCalories: '#item-calories',
      totalCalories: '.total-calories',
      clearBtn : '.clear-btn'
   }
   // Public methods
   return {
      populateItemsList: function (items) {
         let html = '';
         items.forEach(function (item) {
            html += `
            <li class="collection-item" id="item-${item.id}">
               <strong>${item.name} : </strong><em>${item.calories} Calories</em>
               <a href="#" class="secondary-content"><i class="edit-item fas fa-pencil-alt"></i>
               </a>
            </li>
            `;
         });

         //insert list getItems
         document.querySelector(UISelectors.itemList).innerHTML = html;

      },

      getItemInput: function () {
         return {
            name: document.querySelector(UISelectors.itemName).value,
            calories: document.querySelector(UISelectors.itemCalories).value
         }
      },

      addListItem: function (item) {
         //Show item list 
         document.querySelector(UISelectors.itemList).style.display = 'block';
         //Create li element
         const li = document.createElement('li');
         //add class 
         li.className = 'collection-item';
         li.id = `item-${item.id}`;
         //Add html 
         li.innerHTML = `
            <strong>${item.name} : </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fas fa-pencil-alt"></i>
            </a>
         `;
         //insert items
         document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
      },

      updateListItem: function (item) {
         let listItems = document.querySelectorAll(UISelectors.listItems);

         //Turn node list to array
         listItems = Array.from(listItems);

         listItems.forEach(function (listItem) {
            const itemId = listItem.getAttribute('id');

            if (itemId === `item-${item.id}`) {
               document.querySelector(`#${itemId}`).innerHTML = `
                  <strong>${item.name} : </strong><em>${item.calories} Calories</em>
                  <a href="#" class="secondary-content"><i class="edit-item fas fa-pencil-alt"></i>
                  </a>
               `;
            }
         });
      },

      deleteListItem: function (id) {
         const itemId = `#item-${id}`;
         const item = document.querySelector(itemId);
         item.remove();
      },

      removeItems: function () {
         const listItems = document.querySelectorAll(UISelectors.listItems);

         // console.log(listItems);
         //Turn node list into array
         const list = Array.from(listItems);

         // console.log('After.....');
         // console.log(list);

         list.forEach(function (item){
            item.remove();
         });
      },

      clearInput: function () {
         document.querySelector(UISelectors.itemName).value = '';
         document.querySelector(UISelectors.itemCalories).value = '';
      },

      addItemToForm: function () {
         document.querySelector(UISelectors.itemName).value = itemController.getCurrentItem().name;
         document.querySelector(UISelectors.itemCalories).value = itemController.getCurrentItem().calories;

         UIController.showEditState();
      },

      hideList: function () {
         document.querySelector(UISelectors.itemList).style.display = 'none';
      },

      showTotalCalories: function (totalCalories) {
         document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
      },

      clearEditState: function () {
         UIController.clearInput();
         document.querySelector(UISelectors.addBtn).style.display = 'inline';
         document.querySelector(UISelectors.updateBtn).style.display = 'none';
         document.querySelector(UISelectors.backBtn).style.display = 'none';
         document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      },

      showEditState: function () {
         document.querySelector(UISelectors.addBtn).style.display = 'none';
         document.querySelector(UISelectors.updateBtn).style.display = 'inline';
         document.querySelector(UISelectors.backBtn).style.display = 'inline';
         document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      },

      getSetectors: function () {
         return UISelectors;
      }
   }
})();

//App Controller

const App = (function (itemController,storageController,UIController) {
   //Load Event Listeners
   const loadEventListeners = function () {
      // Get UI Selectors
      const UISelectors = UIController.getSetectors();
      //Add Event Item
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
      //Disable Submit on enter
      document.addEventListener('keypress', function (e) {
         if (e.keyCode === 13 || e.key === 'enter') {
            e.preventDefault();
            return false;
         }
      });
      //Edit icon click event
      document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
      //Update item Event
      document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
      //delete item Event
      document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
      //back item Event
      document.querySelector(UISelectors.backBtn).addEventListener('click', function(e){

         UIController.clearEditState();
         e.preventDefault();
      });
      //clear all item Event
      document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
   }

   //Add item Submit
   const itemAddSubmit = function (e) {
      //Get form input from ui itemController
      const input = UIController.getItemInput();
      //Check for name and calories are filled
      if (input.name !== '' && input.calories !== '') {
         //Add item
         const newItem = itemController.addItem(input.name, input.calories);

         //Add item to the UI List
         UIController.addListItem(newItem);

         //Get total Calories
         const totalCalories = itemController.getTotalCalories();

         //Add totalCalories to the ui 
         UIController.showTotalCalories(totalCalories);

         //Store in LocalStorage
         storageController.storeItem(newItem);

         //Clear fields
         UIController.clearInput();
      }

      e.preventDefault();
   }
   //Edit btn
   const itemEditClick = function (e) {

      if (e.target.classList.contains('edit-item')) {
         //Get  the list item id
         const listId = e.target.parentNode.parentNode.id;
         // Break into a array
         const listIdArr = listId.split('-');
         //Get actual id
         const id = parseInt(listIdArr[1]);
         //Get Item 
         const itemToEdit = itemController.getItemById(id);
         //Set that current item 
         itemController.setCurrentItem(itemToEdit);
         //Add item to from
         UIController.addItemToForm();
      }

      e.preventDefault();
   }

   //Update and Submit
   const itemUpdateSubmit = function (e) {

      //get item input
      const input = UIController.getItemInput();

      //Update item
      const updateItem = itemController.updateItem(input.name, input.calories);

      //Update UI
      UIController.updateListItem(updateItem);

      //Get total Calories
      const totalCalories = itemController.getTotalCalories();

      //Add totalCalories to the ui 
      UIController.showTotalCalories(totalCalories);

      //Update local storage
      storageController.updateItemStorage(updateItem);

      //Clear edit State
      UIController.clearEditState();

      e.preventDefault();
   }
   //Delete item function
   const itemDeleteSubmit = function(e){
      //Get current item
      const currentItem = itemController.getCurrentItem();
      
      //Delete from data structure
      itemController.deleteItem(currentItem.id);

      //Delete from ui
      UIController.deleteListItem(currentItem.id);

      //Get total Calories
      const totalCalories = itemController.getTotalCalories();

      //Add totalCalories to the ui 
      UIController.showTotalCalories(totalCalories);

      //Delete from local storage
      storageController.deleteItemFromLocalStorage(currentItem.id);

      //Clear edit State
      UIController.clearEditState();

      e.preventDefault();
   }

   const clearAllItemsClick = function(e) {
      //Delete all items from data structure
      itemController.clearAllItems();

      //Get total Calories
      const totalCalories = itemController.getTotalCalories();

      //Add totalCalories to the ui 
      UIController.showTotalCalories(totalCalories);

      //Clear edit State
      UIController.clearEditState();

      //Remove all items from UI
      UIController.removeItems();

      //Clear From local storage
      storageController.clearAllFromStorage();

      //Hide List Item
      UIController.hideList();

      e.preventDefault();
   }

   // Public methods
   return {
      init: function () {
         //Set initial state
         UIController.clearEditState();

         //Fetch items from data structure
         const items = itemController.getItems();

         //Check if any items 
         if (items.length === 0) {
            UIController.hideList();
         }
         else {
            //Populate list with theses items
            UIController.populateItemsList(items);

            //Get total Calories
            const totalCalories = itemController.getTotalCalories();

            //Add totalCalories to the ui 
            UIController.showTotalCalories(totalCalories);
         }

         //Load Event Listeners
         loadEventListeners();
      }
   }

})(itemController,storageController,UIController);


App.init();