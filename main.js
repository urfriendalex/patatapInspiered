var shapes = [];

var keyData = {
	q: {
		sound: new Howl({
  		urls: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		urls: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		urls: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		urls: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		urls: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		urls: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		urls: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		urls: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			urls: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		urls: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		urls: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		urls: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		urls: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		urls: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		urls: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		urls: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		urls: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		urls: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		urls: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		urls: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		urls: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		urls: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		urls: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		urls: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			urls: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		urls: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}

function onKeyDown(event){
    if(keyData[event.key]){
        var color = keyData[event.key].color;
        var sound = keyData[event.key].sound;
        var maxPoint = new Point(view.size.width, view.size.height);
        var point = maxPoint * Point.random();

        var randomNum = Math.floor(Math.random() * 5);
        switch (randomNum) {
            case 0:
                var newShape = new Path.RegularPolygon(point, 3, 300);
                newShape.fillColor = color;
                break;
            case 1:
                var newShape = new Path.Circle(point, 300);
                newShape.fillColor = color;
                break;
            case 2:
                var rect =  new Rectangle(point, maxPoint*Point.random()) 
                var newShape = new Path.Rectangle(rect);
                newShape.fillColor = color;
                break;
            case 3:
                var newShape = new Path.RegularPolygon(point, 4, 300);
                newShape.fillColor = color;
                break;
            case 4:
                var newShape  = new Path.RegularPolygon(point, 5, 300);
                newShape.fillColor = color;
                break;
            default:
                console.log('default');
        }
        sound.play();
        shapes.push(newShape);
    }
} 

function onFrame(event){
    for (var i = 0; i<shapes.length;i++){
        shapes[i].fillColor.hue += 1;
        shapes[i].scale(.95);
        shapes[i].rotate(5);
    }
}