const popmotion =  require('popmotion');

// // There's a bit of destructuring that was not included in the online version
// const { styler, spring, listen, pointer, value} = popmotion;

// code taken from one of the examples on popmotion.io
const ball = document.querySelector(".box");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(ball, "mousedown touchstart").start(e => { //arrow is a new way of writing functions
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup").start(() => {
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 500
    })
    .start(ballXY);
});

