var FastBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = timeBetweenSteps;
  this.$node.attr('id', 'fastDance');
  // return this;
};

FastBlinkyDancer.prototype = Object.create(Dancer.prototype);
FastBlinkyDancer.prototype.constructor = FastBlinkyDancer;

FastBlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('this', this);
  console.log('this.$node', this.$node);
  console.log('this.top', this.top);
  // var currentTop = this.$node.top;
  // var currentLeft = this.$node.left;
  var generateRandomNumber = function() {
    var height = $('body').height() * Math.random();
    var width = $('body').width() * Math.random();
    return [height, width];
  };
  this.$node.css({ top: generateRandomNumber()[0], left: generateRandomNumber()[1] });
  // this.$node.top = this.$node.top - 5;
  this.$node.toggle();

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
