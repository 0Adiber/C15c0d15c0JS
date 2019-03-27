const c15c0d15c0 = {
	randomColor: () => {
		const randLets = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += randLets[Math.floor(Math.random() * 16)];
		}
		return color;
	},
	initDisco: (millis) => {
		setInterval(function () {
			const elems = document.body.getElementsByTagName('*');
			for (let item of elems) {
				item.style.backgroundColor = c15c0d15c0.randomColor();
			}
		}, millis);
	},
	initDiscoFor: (millis, type) => {
		setInterval(function() {
			const elems = document.querySelectorAll(type);
			for(let item of elems) {
				item.style.backgroundColor = c15c0d15c0.randomColor();
			}	
		}, millis);
	}
};