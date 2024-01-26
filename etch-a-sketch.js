createDiv(10);
function createDiv (quantity) {
    //Sets up empty string lists 
    let stringParentElement = ""; 
    let stringChildElement = "";
    
    for(let i=1;i<=quantity; i++) {
    stringParentElement += `parentElement${i},`;
    stringChildElement += `childElement${i},`;
    //Removes last comma in string 

    new_parentElements = stringParentElement.slice(0,-1);
    new_childElements = stringChildElement.slice(0,-1);

    //Converts string to array 
    array_parentElements = new_parentElements.split(",");
    array_childElements = new_childElements.split(",");

    }
    const container = document.querySelector('#container'); 

    for (let i = 0; i<=array_parentElements.length-1; i++) {
        //console.log(array_elements[j]);
        let element = array_parentElements[i];
        
        element = document.createElement('div');
        element.classList.add('parentContainer');
        container.appendChild(element);
    }

    // selects all parentContainers and iterates through nodelist attaching child containers to each
    const parentContainer = document.querySelectorAll('.parentContainer'); 

    parentContainer.forEach((parentContainer) => {
        for (let i = 0; i<=array_childElements.length-1; i++) {
            let childElement = array_childElements[i]; 
            
            childElement = document.createElement('div');
            childElement.classList.add('childContainer');
            parentContainer.appendChild(childElement);
        }

    });

}   





const Container = document.querySelector('#container');

Container.addEventListener('mouseover', (event)=> {
    const target = event.target;
    // classList.value picks up class selector 'childContainer' 
    if (target.classList.value === 'childContainer') {
        event.target.style.background = 'black';
    }
});

