const PageState = function () {
   let currentState = new homeState(this);

   this.init = function () {
      this.change(new homeState);
   }

   this.change = function (state) {
      currentState = state;
   }
};

//Home State

const homeState = function (page) {
   document.querySelector('#heading').textContent = null;
   document.querySelector('#content').innerHTML = `
   <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
   `;
}

//About State
const aboutState = function (page) {
   document.querySelector('#heading').textContent = 'About Us';
   document.querySelector('#content').innerHTML = `
      <p>This is the about state</p>
   `;
};


//Contact State
const contactState = function (page) {
   document.querySelector('#heading').textContent = 'About Us';
   document.querySelector('#content').innerHTML = `
   <form class="row g-3">
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Email</label>
     <input type="email" class="form-control" id="inputEmail4">
   </div>
   <div class="col-md-6">
     <label for="inputPassword4" class="form-label">Password</label>
     <input type="password" class="form-control" id="inputPassword4">
   </div>
   <div class="col-12">
     <label for="inputAddress" class="form-label">Address</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
   </div>
   <div class="col-12">
     <label for="inputAddress2" class="form-label">Address 2</label>
     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
   </div>
   <div class="col-md-6">
     <label for="inputCity" class="form-label">City</label>
     <input type="text" class="form-control" id="inputCity">
   </div>
   <div class="col-md-4">
     <label for="inputState" class="form-label">State</label>
     <select id="inputState" class="form-select">
       <option selected>Choose...</option>
       <option>...</option>
     </select>
   </div>
   <div class="col-md-2">
     <label for="inputZip" class="form-label">Zip</label>
     <input type="text" class="form-control" id="inputZip">
   </div>
   <div class="col-12">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" id="gridCheck">
       <label class="form-check-label" for="gridCheck">
         Check me out
       </label>
     </div>
   </div>
   <div class="col-12">
     <button type="submit" class="btn btn-primary">Sign in</button>
   </div>
 </form>
   `;
};

// Intatiate the page State

const page = new PageState();


//init the first page
page.init();


//UI variables

const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

//Event Listeners

home.addEventListener('click',(e)=>{
   page.change(new homeState());
   e.preventDefault();
})
about.addEventListener('click',(e)=>{
   page.change(new aboutState());
   e.preventDefault();
})
contact.addEventListener('click',(e)=>{
   page.change(new contactState());
   e.preventDefault();
})

