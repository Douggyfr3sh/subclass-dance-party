var Paper = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<span class="dancer"><i class="fa fa-hand-paper-o fa-4x" aria-hidden="true"></i></span>');
  // this.timeBetweenSteps = 2000;
  this.sizeToggle = false;
  this.type = 'paper';
  // return this;
};

Paper.prototype = Object.create(Dancer.prototype);
Paper.prototype.constructor = Paper;

Paper.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('this', this);
  //this.$node.toggle();


  if (this.sizeToggle) {
    this.$node.addClass('fa-rotate-270');
    this.sizeToggle = false;
    // console.log('this.$node', this.$node);

  } else {
    this.$node.removeClass('fa-rotate-270');
    this.sizeToggle = true;
    // console.log('this.$node', this.$node);
  }
};




// var makePaper = function(top, left, timeBetweenSteps) {
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
