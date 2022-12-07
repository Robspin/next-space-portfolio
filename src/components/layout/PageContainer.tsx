import { ReactNode } from "react"

type Props = {
    children: ReactNode
    classes?: string
}

const PageContainer = ({ children, classes = '' }: Props) => (
    <div className={`absolute flex h-screen w-screen justify-center p-6 ${classes}`}>
        {children}
    </div>
)

export default PageContainer
