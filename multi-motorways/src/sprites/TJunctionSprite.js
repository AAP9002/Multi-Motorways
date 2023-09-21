import { useRef } from "react";
import { useGameObject } from "../components/useGameObject";
import useUpdateBoundingBox from "./useUpdateBoundingBox";
import { useTexture } from "@react-three/drei";

function TJunctionSprite({position, rotation}) {
    const state = useGameObject();

    const texture = useTexture("textures/TJunction.jpg");

    const mesh = useRef(null);
    useUpdateBoundingBox({ id: state?.id, mesh: mesh.current });
    
    return (<>
        <mesh position={(state?.position) ? state.position : position} rotation-z={rotation} ref={mesh} name={state?.name} scale={4}>
            <boxGeometry args={[0.25, 0.25, 0.02]} />
            <meshBasicMaterial attach="material-0" color="#353535" />
            <meshBasicMaterial attach="material-1" color="#353535" />
            <meshBasicMaterial attach="material-2" color="#353535" />
            <meshBasicMaterial attach="material-3" color="#353535" />
            <meshBasicMaterial attach="material-4" map={texture} />
            <meshBasicMaterial attach="material-5" color="#353535"  />
        </mesh>
        </>
    )
}

export default TJunctionSprite;