import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer>
            <NavigationButton onClickHandler={() => navigateTo('myWork')} text="my work" classes="button-vertical-left button-vertical"/>
            <NavigationButton onClickHandler={() => navigateTo('contact')} text="contact" classes="
             button-vertical-right button-vertical"/>
            <NavigationButton onClickHandler={() => navigateTo('landing')} text="landing" classes="top-[25px]"/>
        </PageContainer>
    )
}

export default AboutMe
