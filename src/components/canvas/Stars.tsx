import { useEffect, useMemo, useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import starPng from '../../../public/img/star.png'

const Stars = ({ startingZ }: { startingZ: number }) => {
    const count = 1000
    const starSprite = useLoader(TextureLoader, starPng.src)
    const starsRef = useRef<undefined | any>()

    useFrame(({ camera}) => {
        starsRef.current.position.z += 0.08
        // camera.rotation.z += 0.01
        // starsRef.current.rotation.z += 0.0001

        if (starsRef.current.position.z > 400) {
            starsRef.current.position.z = -800
        }
    })

    const positions = useMemo(() => {
        const positions = []

        for (let xi = 0; xi < count; xi++) {
            const vertice = () => Math.random() * 600 - 300
            positions.push(vertice(), vertice(), vertice())
        }

        return new Float32Array(positions)
    }, [count])

    useEffect(() => {
        starsRef.current.position.z = startingZ
    }, [])

    return (
        <points ref={starsRef}>
            <bufferGeometry attach="geometry" >
                <bufferAttribute
                    attach={'attributes-position'}
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" map={starSprite} color={0xaaaaaa} size={0.8} transparent={false}
                            alphaTest={0.5} opacity={1.0} />
        </points>
    )
}

const StarsLoop = () => {

    return (
        <>
            <Stars startingZ={0} />
            <Stars startingZ={-400} />
            <Stars startingZ={-800} />
        </>
    )
}

export default StarsLoop
