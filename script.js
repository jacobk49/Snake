document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')
  
    const width = 10
    let currentIndex = 0 //so first div in our grid
    let appleIndex = 0 //so first div in our grid
    let currentSnake = [2,1,0] 
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0
  
  
    //to start, and restart the game
    function startGame() {
      currentSnake.forEach(index => squares[index].classList.remove('snake'))
      squares[appleIndex].classList.remove('apple')
      clearInterval(interval)
      score = 0
      randomApple()
      direction = 1
      scoreDisplay.innerText = score
      intervalTime = 1000
      currentSnake = [2,1,0]
      currentIndex = 0
      currentSnake.forEach(index => squares[index].classList.add('snake'))
      interval = setInterval(moveOutcomes, intervalTime)
    }
  
  
    //function that deals with the move outcomes of the Snake
    function moveOutcomes() {
  
      //deals with snake hitting border and snake hitting self
      if (
        (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
        (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
        (currentSnake[0] - width < 0 && direction === -width) ||  //if snake hits the top
        squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
      ) {
        return clearInterval(interval) //this will clear the interval if any of the above happen
      }

  
    //assign functions to keycodes
    function control(e) {
      squares[currentIndex].classList.remove('snake')
  
      if(e.keyCode === 39) {
        direction = 1 //if we press the right arrow on our keyboard, the snake will go right one
      } else if (e.keyCode === 38) {
        direction = -width // if we press the up arrow, the snake will go back ten divs, appearing to go up
      } else if (e.keyCode === 37) {
        direction = -1 // if we press left, the snake will go left one div
      } else if (e.keyCode === 40) {
        direction = +width //if we press down, the snake head will instantly appear in the div ten divs from where you are now
      }
    }
  
    document.addEventListener('keyup', control)
  })
  