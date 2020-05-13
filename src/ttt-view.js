class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', 'li', e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    })
  }

  makeMove($square) {
    $square.addClass('taken');
    

    let pos = $square.data("pos");
    let mark = this.game.currentPlayer;

    $square.addClass(mark);
    this.game.playMove(pos);

    $square.text(mark)
    if (this.game.isOver()) {
      let win = this.game.winner();

      if (win) {
        alert(`${win} you won!`);
      } else {
        alert("It's a tie!")
      }
    } 
  }
  
  setupBoard() {
    let $ul = $('<ul>');
    for (let i = 0; i < 3; i++) { 
      for (let j = 0; j < 3; j++) {   
        let $li = $('<li>');
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    
   this.$el.append($ul);
   let $div = $('<div>');
   this.$el.append($div)
  }

}

module.exports = View;
