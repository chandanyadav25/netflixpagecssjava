const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-item');

// Select tab content item
function selectItem(e) {
	removeBorder();
	removeshow();
   //add border to current tab
   this.classList.add('tab-border');
   // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => item.classlist.remove('tab-border'));

}

function removeshow() {
	tabContentItems.forEach(item => item.classlist.remove('show'));

}


// Lisen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem) );