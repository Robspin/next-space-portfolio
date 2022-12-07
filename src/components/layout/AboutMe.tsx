import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer>
            <NavigationButton onClickHandler={() => navigateTo('myWork')} text="my work" classes="left-[5px] top-[40vh] button-vertical mx-5"/>
            <NavigationButton onClickHandler={() => navigateTo('contact')} text="contact" classes="right-[5px] top-[40vh] button-vertical mx-5"/>
            <NavigationButton onClickHandler={() => navigateTo('landing')} text="landing" classes="top-[25px]"/>
        </PageContainer>
    )
}

export default AboutMe
