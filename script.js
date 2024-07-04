import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js"
// import { RGBELoader } from "three/examples/jsm/Addons.js"
// import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { FontLoader } from "three/examples/jsm/Addons.js"
import { TTFLoader } from "three/examples/jsm/Addons.js"
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import { BufferGeometry } from "three"

// const BufferGeometry=THREE.BufferGeometry()





let canvas=document.querySelector(".canvas")
const gui=new GUI()
const DebugObject={}






// ENVIROMENT MAP


// TEXTURES IN THREE.JS 


// const image=new Image()
// const texture=new THREE.Texture(image)

// image.onload=()=>{

//     // Converting image into Texture
//     // const texture=new THREE.Texture(image)
//     // console.log(texture)

//     texture.needsUpdate=true
// }
// image.src='/paris-bilal-UnKJZHBzX30-unsplash.jpg'





// Creating Scene

const scene=new THREE.Scene()


// const helper=new THREE.AxesHelper()
// scene.add(helper)







// const values={
//     x:0,
//     y:0
// }
  

// window.addEventListener("mousemove",(dets)=>{
//     values.x=dets.clientX/sizes.width-0.5
//     values.y= - (dets.clientX/sizes.width-0.5)
// })





// const texture=Loader.load('./sunmap.jpg',
//     ()=>{
//         console.log('loaded')
//     },
//     ()=>{
//         console.log('PROCESSING')
//     },
//     ()=>{
//         console.log('ERROR')
//     }
// )





// LOADING MANAGER

// const manager=new THREE.LoadingManager()

// manager.onStart=()=>{
//     console.log("start")
// }
// manager.onLoad=()=>{
//     console.log("load")
// }
// manager.onProgress=()=>{
//     console.log("Progress")
// }
// manager.onError=()=>{
//     console.log("Error")
// }





// IMAGE TEXTURE LOADER INITIALIZATION

const Loader=new THREE.TextureLoader()
const sun=Loader.load('./sunmap.jpg')
const one=Loader.load('./one.jpg')
const two=Loader.load('./two.jpg')
const three=Loader.load('./three.jpg')
const four=Loader.load('./four.jpg')
const five=Loader.load('./five.jpg')
const six=Loader.load('./six.jpg')
const seven=Loader.load('./seven.jpg')
const eight=Loader.load('./eight.jpg')
const hdr=Loader.load('./hdr.jpg')
const hello=Loader.load('./hello.crdownload')
const back=Loader.load('./back.hdr')








// TRANSFORM TEXTURES

// seven.repeat.x=2
// seven.repeat.y=3

// seven.wrapS=THREE.RepeatWrapping
// seven.wrapT=THREE.RepeatWrapping

// seven.wrapS=THREE.MirroredRepeatWrapping
// seven.wrapT=THREE.MirroredRepeatWrapping


// seven.offset.x=0.5
// seven.offset.y=0.5



// FILTERS AND MIP-MAPPING

// seven.generateMipmaps=false

// seven.minFilter= THREE.NearestFilter
// seven.magFilter= THREE.LinearFilter
// seven.minFilter= THREE.LinearFilter


// seven.colorSpace=THREE.SRGBColorSpace






DebugObject.color="#2ef5b9" 

//Font Loader and Geometry 
const fontLoader=new FontLoader()
fontLoader.load(
    './helvetiker_regular.typeface.json',
    (font)=>{
        const textgeometry=new TextGeometry(
            'NaqiHassan',{
                font:font,
                size:0.3,
                depth:0.1,
                curveSegments:5,
                bevelEnabled:true,
                bevelThickness:0.01,
                bevelSize: 0.01,
                bevelOffset: 0,
                bevelSegments: 3

            }
        )
        // textgeometry.computeBoundingBox()
        
        // textgeometry.translate(

        //     - (textgeometry.boundingBox.max.x-0.01) *0.5,
        //     - (textgeometry.boundingBox.max.y-0.01) *0.5,
        //     - (textgeometry.boundingBox.max.z-0.03) *0.5
            

        // )

        textgeometry.center()


        const material=new THREE.MeshNormalMaterial()
        // material.mat=seven
        // textMaterial.wireframe=true
        material.side=THREE.DoubleSide
        // textMaterial.map=seven
        const text=new THREE.Mesh(textgeometry,material)
        scene.add(text)


        for (let i = 0; i < 500; i++) {
            
            const donutGeometry=new THREE.TorusKnotGeometry(0.2,0.05, 100, 16 )
            // const material=new THREE.MeshMatcapMaterial({
            //     matcap:seven
            // })
            const DonutMesh=new THREE.Mesh(donutGeometry,material)

            DonutMesh.position.x=(Math.random()-0.5)*10
            DonutMesh.position.y=(Math.random()-0.5)*10
            DonutMesh.position.z=(Math.random()-0.5)*10

            DonutMesh.rotation.x=Math.random()*Math.PI
            DonutMesh.rotation.y=Math.random()*Math.PI

            const scale=Math.random()
            DonutMesh.scale.set(scale,scale,scale)

            scene.add(DonutMesh)
            
        }


        
    }
)

