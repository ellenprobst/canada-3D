// variable for  mesh object
var renderer, camera, scene;

init();
function init(){
	
	// create scene
	scene = new THREE.Scene();
	camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 2000, 1000 );
	// camera.zoom = 1.5;
	 camera.updateProjectionMatrix();

 	
  //lights
  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );
  var hemilight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2);
  scene.add( hemilight );
  // scene
	// create renderer
	renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.renderReverseSided = false;

	// append it to the DOM
	document.body.appendChild(renderer.domElement);

	 var loader = new THREE.JSONLoader();
	// loader.load('./scripts/canada.json', generateMeshA );

	loader.load('./scripts/bear.json', generateMeshB );
};

function generateMeshA(geometry, material){
	geometry.computeVertexNormals();
    var landscape = new THREE.Mesh(geometry, material);
    
			landscape.position.y = -30;
			landscape.position.z = 0;
			landscape.material[0].shading= THREE.FlatShading;
			landscape.material[1].shading= THREE.FlatShading;
			landscape.material[2].shading= THREE.FlatShading;
			landscape.material[3].shading= THREE.FlatShading;
			landscape.material[4].shading= THREE.FlatShading;
			landscape.material[5].shading= THREE.FlatShading;
			landscape.material[6].shading= THREE.FlatShading;
			landscape.material[7].shading= THREE.FlatShading;
			landscape.material[8].shading= THREE.FlatShading;

		landscape.scale.x = landscape.scale.y = landscape.scale.z = 40;
						landscape.receiveShadow = true;

		scene.add( landscape )
}

function generateMeshB(geometry, material){
	geometry.computeVertexNormals();
     var bear = new THREE.Mesh(geometry, material);
    
		bear.position.y = -200;
		bear.position.z = 0;
		bear.castShadow = true;
		bear.receiveShadow = true;

		bear.scale.x = bear.scale.y = bear.scale.z = 50;
		scene.add( bear )
}


function randBetween(min, max) {
	return (Math.random() * (max - min)) + min;
}


function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();


