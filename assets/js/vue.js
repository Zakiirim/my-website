function diff_years() 
 {
    var dt1 = new Date();
    var dt2 = new Date(1996, 11, 7);
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
   
 }

 $('#myage').text(diff_years());