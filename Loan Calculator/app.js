document.getElementById('loan-form').addEventListener('submit',function(e){
   //Hide results
   document.querySelector('#result').style.display = 'none';

   //Show Loader
   document.querySelector('.loading').style.display = 'block';
   setTimeout(calculateResults,2000);

   e.preventDefault();
});


function calculateResults(){
   console.log('Calculating....');

   const UIamount = document.getElementById('amount');
   const UIinterest = document.getElementById('interest');
   const UIyear = document.getElementById('year');
   const UImonthlyPayement = document.getElementById('m');
   const UItotalPayment = document.getElementById('t');
   const UItotalInterest = document.getElementById('total-interest');

   // console.log(UIamount);
   // console.log(UIinterest);
   // console.log(UIyear);
   // console.log(UImonthlyPayement);
   // console.log(UItotalPayment);
   // console.log(UItotalInterest);
   


   const principal = parseFloat(UIamount.value);
   const calculatedInterest = parseFloat(UIinterest.value) /100 /12;
   const calculatedPayements = parseFloat(UIyear.value) *12;

   // Montly Payements

   const x = Math.pow(1+ calculatedInterest , calculatedPayements);
   const monthly = (principal*x*calculatedInterest)/(x-1);

   if(isFinite(monthly))
   {
      UImonthlyPayement.value = monthly.toFixed(2);
      UItotalPayment.value = (monthly*calculatedPayements).toFixed(2);
      UItotalInterest.value = ((monthly*calculatedPayements)-principal).toFixed(2);
      //Show Results
      document.querySelector('#result').style.display = 'block';
      //Hide Load
      document.querySelector('.loading').style.display = 'none';
   }
   else
   {
      showError('Please check your numbers');
   }

}

function showError(error){
   //Hide Results
   document.querySelector('#result').style.display = 'none';
   //Hide Load
   document.querySelector('.loading').style.display = 'none';
   //Create a div
   const errorDiv = document.createElement('div');
   //Get elements
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');
   //Add Class
   errorDiv.className = 'alert alert-danger';
   //Create text node and append to div
   errorDiv.appendChild(document.createTextNode(error));
   //Insert error before heading
   card.insertBefore(errorDiv,heading);
   //Clear error after 3s
   setTimeout(clearError,3000);
}

function clearError(){
   document.querySelector('.alert').remove();
}