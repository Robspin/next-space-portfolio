import dynamic from "next/dynamic"
import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"
import Scene from "@/components/canvas/Scene"

const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

const Landing = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer classes="translate-y-[-100vh]">
            <div className="flex flex-col mt-20 items-center">
                <div className="heading heading-name">Robin Steeman</div>
                <div className="heading heading-effect" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
                <div className="h-[250px] w-[250px] bg-gray mt-auto mb-28">
                    <Scene enableRotate={false} >
                        <Logo scale={0.7} position-z={1} position-y={0} />
                    </Scene>
                </div>
            </div>
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="about me" classes="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
