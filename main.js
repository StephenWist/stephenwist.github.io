// hello whoever is looking here
// there's nothing good to see, i promise
function openTab(tabName, e) {
	var state =	document.getElementById(tabName).dataset.oc;
	// console.log('state: ', state);
	var element = document.getElementById(tabName);


	if (element.className === 'containerTab' && element.style.display === 'flex')
	{
		return closeTab(tabName);
	};
	// Handle opening and closing of tabs
	/*
	if (typeof state === undefined) {
		document.getElementById(tabName).getAttribute('data-oc') = 'open';
		console.log(document.getElementById(tabName).getAttribute('data-oc'));
	} else */
	if ( state === 'closed' ) {
		document.getElementById(tabName).dataset.oc = 'open';
	} 
	else if (state === 'open') {
		// prevent closing section when it is open and cliking on nav
		if (element.nodeName === 'A') {
			return
		}
		document.getElementById(tabName).dataset.oc = 'closed';
		return closeTab(tabName);
	}
	// console.log('state: ', state);
	// opening tabs
	if (tabName === 'bride-and-groom') {
		return document.getElementById(tabName).style.display = "grid";
	}
	else if (tabName === 'wedding-party') {
  		document.getElementById(tabName).style.display = "flex";
  		var x = document.getElementsByClassName('person');
  		for (var i=0; i<x.length; i++) {
  			x[i].style.display = 'block';
  		}	
  	} else if (document.getElementById(tabName).className === 'containerTab') {
  		console.log('in elif');
  		var elem = document.getElementById(tabName);
  		const tabs = ['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12'];
  		document.getElementById(tabName).style.display = "flex";
  		// close all other person tabs
  		for (var i=0; i<tabs.length; i++) {
  			if (tabs[i] !== elem.id) {
  				closeTab(tabs[i]);
  			}
  		}
  	}
  	else {
  		return	document.getElementById(tabName).style.display = "flex";
  	}
};

function closeTab(tabName) {
	document.getElementById(tabName).style.display = "none";
};


