$('.one').click(function() {
  TweenMax.to('.one', 1.3, {
   "transform": 'scale(1)', left: '20%', ease: Power4.easeInOut
  });

  TweenMax.to('.two', 1.3, {
   left: '75%', "transform": 'scale(.6)', zIndex: 5, ease: Power4.easeInOut
  });

  TweenMax.to('.three', 1.3, {
    zIndex: 1, ease: Power4.easeInOut
  });

});

$('.two').click(function(e) {
  if (e.pageX < 500) {
    TweenMax.to('.three', 1.3, {
      left: '75%', "transform": 'scale(.6)', ease: Power4.easeInOut
    });
  } else {
    TweenMax.to('.one', 1.3, {
     left: '-35%', "transform": 'scale(.6)', ease: Power4.easeInOut
    });

    TweenMax.to('.three', 1.3, {
     zIndex: 2, ease: Power4.easeInOut
    });
  }

  TweenMax.to('.two', 1.3, {
   "transform": 'scale(1)', left: '20%', ease: Power4.easeInOut
  });
});

$('.three').click(function(e) {
  TweenMax.to('.three', 1.3, {
   left: '20%', "transform": 'scale(1)', ease: Power4.easeInOut
  });

  if (e.pageX < 500) {
    TweenMax.to('.four', 1.3, {
      left: '75%', "transform": 'scale(.6)', ease: Power4.easeInOut
    });
  } else {
    TweenMax.to('.two', 1.3, {
     left: '-35%', "transform": 'scale(.6)', zIndex: 3, ease: Power4.easeInOut
    });

    TweenMax.to('.one', 1.3, {
     zIndex: 1, ease: Power4.easeInOut
    });

    TweenMax.to('.four', 1.3, {
       opacity: 1, ease: Power4.easeInOut
    });
  }
});

$('.four').click(function() {
  TweenMax.to('.three', 1.3, {
    left: '-35%', "transform": 'scale(.6)', zIndex: 5, ease: Power4.easeInOut
  });

  TweenMax.to('.four', 1.3, {
    left: '20%', "transform": 'scale(1)', ease: Power4.easeInOut
  });
});
