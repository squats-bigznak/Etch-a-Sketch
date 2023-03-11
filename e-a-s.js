

//call container
//create div of n columns in it
//create div of n rows in each column

const container = document.querySelector('#container');

function createGrid(dimensions){
    const stretch = parseInt(960/dimensions)
    for (let i = 0; i < dimensions; i++){
        const ps = document.createElement('div');
        ps.classList.add('ps');
        container.appendChild(ps);
        for (let j = 0; j < dimensions; j++){
            const pp = document.createElement('div');
            pp.classList.add('pp');
            pp.style.width = stretch+'px';
            pp.style.height = stretch+'px';           
            ps.appendChild(pp);
            
        }
    }

}   

createGrid(100);