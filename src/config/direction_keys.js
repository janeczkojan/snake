import * as SNAKE_DIRECTION from './snake_direction';


export const UP = [ 38, 87 ];
export const RIGHT = [ 39, 68 ];
export const BOTTOM = [ 40, 83 ];
export const LEFT = [ 37, 65 ];


export const KEYS = {
	38: SNAKE_DIRECTION.UP,
	87: SNAKE_DIRECTION.UP,
	39: SNAKE_DIRECTION.RIGHT,
	68: SNAKE_DIRECTION.RIGHT,
	40: SNAKE_DIRECTION.BOTTOM,
	83: SNAKE_DIRECTION.BOTTOM,
	37: SNAKE_DIRECTION.LEFT,
	65: SNAKE_DIRECTION.LEFT
};