(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');
				puzzlePieces=document.querySelectorAll('.puzzle-pieces img');
        gameBoard=document.querySelector('.puzzle-board');
  const pieceNames = ["topLeft","topRight","bottomLeft","bottomRight"];

  function changeImageSet(){
		//change all the image elemets on the page->draggable image sources
		 //change the elements on the left to match the selected puzzle
      pieceNames.forEach((piece,index)=> puzzlePieces[index].src=`images/${piece + this.dataset.puzzleref}.jpg`)

		//and set the drop zone background image based on Puzzle the user selects
     gameBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}

	//add event handling here->how is the user going to use our app?
	//what triggers do we need?

	//click on the bottons to change the puzzle image we are working with
	puzzleButtons.forEach(button => button.addEventListener('click',changeImageSet));

	//call the function and pass in the first nav buttom as a reference
	//reserch call. apply and bind-> look at MDN
	changeImageSet.call(puzzleButtons[1]);//default
})();
