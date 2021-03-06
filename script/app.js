(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');
		puzzlePieces=document.querySelectorAll('.puzzle-pieces img');
		gameBoard=document.querySelector('.puzzle-board');
        dropZones=document.querySelectorAll('.drop-zone');
    const pieceNames = ["topLeft","topRight","bottomLeft","bottomRight"];

    //match images

    let currentSence = 0;//current sence

    function changeImageSet(){
		//change all the image elemets on the page->draggable image sources
		//change the elements on the left to match the selected puzzle
        pieceNames.forEach((piece,index)=> {
      	//images, $=document.getElementById()
            puzzlePieces[index].src=`images/${piece + this.dataset.puzzleref}.jpg`;
            //id,works for drag and drop
            puzzlePieces[index].id=`${piece+this.dataset.puzzleref}`;
        });
		//and set the drop zone background image based on Puzzle the user selects
        gameBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleref}.jpg)`;
		//debugger;


    }


    function allowDrag(event){
	    console.log('started draggin an image');

        event.dataTransfer.setData("text/plain",this.id)
        // console.log(event)
    }
	function allowDragOver(event){

		event.preventDefault();
        console.log('dragged over a drop zone');
        // console.log(this)
    }


    function allowDrop(event){
	    //event.preventDefault();
        console.log('dropped on a drop zone');
			 // drop zone bug:
        //Determines if the parent tagname is div  &&  children.length=how many children the div element below has
        if (event.path[0].tagName == 'DIV' && event.path[0].children.length == 0) {
            //go and get the dragged elements's ID from the data transter object
        // Get the data, which is the id of the drop target
            let currentImage=event.dataTransfer.getData("text/plain");
            //add that image to whatever drop zone we are dropping our image on
            // console.log(event)
            event.target.appendChild(document.querySelector(`#${currentImage}`));
            // Clear the drag data cache (for all formats/types)
            event.dataTransfer.clearData();
        }
    }

	//add event handling here->how is the user going to use our app?
	//what triggers do we need?

	//click on the bottons to change the puzzle image we are working with
	puzzleButtons.forEach(button => button.addEventListener('click',changeImageSet));

	puzzlePieces.forEach(piece=>piece.addEventListener('dragstart',allowDrag));

	dropZones.forEach(zone=>{
        zone.addEventListener('dragover',allowDragOver);
        zone.addEventListener('drop',allowDrop);
    });
	//dropZones.forEach(zone=>zone.addEventListener('drag',allowOver));


	//call the function and pass in the first nav buttom as a reference
	//reserch call. apply and bind-> look at MDN
	changeImageSet.call(puzzleButtons[currentSence]);//default
})();
