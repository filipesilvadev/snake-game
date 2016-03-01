$(document).ready(function(){
	
	var SNAKE = SNAKE || {
		config: {},
		view: {},
		controller: {}
	};

	(function initConfig(){
		this.$canvas = $('#snakeArea');
		this.gameWidth = this.$canvas.width();
		this.gameHeight = this.$canvas.height();
		this.cellWidth = 10;
		this.scoreTextStyle = '14px Verdana';
		this.color = {
			background: '#eeeeee',
			border: '#666666',
			score: '#000000',
			snake:{
				fill:'#419b63',
				stroke:'#006410'
			},
			food:{
				fill:'#b44643',
				stroke:'#640200'
			}
		}
	}).call(SNAKE.config);

	
	(function initView(config){
		var $canvas = config.$canvas[0],
			context = $canvas.getContext('2d');

		var paintCell = function(x, y, color){
			var cellWidth = config.cellWidth;

			context.fillStyle = color.fill;
			context.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
			context.strokeStyle = color.stroke;
			context.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
		}

		var paintGameBoard = function(){
			var gameWidth = config.gameWidth,
				gameHeight = config.gameHeight,
				background = config.color.background,
				border = config.color.border;
			
			context.fillStyle = background;
			context.fillRect(0,0,gameWidth,gameHeight);
			context.strokeStyle = border;
			context.strokeRect(0,0,gameWidth,gameHeight);
		}

		var paintSnake = function(snake){
			var snakeColor = config.color.snake;

			for(index in snake){
				var snakeCell = snake[index];
				paintCell(snakeCell.x, snakeCell.y, snakeColor);
			}
		}

		var paintScore = function(score){
			var scoreColor = config.color.score,
				scoreTextStyle = config.scoreTextStyle;

			context.font = scoreTextStyle;
			context.fillStyle = scoreColor;
			context.fillText(score,10,20);

		}

		paintGameBoard();
		paintScore(300);


	}).call(SNAKE.view, SNAKE.config);


	
	(function initController(){

	}).call(SNAKE.controller);
	

});