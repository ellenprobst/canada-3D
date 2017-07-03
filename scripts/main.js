// variable for  mesh object
var renderer, camera, scene;

init();

function init(){
	// create scene
	scene = new THREE.Scene();


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
    
		bear.position.y = -100;
		bear.position.z = 0;
		bear.castShadow = true;
		bear.receiveShadow = true;
		bear.scale.x = bear.scale.y = bear.scale.z = 10;
		bear.material[0].shading= THREE.FlatShading;
		scene.add( bear )
}


function randBetween(min, max) {
	return (Math.random() * (max - min)) + min;
}


function animate() {
	requestAnimationFrame( animate );
	
	render();
}
function render() {
	renderer.render( scene, camera );
}

