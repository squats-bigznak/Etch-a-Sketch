
const gridContainer = document.querySelector('.gridContainer');

let dimensions = 100;
let ps = [];
const stretch = parseInt(960/dimensions);
gridContainer.style.gridTemplateColumns = (`repeat(${dimensions}, 1fr`);
gridContainer.style.gridTemplateRows = (`repeat(${dimensions}, 1fr`);
let colors = ['#000', '#111', '#222', '#333', '#444', '#555',
                '#666', '#777', '#888', '#999', '#AAA', '#BBB',
                '#CCC', '#DDD', '#EEE', '#FFF'];
let picker = new Array(dimensions * dimensions).fill(0);



for (let i = 0; i < (dimensions*dimensions); i++){
        
        ps[i] = document.createElement('div');
        ps[i].classList.add('ps');
        ps[i].style.width = stretch+'px';
        ps[i].style.height = stretch+'px'; 
        ps[i].addEventListener('mouseover', function(event){
             
            event.target.style.backgroundColor = colors[(picker[i] += 1)%16];
            // ++picker;
        })
        // ps[i].addEventListener('mouseenter', function(event){
            
        //     event.target.style.backgroundColor = colors[0];
        //     // ++picker;
        // })
        
        gridContainer.appendChild(ps[i]);
        
    }


// createGrid(10);
    



