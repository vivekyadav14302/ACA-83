const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

var engine = Engine.create(),
  world = engine.world;


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1550,
    height: 800,
    wireframes: false,
    background: "#B5EAEA",
  },
});

Render.run(render);


var runner = Runner.create();
Runner.run(runner, engine);

// create stacks

var orangeStack = Composites.stack(680, 0, 3, 4, 0, 0, function(x,y) {
  return Bodies.polygon(x, y, 4, 30, {
    friction: 0.00001,
    restitution: 0.5,
    density: 0.001,
    render: {
      sprite: {
        texture: 'images/orange.png',
        xScale: 0.12,
        yScale: 0.12,
      }
    }
  });
});


var pineStack = Composites.stack(680, 0, 3, 4, 0, 0, function(x,y) {
  return Bodies.polygon(x, y, 4, 30, {
    friction: 0.00001,
    restitution: 0.5,
    density: 0.001,
    render: {
      sprite: {
        texture: 'images/orange.png',
        xScale: 0.15,
        yScale: 0.15,
      }
    }
  });
});


var berryStack = Composites.stack(680, 0, 4, 3, 0, 0, function(x,y) {
  return Bodies.polygon(x, y, 4, 30, {
    friction: 0.00001,
    restitution: 0.5,
    density: 0.001,
    render: {
      sprite: {
        texture: 'images/orange.png',
        xScale: 0.12,
        yScale: 0.12,
      }
    }
  });
});
//   Create first container 

var firstBase = Bodies.rectangle(745, 580, 300, 20, {
  isStatic: true,
  render: { fillStyle: '#060a19' }
})

firstLeft = Bodies.rectangle(595, 440, 300, 20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: '#060a19' }
})

firstRight = Bodies.rectangle(905, 440, 300, 20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: '#060a19' }
})


// Create second container

var secondBase = Bodies.rectangle(340, 580, 300, 20, {
  isStatic: true,
  render: { fillStyle: '#060a19' }
});
    secondLeft = Bodies.rectangle(190, 440, 300, 20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: '#060a19' }
});
    secondRight = Bodies.rectangle(500, 440, 300, 20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: '#060a19' }
});

//   Create third container

var thirdBase = Bodies.rectangle(1150, 580, 300, 20, {
  isStatic: true,
  render: { fillStyle: '#060a19' }
});
    thirdLeft = Bodies.rectangle(1000, 440, 300, 20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: '#060a19' }
});
    thirdRight = Bodies.rectangle(1310, 440, 300, 20, {
  isStatic: true,
  angle: Math.PI/2,
  render: { fillStyle: '#060a19' }
});

// add bodies to world
Composite.add(world,[orangeStack,berryStack,pineStack,firstBase,firstLeft,firstRight,secondBase,secondLeft,secondRight,thirdBase,thirdLeft,thirdRight]);

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;
