// src/Scene.tsx
import { Html, useProgress } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress.toFixed(2)} % loaded</Html>;
}

const Model: React.FC<{ model: any; color: string }> = ({ model, color }) => {
    model.rotation.y += 1;
    useFrame(() => {
        if (model) {
            model.rotation.x += 0.01; // Auto-rotate the model
        }
    });

    // Change color of the model
    model.traverse((child) => {
        if (child.isMesh) {
            child.material = new MeshStandardMaterial({ color }); // Use passed color
        }
    });

    return <primitive object={model} />;
};

interface SceneProps {
    color: string;
    modelPath: string;
    position: [number, number, number]; // Camera position as a tuple
}

const Scene: React.FC<SceneProps> = ({ color, modelPath, position }) => {
    const gltf = useLoader(GLTFLoader, modelPath);

    return (
        <Suspense fallback={<Loader />}>
            <Canvas camera={{ position }}> {/* Use the passed camera position */}
                {/* Add lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={position} intensity={1} />
                {/* Rotate the loaded model */}
                <Model model={gltf.scene} color={color} />
            </Canvas>
        </Suspense>
    );
};

export default Scene;
