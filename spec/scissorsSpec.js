describe('Scissors', function() {

  var Scissors, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    scissors = new Scissors(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(scissors.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(scissors.$node, 'toggle');
    Scissors.step();
    expect(scissors.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(Scissors, 'step');
      expect(scissors.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(scissors.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(scissors.step.callCount).to.be.equal(2);
    });
  });
});
