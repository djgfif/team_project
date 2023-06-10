window.addEventListener('load', () => {
    const grid = new Isotope('section', {
      // specify isotope option
      itemSelector: 'article',
      columnWidth: 'article',
      transitionDuration: '0.5s'
    });
    const btns = document.querySelectorAll('main ul li');
  
    // Manually set the sort value for testing
    const urlParams = new URLSearchParams(window.location.search);
    const sortValue = urlParams.get('sort') || null; // Default to null if no sort value found
  
    for (let e of btns) {
      const btnSortValue = e.querySelector('a').getAttribute('sort');
  
      if (btnSortValue === sortValue) {
        e.classList.add('on');
      } else {
        e.classList.remove('on');
      }
  
      e.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const sort = e.querySelector('a').getAttribute('sort');
        console.log(sort);
  
        // Perform actions with the sort value
        grid.arrange({
          filter: sort
        });
  
        for (let item of btns) {
          item.classList.remove('on');
        }
        e.classList.add('on'); // Change the background color of the selected button
      });
    }
  
    // Trigger click event on the button that corresponds to the sortValue
    const selectedButton = document.querySelector(`main ul li a[sort="${sortValue}"]`);
    if (selectedButton) {
      selectedButton.parentElement.click();
    }
  });
  
  
  

