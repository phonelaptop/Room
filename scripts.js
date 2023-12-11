const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    10,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

  //This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  //This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  var light = new BABYLON.HemisphericLight(light, new BABYLON.Vector3(0, 1, 0));
  light.intensity = 0.7;

  const buildChair = () => {
    var chairSeat = BABYLON.MeshBuilder.CreateBox("seat", {
      width: 2.2,
      height: 0.1,
      depth: 2.2,
    });
    chairSeat.position = new BABYLON.Vector3(0, 2, 0);

    var chairRest = BABYLON.MeshBuilder.CreateBox("Rest", {
      width: 0.1,
      height: 2,
      depth: 2.2,
    });
    chairRest.position = new BABYLON.Vector3(1.05, 3, 0);

    var leg1 = BABYLON.MeshBuilder.CreateBox("leg1", {
      width: 0.1,
      height: 2,
      depth: 0.1,
    });
    leg1.position = new BABYLON.Vector3(1, 1, 1);

    var leg2 = BABYLON.MeshBuilder.CreateBox("leg2", {
      width: 0.1,
      height: 2,
      depth: 0.1,
    });
    leg2.position = new BABYLON.Vector3(-1, 1, 1);

    var leg3 = BABYLON.MeshBuilder.CreateBox("leg3", {
      width: 0.1,
      height: 2,
      depth: 0.1,
    });
    leg3.position = new BABYLON.Vector3(1, 1, -1);

    var leg4 = BABYLON.MeshBuilder.CreateBox("leg4", {
      width: 0.1,
      height: 2,
      depth: 0.1,
    });
    leg4.position = new BABYLON.Vector3(-1, 1, -1);

    const chair = BABYLON.Mesh.MergeMeshes(
      [chairSeat, chairRest, leg1, leg2, leg3, leg4],
      true,
      true
    );

    return chair;
  };

  const chair = buildChair();
  chair.position = new BABYLON.Vector3(-5, 0, -5);

  const buildTable = () => {
    var tableTop = BABYLON.MeshBuilder.CreateBox("tableTop", {
      width: 2.2,
      height: 0.5,
      depth: 3.5,
    });
    tableTop.position = new BABYLON.Vector3(0, 2.5, 0);

    var Tleg1 = BABYLON.MeshBuilder.CreateBox("Tleg1", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Tleg1.position = new BABYLON.Vector3(1, 1, 1.6);

    var Tleg2 = BABYLON.MeshBuilder.CreateBox("Tleg2", {
      width: 0.1,
      height: 3.5,
      depth: 0.255,
    });
    Tleg2.position = new BABYLON.Vector3(-1, 1, 1.6);

    var Tleg3 = BABYLON.MeshBuilder.CreateBox("Tleg3", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Tleg3.position = new BABYLON.Vector3(1, 1, -1.6);

    var Tleg4 = BABYLON.MeshBuilder.CreateBox("Tleg4", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Tleg4.position = new BABYLON.Vector3(-1, 1, -1.6);

    const table = BABYLON.Mesh.MergeMeshes(
      [tableTop, Tleg1, Tleg2, Tleg3, Tleg4],
      true,
      true
    );

    return table;
  };

  const table = buildTable();
  table.position = new BABYLON.Vector3(-6, 0, -5);

  const buildLTable = () => {
    var tableTop2 = BABYLON.MeshBuilder.CreateBox("tableTop2", {
      width: 2.2,
      height: 0.5,
      depth: 5,
    });
    tableTop2.position = new BABYLON.Vector3(0, 2.5, 0);

    var Lleg1 = BABYLON.MeshBuilder.CreateBox("Lleg1", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Lleg1.position = new BABYLON.Vector3(1, 1, 2.4);

    var Lleg2 = BABYLON.MeshBuilder.CreateBox("Lleg2", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Lleg2.position = new BABYLON.Vector3(-1, 1, 2.4);

    var Lleg3 = BABYLON.MeshBuilder.CreateBox("Lleg3", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Lleg3.position = new BABYLON.Vector3(1, 1, -2.4);

    var Lleg4 = BABYLON.MeshBuilder.CreateBox("Lleg4", {
      width: 0.1,
      height: 3.5,
      depth: 0.25,
    });
    Lleg4.position = new BABYLON.Vector3(-1, 1, -2.4);

    const Ltable = BABYLON.Mesh.MergeMeshes(
      [tableTop2, Lleg1, Lleg2, Lleg3, Lleg4],
      true,
      true
    );

    return Ltable;
  };

  const Ltable = buildLTable();
  Ltable.position = new BABYLON.Vector3(-6, 0, 5);

  const char = buildChair();
  char.position = new BABYLON.Vector3(-5, 0, 5);

  const BuildBed = () => {
    var BedTop = BABYLON.MeshBuilder.CreateBox("BedTop", {
      width: 4,
      height: 1,
      depth: 6,
    });
    BedTop.position = new BABYLON.Vector3(0, 2, 0);

    var Bleg1 = BABYLON.MeshBuilder.CreateBox("Bleg1", {
      width: 0.5,
      height: 5,
      depth: 0.5,
    });
    Bleg1.position = new BABYLON.Vector3(1.8, 3, 3);

    var Bleg2 = BABYLON.MeshBuilder.CreateBox("Bleg2", {
      width: 0.5,
      height: 5,
      depth: 0.5,
    });
    Bleg2.position = new BABYLON.Vector3(-1.8, 3, 3);

    var Bleg3 = BABYLON.MeshBuilder.CreateBox("Bleg3", {
      width: 0.5,
      height: 4,
      depth: 0.5,
    });
    Bleg3.position = new BABYLON.Vector3(1.8, 2, -3);

    var Bleg4 = BABYLON.MeshBuilder.CreateBox("Bleg4", {
      width: 0.5,
      height: 4,
      depth: 0.5,
    });
    Bleg4.position = new BABYLON.Vector3(-1.8, 2, -3);

    var BedBoard = BABYLON.MeshBuilder.CreateBox("BedBoard", {
      width: 4,
      height: 3,
      depth: 0.2,
    });
    BedBoard.position = new BABYLON.Vector3(0, 3.5, 3.1);

    var BedBoard2 = BABYLON.MeshBuilder.CreateBox("BedBoard2", {
      width: 4,
      height: 1,
      depth: 0.2,
    });
    BedBoard2.position = new BABYLON.Vector3(0, 3, -3);

    var pillow = BABYLON.MeshBuilder.CreateBox("pillow", {
      width: 4,
      height: 1,
      depth: 0.2,
    });
    pillow.position = new BABYLON.Vector3(0, 3, -3);

    const LBed = BABYLON.Mesh.MergeMeshes(
      [BedTop, Bleg1, Bleg2, Bleg3, Bleg4, BedBoard, BedBoard2],
      true,
      true
    );

    return LBed;
  };

  const Bedd = BuildBed();
  Bedd.position = new BABYLON.Vector3(2, 0, 5);

  var material = new BABYLON.StandardMaterial(scene);
  material.alpha = 1;
  material.diffuseColor = new BABYLON.Color3(0.76, 0.53, 0.38);
  scene.material = material;
  var ground = BABYLON.MeshBuilder.CreateGround(ground, {
    width: 20,
    height: 20,
  });
  ground.material = material;
  return scene;
};

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});

var createEngine = function () {
  var engine = new BABYLON.Engine(canvas, false);
  return engine;
};