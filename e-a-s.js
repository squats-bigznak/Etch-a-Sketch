

//call container
//create div of n columns in it
//create div of n rows in each column

const container = document.querySelector('#container');

function createGrid(dimensions){
    for (let i = 0; i < dimensions; i++){
        const ps = document.createElement('div');
        ps.classList.add('ps');
        ps.style.color = 'red';                                      
        ps.textContent = 'box';
        ps.style.cssText = 'color: red;';
        container.appendChild(ps);
        for (let j = 0; j < dimensions; j++){
            const pp = document.createElement('div');
            pp.classList.add('pp');
            pp.style.color = 'red';                                      
            pp.textContent = 'box';
            pp.style.cssText = 'color: red;';
            ps.appendChild(pp);
            
        }
    }

}   

createGrid(10);