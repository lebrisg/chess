var chessboard = require('chessboard');

var init = function() {
	var board,
    	game = new Chess();
	board = ChessBoard('board');
};

$(document).ready(init);
