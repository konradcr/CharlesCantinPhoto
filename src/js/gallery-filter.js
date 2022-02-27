// Script to filter pictures in gallery by category
// The CSS class hide is helpful to hide pictures from gallery

// Fetch all the filter buttons
let list = document.querySelectorAll('.filter');
// Fetch all the pictures in the gallery
let itemBox = document.querySelectorAll('.gallery-image');

// Loop over filters and apply them on gallery
for(let i = 0; i<list.length; i++){
    // Listen click on all filter buttons
    list[i].addEventListener('click', function(){
        // On click, remove 'active' class on any filter
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        // On click, add 'active' class on the filter selected
        this.classList.add('active');
        // Determine the filter associated to the button
        let dataFilter = this.getAttribute('data-filter');
        // Loop over all images
        for(let k = 0; k<itemBox.length; k++){
            // Remove 'active' and add 'hide' classes for all pictures
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            // If the 'data-item' property correspond to the filter, add 'active' and remove 'hide' classes
            if(itemBox[k].getAttribute('data-item') === dataFilter || dataFilter === "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}