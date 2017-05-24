describe('paper', function() {

  var paper, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    paper = new Paper(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(paper.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(paper.$node, 'toggle');
    paper.step();
    // expect(paper.$node.attr('id')).to.be.('');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(paper, 'step');
      expect(paper.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(paper.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(paper.step.callCount).to.be.equal(2);
    });
  });
});
