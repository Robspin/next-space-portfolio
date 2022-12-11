import {useRef, forwardRef, ReactNode} from 'react'
import { mergeRefs } from 'react-merge-refs'

type Props = {
  children: ReactNode
  props?: {}
}

const Layout = forwardRef(({ children, ...props }: Props, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-black text-gray-50'>
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
