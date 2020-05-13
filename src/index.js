const View = require('./ttt-view.js');
const Game =  require('../solution/game.js');

  $(() => {
    const game = new Game ();
    new View(game, $('.ttt'));
  });

  window.View = View;