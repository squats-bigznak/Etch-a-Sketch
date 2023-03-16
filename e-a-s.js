
const gridContainer = document.querySelector('.gridContainer');

function createGrid(dimensions){
    // let dimensions = 100;
    let pixel = [];
    //stretch fits the pixel size to a fraction of the total grid size
    const stretch = Math.round(parseInt(960/dimensions));
    //resizeable grid
    gridContainer.style.gridTemplateColumns = (`repeat(${dimensions}, 1fr`);
    gridContainer.style.gridTemplateRows = (`repeat(${dimensions}, 1fr`);
    //some hard-coded grayscale values
    let colors = ['#000', '#111', '#222', '#333', '#444', '#555',
                    '#666', '#777', '#888', '#999', '#AAA', '#BBB',
                    '#CCC', '#DDD', '#EEE', '#FFF'];
    //each pixel needs its own array for the color to
    //incrementally change per pixel
    let colorPerPixel = new Array(dimensions * dimensions).fill(0);

    for (let i = 0; i < (dimensions*dimensions); i++){
            
        pixel[i] = document.createElement('div');
        pixel[i].classList.add('pixel');
        pixel[i].style.width = stretch+'px';
        pixel[i].style.height = stretch+'px'; 
            //a listener for each pixel
            pixel[i].addEventListener('mouseover', function(event){       
                event.target.style.backgroundColor = colors[(colorPerPixel[i] += 1)];
                    })
                    gridContainer.appendChild(pixel[i]);       
        }
    }

function deleteGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
      }
}


var slider = document.getElementById("myRange");
var btn = document.getElementById("myBtn");   
     btn.addEventListener("click", function(){ deleteGrid()});
	 btn.addEventListener("click", function(){ createGrid(slider.value)});




createGrid(48);
    



