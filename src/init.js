$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log('dancerMakerFunctionName is: ', dancerMakerFunctionName);
          // 'SlowBlinkyDancer', 'FastBlinkyDancer', or 'BlinkyDancer'
    // get the maker function for the kind of dancer we're supposed to make
    // console.log('window[dancerMakerFunctionName] = ', window[dancerMakerFunctionName]);
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancerMakerFunction is:', dancerMakerFunction);


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log('dancer is =', dancer);
    $('body').append(dancer.$node);
  });
  $('.lineUp').on('click', function() {
    console.log('line up');
    console.log('window.dancers', window.dancers);

    var offset = 0;
    // console.log('$ body height', $('body').height);
    var $height = $('body').height() / 2;
    console.log('$height', $height);
    for (var i = 0; i < window.dancers.length; i++) {
      // console.log('window.dancers[i]', window.dancers[i]);
      // window.dancers[i].$node.top = $height;
      // window.dancers[i].$node.left = offset;
      window.dancers[i].lineUp($height, offset);
      offset += 50;

    }
  });
});
