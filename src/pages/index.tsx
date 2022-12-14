import { useState } from "react"
import dynamic from 'next/dynamic'

import { PageTypes, NavigationClassTypes } from "@/types"
import Landing from '@/components/layout/Landing'
import AboutMe from "@/components/layout/AboutMe"
import MyWork from "@/components/layout/MyWork"
import Contact from "@/components/layout/Contact"
import MovingStars from "@/components/canvas/Stars"
import {Stars} from "@react-three/drei"

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

const Index = () => {
    const [navigationClass, setNavigationClass] = useState<NavigationClassTypes>('move-up')

    const navigateTo = (page: PageTypes) => {
        switch (page) {
            case "landing":
                setNavigationClass('move-up')
                break
            case "aboutMe":
                setNavigationClass('')
                break
            case "contact":
                setNavigationClass('move-left')
                break
            case "myWork":
                setNavigationClass('move-right')
                break
        }

    }

    return (
      <div className="absolute">
          <div className={`page ${navigationClass}`}>
            <Landing navigateTo={navigateTo} />
            <AboutMe navigateTo={navigateTo} />
            <MyWork navigateTo={navigateTo} />
            <Contact navigateTo={navigateTo} />
          </div>
      </div>
    )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Index.canvas = (props) => (
    <>
        <Stars count={100} />
        <MovingStars />
    </>
)

export default Index
