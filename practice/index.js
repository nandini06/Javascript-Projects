const UItab1 = document.getElementById("tab1");
const UItab2 = document.getElementById("tab2");
const UItab3 = document.getElementById("tab3");
const UIcontent1 = document.getElementById("content1");
const UIcontent2 = document.getElementById("content2");
const UIcontent3 = document.getElementById("content3");

UItab2.addEventListener('click',(e) => {
   console.log(e.target);
   UItab1.className="tab deselected-tab";
   UItab2.className="tab selected-tab";
   UItab3.className="tab deselected-tab";
   UIcontent1.style.display="none";
   UIcontent3.style.display="none";

   e.preventDefault();
});