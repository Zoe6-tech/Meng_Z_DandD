(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');

  function changeImageSet(){
		//change all the image elemets on the page->draggable image sources
		//and set the drop zone background
		debugger;
	}

	//add event handling here->how is the user going to use our app?
	//what triggers do we need?

	//click on the bottons to change the puzzle image we are working with
	puzzleButtons.forEach(button => button.addEventListener('click',changeImageSet));

})();
