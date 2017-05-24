var Rock = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><i class="fa fa-hand-rock-o fa-pulse fa-4x" aria-hidden="true"></i></span>');
  this.$node.attr('id', 'fastDance');
  // this.timeBetweenSteps = 2000;
  this.canMove = true;
  this.type = 'rock';
  var context = this;

  this.$node.mouseover(function () {
    // console.log('mouseover event happened');
    if (context.canMove) {
      context.canMove = false;
    } else {
      context.canMove = true;
    }
  });

  // return this;
};

Rock.prototype = Object.create(Dancer.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('this', this);
  // var currentTop = this.$node.top;
  // var currentLeft = this.$node.left;
  var generateRandomNumber = function() {
    var height = $('body').height() * Math.random();
    var width = $('body').width() * Math.random();
    return [height, width];
  };
  if (this.canMove) {
    this.$node.css({ top: generateRandomNumber()[0], left: generateRandomNumber()[1] });
    this.collisionDetection();
  } else {
    // console.log('cannot move!');
  }

};

Rock.prototype.lineUp = function(top, left) {
  this.$node.css({top: top, left: left});
  this.canMove = false;
};

Rock.prototype.collisionDetection = function() {
  // Rock: just moved to new position
  // iterate through array of dancers
  console.log('this.collisionDetection()');
  console.log('window.dancers', window.dancers);
  for (var i = 0; i < window.dancers.length; i++) {
    // if element is scissors
    if (window.dancers[i].type === 'scissors') {
      // if rock.top is within 10px && scissors.top is within 10px
      if (this.top > window.dancers[i].top - 150 && this.top < window.dancers[i].top + 150) {
        if (this.left > window.dancers[i].left - 150 && this.left < window.dancers[i].left + 150) {
          console.log('collision!');
          // remove scissors from window.dancers
          // window.dancers[i].$node.css('display', 'none');
          console.log('window.dancers[i].$node', window.dancers[i].$node);
          window.dancers[i].$node.remove();
          window.dancers.splice(i, 1);
        }
      }
    } else if (window.dancers[i].type === 'paper') {
      // if rock.top is within 10px && paper.top is within 10px
      if (this.top > window.dancers[i].top - 150 && this.top < window.dancers[i].top + 150) {
        if (this.left > window.dancers[i].left - 150 && this.left < window.dancers[i].left + 150) {
          // remove paper from window.dancers
          // window.dancers[i].$node.css('display', 'none');
          this.$node.remove();
          // window.dancers.splice(i, 1);
        }
      }
    }
  }

};





// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//
//   var oldStep = blinkyDancer.step;
//
//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
//
//   return blinkyDancer;
// };
