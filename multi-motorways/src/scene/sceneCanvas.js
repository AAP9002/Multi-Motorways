import RoadTile from "./roadTiles";
import GroundMesh from './groundMesh';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import CameraController from "./CameraController";
import HitBoxGrid from "./HitBoxGrid";

import { useRecoilValue } from "recoil";
import { cameraPosition } from "../recoil/atom/cameraAtoms";
import { BasicCar, CirclingCar } from "../entities/CarEntities";
import { OrbitControls } from '@react-three/drei'
import { CornerJunction, HorizontalRoad, VerticalRoad } from "../entities/JunctionEntities";
import { House } from "../entities/HouseEntities";

import RoadPlacement from "./roadPlacement";
// import { useFrame } from "@react-three/fiber";
import { MOUSE, AxesHelper, Vector3 } from 'three'
const SceneCanvas = () => {
    const cameraPos = useRecoilValue(cameraPosition);

    return (
        <Canvas camera={{ position: cameraPos, fov: 20, up: new Vector3(0,0,1)}}>
            <ambientLight intensity={0.7 } />

            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <GroundMesh />
            <RoadTile c1={[-50, -50]} c2={[50, 50]}></RoadTile>
            <HitBoxGrid></HitBoxGrid>
            <RoadPlacement></RoadPlacement>

            <CirclingCar position={[1, 1.3, 1]} />
            <BasicCar position={[-1, 1, 1]} />
            <House position={[0.7, 0, 1]} />

            {/* <VerticalRoad position={[1.5, 2.0, 1]} />
            <VerticalRoad position={[1.5, 1.75, 1]} /> */}
            {/* <VerticalRoad position={[1.5, 1.5, 1]} /> */}
            {/* <VerticalRoad position={[1.5, 1.25, 1]} /> */}
            <VerticalRoad position={[1.5, 1.0, 1]} />
            {/* <VerticalRoad position={[1.5, 0.75, 1]} /> */}
            




            <HorizontalRoad position={[1.5, 1.25, 1]} />

            <HorizontalRoad position={[1.25, 1.25, 1]} />
            <HorizontalRoad position={[1.25, 1.25, 1]} />

            <HorizontalRoad position={[1.0, 1.25, 1]} />
            <VerticalRoad position={[0.75, 1.25, 1]} />


            <CornerJunction position={[0, 1.0, 1]} />

{/* 
            <VerticalRoad position={[0.75, 1.0, 1]} />
            <VerticalRoad position={[0.75, 0.75, 1]} />
            <VerticalRoad position={[0.75, 0.5, 1]} />
            <VerticalRoad position={[0.75, 0.25, 1]} /> */}

            {/* <HorizontalRoad position={[0.75, 0, 1]} /> */}

            {/* <CornerJunction position={[0, 0, 1]} /> */}


            <OrbitControls mouseButtons={{ LEFT: MOUSE.PAN, RIGHT: MOUSE.ROTATE }} zoomSpeed={4} maxPolarAngle={4*Math.PI/9} maxDistance={50} minDistance={10}/>
            <primitive object={new AxesHelper(10)} />
        </Canvas>
    );
}

export default SceneCanvas;