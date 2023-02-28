export default {
	
	getRandomColor: ( inputColor = '#006bb1' ) => {

		// Convert hex color to HSL
		var hsl = Color.hexToHsl(inputColor);

		// Generate random brightness and saturation factors
		var brightnessFactor = (Math.random() - 0.5) * 0.2;
		var saturationFactor = (Math.random() - 0.5) * 0.2;

		// Apply brightness and saturation factors to HSL values
		hsl[2] = Math.min(Math.max(0, hsl[2] * (1 + brightnessFactor)), 1);
		hsl[1] = Math.min(Math.max(0, hsl[1] * (1 + saturationFactor)), 1);

		// Convert HSL back to hex color
		var outputColor = Color.hslToHex(hsl);

		return outputColor;
		
	},
	
	// Helper function to convert hex color to HSL
	hexToHsl: ( hexColor = '#006bb1' ) => {
		var r = parseInt(hexColor.substring(1, 3), 16);
		var g = parseInt(hexColor.substring(3, 5), 16);
		var b = parseInt(hexColor.substring(5, 7), 16);

		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;

		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}

		return [h, s, l];
	},

	hslToHex: (hslColor) => {
		
		var h = hslColor[0], s = hslColor[1], l = hslColor[2];
		var r, g, b;

		if (s == 0) {
			r = g = b = l; // achromatic
		} else {
			function hue2rgb(p, q, t) {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			}

			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}

		var rgbColor = [
			Math.round(r * 255),
			Math.round(g * 255),
			Math.round(b * 255)
		];

		var outputColor = '#' + rgbColor.map(c => c.toString(16).padStart(2, '0')).join('');

		return outputColor;
		
	}
	
}