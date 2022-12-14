import dynamic from "next/dynamic"
import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"
import Scene from "@/components/canvas/Scene"
import { useState } from "react"

const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

const devTechnologies = ['ThreeJS', 'Deno', 'Fresh', 'Python', 'Node', 'Tailwind', 'Typescript', 'Docker']

type TechWords = {
    text: string
    x: number
    y: number
}

const pickRandomNumber = (number: number) => Math.ceil(Math.random() * number)

const Landing = ({ navigateTo }: PageProps) => {
    const [techWords, setTechWords] = useState<TechWords[]>([])

    const showRandomDevTech = () => {
        const randomTech = devTechnologies[pickRandomNumber(devTechnologies.length - 1)]

        const coinFlip = pickRandomNumber(2)
        const innerWidth = (window.innerWidth / coinFlip)

        const widthOffset = coinFlip > 1 ? innerWidth - 350 : innerWidth + 350
        const innerHeight = window.innerHeight - 420

        const techWord: TechWords = {
            text: randomTech,
            x: pickRandomNumber(widthOffset),
            y: pickRandomNumber(innerHeight) + 280
        }

        console.log(coinFlip, innerWidth, widthOffset)

        setTechWords(prev => [...prev, techWord])
    }

    return (
        <PageContainer classes="translate-y-[-100vh]">
            <div className="flex flex-col mt-20 items-center">
                <div className="heading heading-name">Robin Steeman</div>
                <div className="heading heading-effect" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
                <div className="h-[250px] w-[250px] bg-gray mt-auto mb-28">
                    <Scene enableRotate={false} >
                        <Logo scale={0.7} position-z={1} clickHandler={showRandomDevTech} />
                    </Scene>
                </div>
            </div>
            {techWords.map((techWord, i) => (<div key={i} style={{ top: techWord.y, left: techWord.x }} className="absolute select-none" >{techWord.text}</div>))}
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="about me" classes="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
