import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"


const Landing = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer classes="translate-y-[-100vh]">
            <div className="flex flex-col mt-20">
                <div className="heading heading-name">Robin Steeman</div>
                <div className="heading heading-effect" data-text="WEB DEVELOPER">WEB DEVELOPER</div>
            </div>
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="about me" classes="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
