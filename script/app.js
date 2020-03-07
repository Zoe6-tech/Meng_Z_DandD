(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');
		puzzlePieces=document.querySelectorAll('.puzzle-pieces img');
		gameBoard=document.querySelector('.puzzle-board');
        dropZones=document.querySelectorAll('.drop-zone');
        dropZonesImage=document.querySelectorAll('.drop-zone img');
    const pieceNames = ["topLeft","topRight","bottomLeft","bottomRight"];
		const puzzleWrap = document.getElementById('puzzleWrap');

    //场景对应图片
    let picArrLeft = {
        "0": ['topLeft0','topRight0','bottomLeft0','bottomRight0'],
        "1": ['topLeft1','topRight1','bottomLeft1','bottomRight1'],
        "2": ['topLeft2','topRight2','bottomLeft2','bottomRight2'],
        "3": ['topLeft3','topRight3','bottomLeft3','bottomRight3']
    };
    let picArrRight = {
        "0": ['','','',''],
        "1": ['','','',''],
        "2": ['','','',''],
        "3": ['','','',''],
    };
    let currentSence = 0;//current Sence

    const picD = ['top left', 'top right', 'bottom left', 'bottom right'];


    //press button
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
        // console.log(puzzleWrap.children.length);

        //empty the images=> drop zone and pizzle board
        const length = puzzleWrap.children.length;
        for (var i=0; i<(length-1); i++) {
            puzzleWrap.removeChild(puzzleWrap.children[1])
        }
        // console.log(dropZones);
				for (var j=0; j<4; j++) {
            if (dropZones[j].children.length != 0) {
                dropZones[j].removeChild(dropZones[j].children[0]);
            }
        }

				//pizzle pieces
        for (var a=0; a<4; a++) {
            if (picArrLeft[currentSence][a]) {
                var img2 = document.createElement('img');
                img2.src = `images/${picArrLeft[currentSence][a]}.jpg`;
                img2.alt = picD[a];
                img2.className = 'puzzle-image';
                img2.id = picArrLeft[currentSence][a];
                puzzleWrap.appendChild(img2);
                // console.log(img2)
                img2.addEventListener('dragstart',allowDrag);
            }
        }

        return
	}



    function allowDrag(event){
	    console.log('started draggin an image');
        // 设置拖动的格式和数据。使用事件对象的ID来表示数据
        event.dataTransfer.setData("text/plain",this.id)
        // console.log(event)
    }
	function allowDragOver(event){
	 	//取消事件的默认动作。
		event.preventDefault();
        console.log('dragged over a drop zone');
        // console.log(this)
    }


		function allowDrop(event){
	 	    //event.preventDefault();
	         console.log('dropped on a drop zone');

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

	             // bug one:
	             // Store corresponding image
	             dropZonesImage[currentSence][event.path[0].getAttribute('pos')] = currentImage;
	             // console.log(picArrRight)
	             // delete left part images
	             for (var a=0; a<4; a++) {
	                 if (picArrLeft[currentSence][a] == currentImage) {
	                     picArrLeft[currentSence][a] = '';
	                 }
	             }
	             // console.log(picArrLeft)
	             // console.log(picArrRight)
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
