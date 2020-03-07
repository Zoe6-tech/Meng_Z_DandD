# Puzzle Game

## Prerequisites
Need [Python3](https://www.python.org/) to build.

## Description
Puzzle game is a unique gaming genre that focuses on solving puzzles. It tests the player’s problem-solving skills that include pattern recognition, word completion, sequence solving, and logic.
This games are simple to play, only requiring mouse to pointing and clicking to move and select puzzle pieces on the puzzle boards, drag and then drop on the drop zone.
Once user done the current game or wants to start a new puzzle game, they can click the buttons under the drop zone to switch to a new game.

### Drag and drop function
the interaction of the game is mainly realized by dragging and dropping function to achieve the puzzle,
the implement of dragging and dropping are mainly binding of allowDrag, allowDrop, allowDragOver event.



### Drop Zone bug
**Only one piece in one drop zone at a time.**<br/>
User only can drag and drop one puzzle piece into a drop zone, otherwise is not allowed. This part can be defined in the allowDrop event.
If user select a new puzzle piece and drop it on an occupied drop zone, the action should be cancelled.
1. puzzle board still keep the original puzzle pieces    
2. new puzzle that user selected will automatically back to the puzzle board(not disappear)
3. Only **if** the drop zone is empty (==0) , puzzle pieces could be drop onto it


### Reset bug
**Clear all the pieces on the drop zone area**<br/>
All the pieces on the drop zone should mush removed after user click the image button.
Add more detail into the changeImageSet() function
1. All child elements <image>  in the 4 drop zones should be clear(if has)

## Author
Zhu Meng

## License
This project is licensed under the MIT[MIT]
([MIT](https://choosealicense.com/licenses/mit/)) license
