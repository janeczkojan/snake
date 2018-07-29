import React from 'react';


const withStyle = (StyledComponent, className = '') => (Component) => {
	const defaultRender = Component.prototype.render;
	
	Component.prototype.render = () => (
		<StyledComponent className={className}>
			{defaultRender()}
		</StyledComponent>
	);

	return Component;
};


export default withStyle;