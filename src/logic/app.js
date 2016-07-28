var phone, phone2, phone3;
var arr =[];
var letters;

// initialise fullPageJS
$(document).ready(function() {
    $('#wrapper').fullpage({
      afterLoad: function(index) {
        animatePhones(this.index());
        if (this.index() === 4) {
          animateCensor();
        }
      }
    });
    // applicable elements
    l = ['o','d','bl'];
    // for each element type
    for (var i=0; i<l.length; i++) {
      // find the number of elements on the page
      total = $(l[i]).length;
      // for each element on the page
      for (var j=0; j< total;j++) {
        a = $(l[i]);
        arr.push(a[j])
      }
    }
});