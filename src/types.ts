import { Dispatch, SetStateAction } from "react"

export type PageTypes = 'landing' | 'aboutMe' | 'myWork' | 'contact'
export type NavigationClassTypes = 'move-up' | 'move-down' | 'move-center' | 'move-left' | 'move-right' | ''

export type PageProps = {
    // setPage: Dispatch<SetStateAction<PageTypes>>
    navigateTo: any
}
