(function(win, doc) {
  var 
    ps = 140,
    minX = 10,
    minY = 10,
    maxX = screen.width,
    maxY = screen.height,
    max = Math.floor(maxX/ps) * Math.floor(maxY/ps);

  for (var i=0; i<max; i++) {
    var div = doc.createElement('div'), top, left;
    div.className = 'wave wave-' + r(1, 20);
    div.style.width = (size = r(10, 80) + 'px');
    div.style.height = size;

    div.style.top = (top = r(minY, maxY)) + 'px';
    div.style.left = (left = r(minX, maxX)) + 'px';

    doc.body.appendChild(div);
  }

  function r(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
  }

  function Boat() {
    var boat = this
      , dom = {
      container : doc.getElementById('Boat'),
      boat : doc.getElementById('BoatObj')
    };

    function move(e) {
      var mx = 0, my = 0, r = 0, _key = '';
      switch (e.keyCode) {
        case 39: case 83: // (S) right
          mx = mx + 30;
          r = -5;
          _key = 'RIGHT';
          dom.container.className = 'boat right';
        break;
        case 37: case 65: // (A) left
          mx = mx - 30;
          r = 3;
          _key = 'LEFT';
          dom.container.className = 'boat left';
        break;
        case 38: case 87: // (W) up 
          my = my - 20;
          r = 0;
          _key = 'UP';
          dom.container.className = 'boat up';
        break;
        case 40: case 90: // (Z) down
          my = my + 20;
          r = 0;
          _key = 'DOWN';
          dom.container.className = 'boat down';
        break;
        default: 
          _key = '?';
      }

      dom.container.style.webkitTransform = 'translate3d('+mx+'px, '+my+'px, 0) rotate('+r+'deg)';

      setTimeout(function() {
        dom.container.style.webkitTransform = 'translate3d('+mx+'px, '+my+'px, 0) rotate('+ (r=0) +'deg)';
      }, 100);
    }

    boat.init = function() {
      win.addEventListener('keydown', move);
    };
  }

  function App() {
    var app = this;

    app.boat = new Boat();

    app.init = function() {
      app.boat.init();
    };
  }
  var app = new App();
  app.init();

})(window, document);