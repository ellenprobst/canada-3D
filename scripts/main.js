
var renderer, camera, scene;
var bear;
init();
 
// init
function init(){  
  
  //scene
  scene = new THREE.Scene();
  
  // camera  
	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 5000 );
	camera.position.set( 0, 0, 250 ); 
	camera.updateProjectionMatrix();
  
  //lights
  var light = new THREE.AmbientLight( "#F8845E", 1.5 ); 
  scene.add( light );
  var hemilight = new THREE.HemisphereLight( "#B82D98", "#26688F", .5 );
  scene.add( hemilight ); 
  dirLight = new THREE.DirectionalLight( 0xffffff, .6 );
		dirLight.color.setHSL( 0.1, 1, 0.95 );
		dirLight.position.set( -1, 1.75, 1 );
		dirLight.position.multiplyScalar( 50 ); 
		scene.add( dirLight );
		dirLight.castShadow = true;
		dirLight.shadow.mapSize.width = 2048;
		dirLight.shadow.mapSize.height = 2048;
		var d = 150;
		dirLight.shadow.camera.left = -d;
		dirLight.shadow.camera.right = d;
		dirLight.shadow.camera.top = d;
		dirLight.shadow.camera.bottom = -d;
		dirLight.shadow.camera.far = 3500;
		dirLight.shadow.bias = -0.0001;

  // render
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.renderReverseSided = false;
  
  //append it to the DOM	 
  document.body.appendChild(renderer.domElement);
  
  //load mesh
  var loader = new THREE.JSONLoader(); 
  loader.load('https://raw.githubusercontent.com/ellenprobst/canada-3D/master/scripts/bear.json', generateBear );
  loader.load('https://raw.githubusercontent.com/ellenprobst/canada-3D/master/scripts/landscape.json', generateLandscape ); 
}

function generateLandscape(geometry, material) {
	geometry.computeVertexNormals();
    var landscape = new THREE.Mesh(geometry, material);
    landscape.position.y = -50;
    landscape.position.z = -230;

    landscape.scale.x = landscape.scale.y = landscape.scale.z = 25;
    landscape.receiveShadow = true;

	scene.add( landscape )
}
  
function generateBear(geometry, material){
	geometry.computeVertexNormals();
    bear = new THREE.Mesh(geometry, material);
	bear.position.y = -40;  
    bear.position.x = -200; 
    bear.position.z = -20; 
    bear.rotation.y += 1;
		bear.castShadow = true;  
		bear.receiveShadow = true;
		bear.scale.x = bear.scale.y = bear.scale.z = 3;
  	bear.material.forEach(mesh => mesh.shininess = 4);
    TweenMax.to(bear.position, 5, {x:200, repeat: -1});

    scene.add( bear ) 
}

function spin(){
  TweenMax.fromTo(bear.rotation, 3, {y:0}, {y:7})
}


function render() {
  renderer.render( scene, camera );
  requestAnimationFrame( render );
  document.addEventListener('click', spin);

}
render(); 


// CREDITS:
// 	Shadow light setup by mirada.com ;
// 	Low poly-landscape based on tutorial by Karan Shah;
