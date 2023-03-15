
const gridContainer = document.querySelector('.gridContainer');

let dimensions = 50;
let ps = [];
const stretch = parseInt(960/dimensions);
gridContainer.style.gridTemplateColumns = (`repeat(${dimensions}, 1fr`);
gridContainer.style.gridTemplateRows = (`repeat(${dimensions}, 1fr`);
var colors = ['#000', '#111', '#222', '#333', '#444', '#555',
                '#666', '#777', '#888'];
let picker = 0

for (let i = 0; i < (dimensions*dimensions); i++){

        ps[i] = document.createElement('div');
        ps[i].classList.add('ps');
        ps[i].style.width = stretch+'px';
        ps[i].style.height = stretch+'px'; 
        ps[i].addEventListener('mouseover', function(event){
            
            
            
            event.target.style.backgroundColor = colors[picker%9];
            ++picker;
        })
        
        gridContainer.appendChild(ps[i]);
        
    }


// createGrid(10);
    



