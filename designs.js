
// Build table from form's input data
function makeGrid() {
        var width;
        var height;
        width = $('#inputWidth').val();
        height = $('#inputHeight').val();
        for(y=1; y<=height; y++) { // Build table rows
          $('#pixelCanvas').append('<tr></tr>');
        }

        //this loop creates the tables
        for(x=1; x<=width; x++){   

          $('tr').append('<td></td>');
        }
      }

      // function to select button
      $('#sizePicker').submit(function(env) {

        env.preventDefault();  
        var tableRow = $('#pixelCanvas').find('tr');
        tableRow.remove();
        makeGrid();
      });

      // function to apply color to td's
      $('#pixelCanvas').on('click','td', function(env) {

        var color = $('#colorPicker').val();
        $(env.target).css('background-color', color);
      });

        