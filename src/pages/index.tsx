import dynamic from 'next/dynamic'
import Landing from '@/components/layout/Landing'
import AboutMe from "@/components/layout/AboutMe"
import {useEffect, useState} from "react"
import { PageTypes, NavigationClassTypes } from "@/types"

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

export default function Page(props) {
    const [page, setPage] = useState<PageTypes>('landing')
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
                break
            case "myWork":
                break
        }

    }

    useEffect(() => {
        console.log(page)
    }, [])

    return (
      <div className="absolute">
          <div className={`page ${navigationClass}`}>
            <Landing navigateTo={navigateTo} />
            <AboutMe navigateTo={navigateTo} />
          </div>
      </div>
    )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
