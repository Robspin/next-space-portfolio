import dynamic from "next/dynamic"
import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"
import Scene from "@/components/canvas/Scene"
import { useState } from "react"

const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

const devTechnologies = ['ThreeJS', 'Deno', 'Fresh', 'Python', 'Node', 'Tailwind', 'Typescript', 'Docker', 'React', 'Next', 'React Native']

type TechWords = {
    text: string
    x: number
    y: number
    id: string
}

const pickRandomNumber = (number: number) => Math.ceil(Math.random() * number)
const pickRandomFromRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const Landing = ({ navigateTo }: PageProps) => {
    const [techWords, setTechWords] = useState<TechWords[]>([])

    const showRandomDevTech = () => {
        const randomTech = devTechnologies[pickRandomNumber(devTechnologies.length - 1)]

        const coinFlip = pickRandomNumber(2)
        const rangeHorizontal = (window.innerWidth / 2)
        const rangeVertical = window.innerHeight - 280
        const id = `${randomTech} - ${pickRandomFromRange(0, 50000)}`

        const techWord: TechWords = {
            text: randomTech,
            x: coinFlip > 1 ? pickRandomFromRange(rangeHorizontal + 170, window.innerWidth) - 70 : pickRandomFromRange(10, rangeHorizontal - 150),
            y: pickRandomFromRange(50, rangeVertical) + 220,
            id
        }

        setTechWords(prev => [...prev, techWord])
        setTimeout(() => document.getElementById(id).remove(), 2000)
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
            {techWords.map((techWord, i) => (<div key={i} id={techWord.id} style={{ top: techWord.y, left: techWord.x }} className="absolute select-none animate-[techWordAnimation_2s_ease-out]" >{techWord.text}</div>))}
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="about me" classes="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
