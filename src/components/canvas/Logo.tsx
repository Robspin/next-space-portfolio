import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Line, useCursor } from '@react-three/drei'

export default function Logo({ clickHandler, ...props }) {
    const mesh = useRef(null)
    const [hovered, hover] = useState(false)

    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    const mainColor = '#1fb2f5'
    const hoverColor = '#fff'

    useCursor(hovered)
    useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    // mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.y += 0.008
    // mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    // mesh.current.rotation.z -= delta / 4
    })

    return (
        <group ref={mesh} {...props} onClick={() => clickHandler()} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
          {/* @ts-ignore */}
          <Line worldUnits points={points} color={hovered ? hoverColor : mainColor} lineWidth={0.15} />
          {/* @ts-ignore */}
          <Line worldUnits points={points} color={hovered ? hoverColor : mainColor} lineWidth={0.15} rotation={[0, 0, 1]} />
          {/* @ts-ignore */}
          <Line worldUnits points={points} color={hovered ? hoverColor : mainColor} lineWidth={0.15} rotation={[0, 0, -1]} />
          <mesh>
            <sphereGeometry args={[0.55, 64, 64]} />
            <meshPhysicalMaterial roughness={0} color={hovered ? hoverColor : mainColor} />
          </mesh>
        </group>
    )
}
