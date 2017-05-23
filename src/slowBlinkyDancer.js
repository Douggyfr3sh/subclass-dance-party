var SlowBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = timeBetweenSteps * 6;
  this.$node.attr('id', 'slowDance');
  this.colorCount = 0;
  // return this;
};

SlowBlinkyDancer.prototype = Object.create(Dancer.prototype);
SlowBlinkyDancer.prototype.constructor = SlowBlinkyDancer;

SlowBlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('this', this);
  var getColor = function() {
    console.log('this.colorCount', this.colorCount);

    var colors = [
      'slowDanceBlue',
      'slowDanceYellow',
      'slowDanceRed',
      'slowDanceGreen',
      'slowDanceYellow'   // to make slowDanceRed "show up"
    ];
    // return colors[Math.round(Math.random() * (colors.length - 1))];
    var retColor = colors[this.colorCount];
    if (this.colorCount === colors.length - 1) {
      this.colorCount = 0;
    } else {
      this.colorCount++;
    }
    return retColor;
  };
  // console.log('getColor()', getColor());
  var getColor = getColor.call(this);
  this.$node.toggle();
  this.$node.attr('id', getColor);
  console.log('this.$node', this.$node);
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