// const geometry=new THREE.BoxGeometry(1,1,1)
// const geometry=new THREE.BoxGeometry(1,1,1)


// const material=new THREE.MeshBasicMaterial({
//     color:DebugObject.color,
//     // map:Loader.load("./sunmap.jpg")

//     map:seven,

//     //use that image we have turned into texture

//     // map:texture,

     
// })


// const mesh=new THREE.Mesh(geometry,material)
// scene.add(mesh)


const group=new THREE.Group()
// scene.add(group)





// MESH BASIC MATERIAL:

const material=new THREE.MeshBasicMaterial()

material.map=seven

// material.color=new THREE.Color("white")


// material.transparent=true
// material.opacity=1
// material.alphaMap=eight


// material.side=THREE.DoubleSide
// material.side=THREE.FrontSide
// material.side=THREE.BackSide






// mesh normal material:

// const material=new THREE.MeshNormalMaterial()
// material.side=THREE.DoubleSide
// material.flatShading=true







// Mesh Matcap material

// const material=new THREE.MeshMatcapMaterial()
// material.matcap=seven
// material.side=THREE.DoubleSide










// Mesh Lambert Material


// const material=new THREE.MeshLambertMaterial()
/**
 * In Lambert material we need lights to see
 *  our geometry, we have created.
 * 
 */













// MESH Phong Material 

// const material=new THREE.MeshPhongMaterial()
// material.shininess=100
// material.specular=new THREE.Color(0x1188ff)














// Mesh Toon Material
// const material=new THREE.MeshToonMaterial()
// material.side=THREE.DoubleSide
// one.minFilter=THREE.NearestFilter
// one.magFilter=THREE.NearestFilter
// one.generateMipmaps=false
// material.gradientMap = one















// Mesh Standard Material
// const material=new THREE.MeshStandardMaterial()
// material.map=seven
// material.side=THREE.DoubleSide
// material.metalness=0.45
// material.roughness=0.65

// gui.add(material,'metalness').min(0).max(1).step(0.0001)
// gui.add(material,'roughness').min(0).max(1).step(0.0001)




















// const shape1=new THREE.Mesh(
//     new THREE.SphereGeometry( 0.5,16,16),
//     material
    
// )
// shape1.position.x=-2
// group.add(shape1)

const shape2=new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1 ),
    material
    
)
group.add(shape2)


// const shape3=new THREE.Mesh(
//     new THREE.TorusGeometry( .5, .2, 16, 100 ),
//     material
    
// )
// shape3.position.x=2
// group.add(shape3)









// LIGHTS FOR LAMBERT MATERIAL

// const lights=new THREE.AmbientLight("white",1)
// scene.add(lights)

// const pointLight=new THREE.PointLight("white",30)
// pointLight.position.x=2
// pointLight.position.y=3
// pointLight.position.z=4
// scene.add(pointLight)





































const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}








// Enviroment (Background)
// const rgbeLoader=new RGBELoader()
// rgbeLoader.load(seven,(enviromentMap)=>{
//   enviromentMap.mapping = THREE.EquirectangularReflectionMapping
//   scene.background=enviromentMap
//   scene.environment = enviromentMap
// })











const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
scene.add(camera)
camera.position.z=3


// CONTROLS
const controls=new OrbitControls(camera,canvas)
controls.enableDamping=true

// GUI

// gui.add(mesh.position,'x')
// .min(-3)
// .max(3)
// .step(0.01)
// .name("position X")

gui.add(material,'visible')
gui.add(material,'wireframe')



// DebugObject.division=1
// gui.add(DebugObject,'division')
// .min(1)
// .max(50)
// .step(1)
// .name("sub divisions")
// .onFinishChange(
//     ()=>{
//         mesh.geometry=new THREE.BoxGeometry(1,1,1,DebugObject.division,DebugObject.division,DebugObject.division)
//     }
// )



gui.addColor(DebugObject,'color')
.onChange(()=>{
    material.color.set(DebugObject.color)
})



const renderer=new THREE.WebGLRenderer( {
    canvas:canvas
})
renderer.setSize(sizes.width,sizes.height)


const clock=new THREE.Clock()

function tick() {
    const elapsed=clock.getElapsedTime()

    // shape1.rotation.y=0.1*elapsed
    shape2.rotation.y=0.1*elapsed
    // shape3.rotation.y=0.1*elapsed

    // shape1.rotation.x=-0.15*elapsed
    shape2.rotation.x=-0.15*elapsed
    // shape3.rotation.x=-0.15*elapsed



    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(tick)
}
tick()




window.addEventListener("resize",()=>{
    sizes.width=window.innerWidth
    sizes.height=window.innerHeight

    //Camera Update
    camera.aspect=sizes.width/sizes.height
    camera.updateProjectionMatrix()

   

    renderer.setSize(sizes.width,sizes.height)
})


