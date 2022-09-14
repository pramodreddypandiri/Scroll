// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

//adding date dynamically
const date = document.querySelector(".date");
//console.log(date);
let present = new Date();

let year =  present.getFullYear();
//console.log(year);
date.innerText = year;

const toggleBtn = document.querySelector('.nav-toggle');

const linksContainer = document.querySelector('.links-container')
 const links =  document.querySelector('.links');
// event listener for toggle button
toggleBtn.addEventListener('click',function () {
        //linksContainer.classList.toggle('show-links');
        // get height of links container
        
        const containerHeight = linksContainer.getBoundingClientRect().height;
        // get height of links
        //console.log(containerHeight);
        const linksHeight = links.getBoundingClientRect().height;
        //console.log(linksHeight);
        //console.log("click");
        if (containerHeight === 0){
            linksContainer.style.height = `${linksHeight}px`;
            //console.log(containerHeight);

        }
        else{
            linksContainer.style.height = 0;
        }


});