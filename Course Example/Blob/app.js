// Shader Exploration
// Sphere is distorted using classic `perlin` 4d noise
// `nice-color-palettes` is used to generate great color combinations
// originally made using `canvas-sketch` then ported here

console.clear();

let scene, camera, renderer, clock, meshes, BACKGROUND_COLOR, COLORS_ARRAY;

const FETCH_URL = "https://cdn.jsdelivr.net/npm/nice-color-palettes";

const vertexShader = document.getElementById("vertexShader").innerHTML;
const fragmentShader = document.getElementById("fragmentShader").innerHTML;

const TOTAL_BLOBS = 3;

function setup() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
	camera.position.set(0, 0, -3);
	camera.lookAt(new THREE.Vector3());
	clock = new THREE.Clock();

	renderer = new THREE.WebGLRenderer({
		antialias: true,
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function init() {
	meshes = [];
	const smoothRadius = Math.random() < 0.5;
	for (let i = 0; i < COLORS_ARRAY.length; i++) {
		const geometry = new THREE.IcosahedronGeometry(1, 4);
		const baseGeo = new THREE.IcosahedronGeometry(1, i == 0 ? 3 : 2);
		const points = baseGeo.vertices;
		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			transparent: true,
			defines: {
				POINT_COUNT: points.length,
				PI: Math.PI,
			},
			extensions: {
				derivatives: true,
			},
			uniforms: {
				points: { value: points },
				dotColor: { value: new THREE.Color(COLORS_ARRAY[i]) },
				amplitude: { value: 0.3 + i * 0.2 },
				smoothRadius: { value: smoothRadius },
				radiusSmoothFactor: { value: 1 + i * 5 },
				time: { value: 0 },
			},
		});
		const mesh = new THREE.Mesh(geometry, material);
		mesh.scale.setScalar(0.35 + i * 0.3);
		meshes.push(mesh);
		scene.add(mesh);
	}
}

function draw() {
	renderer.setClearColor(BACKGROUND_COLOR, 1);

	const time = clock.getElapsedTime();

	if (meshes.length > 0) {
		meshes.forEach((mesh, index) => {
			const t = time + index * 100;
			mesh.material.uniforms.time.value = t;

			mesh.rotation.x = t * (meshes.length - index) * 0.2;
			mesh.rotation.y = -t * (meshes.length - index) * 0.2;
			mesh.rotation.z = t * (meshes.length - index) * 0.2;
		});
	}

	requestAnimationFrame(draw);
	renderer.render(scene, camera);
}

function fetchColorPalettes(callback = undefined) {
	fetch(FETCH_URL)
		.then((res) => res.json())
		.then((palettes) => {
		const randomIndex = Math.floor(Math.random() * palettes.length);
		BACKGROUND_COLOR = palettes[randomIndex][0];
		COLORS_ARRAY = palettes[randomIndex].splice(1, TOTAL_BLOBS);
	})
		.then(() => {
		if (typeof callback == "function") callback();
	})
		.catch((err) => {
		console.error("CHECK YOU CONNECTION! COULD NOT FETCH NEW PALLETES");
	});
}


function clearScene() {
	while (scene.children.length > 0) {
		scene.remove(scene.children[0]);
	}
}

function resize() {
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

window.addEventListener('DOMContentLoaded', () => {
	fetchColorPalettes(() => {
		setup();
		init();
		draw();
	});

	document.body.addEventListener("click", () => {
		fetchColorPalettes(() => {
			clearScene();
			init();
		});
	});

	window.addEventListener("resize", () => {
		resize();
	});
})


