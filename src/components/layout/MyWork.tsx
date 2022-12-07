import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"

const MyWork = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer classes="translate-x-[-100vw]">
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="contact" classes="right-[5px] top-[40vh] button-vertical mx-5"/>
        </PageContainer>
    )
}

export default MyWork
