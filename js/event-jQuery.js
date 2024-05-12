// $( "#box" )
// .on( "mouseout", function() {
//     $( "#box" ).css('background-color', 'seagreen');
// } )
// .on( "mouseenter", function() {
//     $( "#box" ).css('background-color', 'red');
// } );

$( "#box" )
  .on( "mouseover", function() {
    $( "#box" ).css('background-color', 'seagreen');
  } )
  .on( "mouseout", function() {
    $( "#box" ).css('background-color', 'red');
  } );