// Ignore this helper function
var next_one = 'x';
function getXorO() {
  if (next_one === 'x') {
    next_one = 'o';
    return 'x';
  } else {
    next_one = 'x';
    return 'o';
  }
}

// Fix this jquery!
// Right now, when you click, ALL the boxes change!

// 1. Make it so only the one you click changes.
// I think our last coder said something about using
// "this" with jQuery...
$('.spot').click(function() {
  $('.spot').html(getXorO());
});

// 2. Make it so clicking only changes empty squares
