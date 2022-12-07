import NavigationButton from "@/components/NavigationButton"
import PageContainer from "@/components/layout/PageContainer"
import { PageProps } from "@/types"

const Contact = ({ navigateTo }: PageProps) => {
    return (
        <PageContainer classes="translate-x-[100vw]">
            <NavigationButton onClickHandler={() => navigateTo('aboutMe')} text="contact" classes="left-[5px] top-[40vh] button-vertical mx-5"/>
        </PageContainer>
    )
}

export default Contact
