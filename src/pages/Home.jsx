/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Loader from "../components/Loader"
import { Island } from "../models/Island"
import Sky from "../models/Sky"
import Bird from "../models/Bird"
import Plane from "../models/Plane"

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1,4.7,0];

        if (window.innerWidth < 640) {
            screenScale = [0.9, 0.9, 0.9];
        } else{
            screenScale = [1,1,1];
        }

        return [screenScale, screenPosition, rotation];
    } 

    const adjustPlaceForScreenSize = () => {
        let screenScale, screenPosition; 

        if (window.innerWidth < 768) {
            screenScale = [1.5,1.5,1.5];
            screenPosition = [0, -1.5, 0];
        } else{
            screenScale = [3,3,3];
            screenPosition = [0, -4,-4];
        }

        return [screenScale, screenPosition];
    } 

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaceForScreenSize();

  return (
    <section className="w-full h-screen relative">
        {/* 
            <div className ="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"
                POP UP
            </div>
        */}
        <Canvas 
            className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{near:0.1, far:1000}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight position={[1,1,1]} intensity={1}/>  //CONTROLS THE SUNLIGHT
                <ambientLight intensity={0.1}/> // MAKES ALL THE OBJECT IN THE SCENE BRIGHTER WITHOUT SHADOWS
                {/* <pointLight/> // LIGHT THAT COMES FROM A SINGLE POINT IN ALL DIRECTIONS, HERE IT IS NOT REQ BCZ WE ARE OUT TO SUNLIGHT*/}
                {/* <spotLight/> // LIGHT THAT COMES FROM A SINGLE POINT IN A SINGLE DIRECTION(IN THE SHAPE OF CONE), NOT REQ HERE. */}
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} /> // LIGHT THAT COMES FROM THE SK, ADDS A GRADIENT COLOR TO THE OBJECTS IN THE SCENE
                
                <Bird/>
                <Sky/>
                <Island
                    scale={islandScale}
                    position={islandPosition}
                    rotation={islandRotation}
                    setIsRotating={setIsRotating}
                    isRotating={isRotating}
                />
                <Plane
                    isRotating={isRotating}
                    scale={planeScale}
                    position={planePosition}
                    rotation={[0,20,0]}
                />

            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home