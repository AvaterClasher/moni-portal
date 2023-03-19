import { OrbitControls, useTexture } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'


export default function Experience()
{
    const {nodes} =useGLTF('./model/portal.glb')
    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false

    return <>
        <color args={['#201919']} attach="background"/>
        <OrbitControls makeDefault />
        <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={bakedTexture} />
        </mesh>

    </>
}