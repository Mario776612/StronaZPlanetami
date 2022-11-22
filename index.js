const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth , window.innerHeight );
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );

function CreateSphere(radius,width,height){
 return new THREE.SphereGeometry(radius,width,height)
 }
function materiaTxt(texture){
const txtLoad = new THREE.TextureLoader()
return new THREE.MeshBasicMaterial({map: txtLoad.load(texture)})
}
const e1 = new THREE.Mesh(CreateSphere(0.5,30,16) , materiaTxt('./textures/merkury.jpg'))
const e2 = new THREE.Mesh(CreateSphere(0.5,30,16) , materiaTxt('./textures/wenus.jpg'))
const e3 = new THREE.Mesh(CreateSphere(0.5,30,16) , materiaTxt('./textures/earth.jpg'))
const e4 = new THREE.Mesh(CreateSphere(0.5,30,16) , materiaTxt('./textures/mars.jpg'))
const e5 = new THREE.Mesh(CreateSphere(1,30,16) , materiaTxt('./textures/jupiter.jpg'))
const e6 = new THREE.Mesh(CreateSphere(1,30,16) , materiaTxt('./textures/saturn.jpg'))
const e7 = new THREE.Mesh(CreateSphere(1,30,16) , materiaTxt('./textures/Uran.jpg'))
const e8 = new THREE.Mesh(CreateSphere(0.5,30,16) , materiaTxt('./textures/neptun.jpg'))
const e1Obj = new THREE.Object3D();
e1Obj.add(e1)
const e2Obj = new THREE.Object3D();
e2Obj.add(e2)
const e3Obj = new THREE.Object3D();
e3Obj.add(e3)
const e4Obj = new THREE.Object3D();
e4Obj.add(e4)
const e5Obj = new THREE.Object3D();
e5Obj.add(e5)
const e6Obj = new THREE.Object3D();
e6Obj.add(e6)
const e7Obj = new THREE.Object3D();
e7Obj.add(e7)
const e8Obj = new THREE.Object3D();
e8Obj.add(e8)
scene.add(e1Obj,e2Obj,e3Obj,e4Obj,e5Obj,e6Obj,e7Obj,e8Obj)

const geometry = new THREE.RingGeometry(0.5,1.5,30 );
const mesh = new THREE.Mesh( geometry, materiaTxt('./textures/saturnring.jpg') );
e6.add( mesh );

const cube = new THREE.Mesh( CreateSphere(2,30,16),  materiaTxt('./textures/sun.jpg') );

const light = new THREE.PointLight(0xFFFF, 2);
      light.position.z = 20;
      light.position.y = -20;
      light.position.x = -40;

const light2 = new THREE.PointLight(0xFFFE, 2);
      light2.position.z = 10;
      light2.position.y = 20;
      light2.position.x = 40;

      
      scene.add(light)
      scene.add(light2)
      scene.add(cube)

     camera.position.z = 100
     e1.position.x = 4
     e2.position.x = 6
     e3.position.x = 8
     e4.position.x = 10
     e5.position.x = 12
     e6.position.x = 16
     e7.position.x = 20
     e8.position.x = 23

     function animate() {
	requestAnimationFrame( animate );
         e1Obj.rotation.z += 0.023
         e2Obj.rotation.z += 0.017
         e3Obj.rotation.z += 0.015
         e4Obj.rotation.z += 0.012
         e5Obj.rotation.z += 0.007
         e6Obj.rotation.z += 0.005
         e7Obj.rotation.z += 0.003
         e8Obj.rotation.z += 0.002
         mesh.rotation.z += 0.01
         e5.rotation.z += 0.01
	renderer.render( scene, camera );
			};
      animate();