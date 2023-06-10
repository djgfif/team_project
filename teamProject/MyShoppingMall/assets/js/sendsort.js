$(function() {
  $('#nav-drop-items a').on('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    var sortValue = $(this).attr('sort');
    console.log(sortValue);

    // Save sortValue to localStorage
    localStorage.setItem('sortValue', sortValue);

    // Redirect to product.html with the sortValue as a query parameter
    window.location.href = 'prouduct.html?sort=' + encodeURIComponent(sortValue);
  });
});
