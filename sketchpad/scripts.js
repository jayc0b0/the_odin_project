$(document).ready(function() {
    // Makes 16x16 grid
    newGrid(16);

    // Get new grid size on button click
    $('#newgrid').click(function() {
        var num = getNum();
        newGrid(num);
    });

    // Change color on mouseover
    $('.cell').mouseenter(function() {
        $(this).removeClass('.cell');
        $(this).addClass('fill');
    });

});

$(document).on('mouseenter', '.cell', function() {

    // Change color on mouseover
    $('.cell').mouseenter(function() {
        $(this).removeClass('.cell');
        $(this).addClass('fill');
    });

});

// Used to make new grids
var newGrid = function(num) {
    // Empty parent div
    $('#divbox').empty();
    
    // Make num divrows
    var rows = [];
    for(var i = 0; i < num; i++) {
        rows.push('<div class="divrow"></div>');
    }
    $('#divbox').append(rows.join('\n'));
    
    // Fill all rows with number of divs
    var cells = [];
    for(var j = 0; j < num; j++) {
        cells.push('<div class="cell"></div>');
    }
    $('.divrow').append(cells.join('\n'));
};

// Used to get new grid dimension/make grid
var getNum = function() {
    var num = prompt('Size of new grid?');
    return num;
}
