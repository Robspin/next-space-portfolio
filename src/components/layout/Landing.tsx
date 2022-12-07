import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"


const Landing = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer classes="translate-y-[-100vh]">
            {/*<div>*/}
            {/*    Landing*/}
            {/*</div>*/}
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="about me" classes="bottom-[50px]"/>
        </PageContainer>
    )
}

export default Landing
