import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"

const AboutMe = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer>
            {/*<div>*/}
            {/*    Landing*/}
            {/*</div>*/}
            <NavigationButton onClickHandler={() => navigateTo('landing')} text="landing" classes="top-[25px]"/>
        </PageContainer>
    )
}

export default AboutMe
