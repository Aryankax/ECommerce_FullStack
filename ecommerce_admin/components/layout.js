import Nav from '@/components/nav'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Layout({children}) {
  const {data: session} = useSession()
  if(!session){
      return (
        <>
          <div className={'bg-blue-900 w-screen h-screen flex items-center'}>
          <div >
            <button className='bg-white p-2 rounded-lg' onClick={()=> signIn('google')}>Login With Google</button>
          </div>
          </div>
        </>
      )
  }
  return(
    <>
    <div className='bg-blue-900 w-screen h-screen flex'>
    <Nav/>
    <div className='bg-white flex-grow mr-1 mt-1 rounded-lg'>
    <div>
        {children}
    </div>
    </div>
    </div>
    </>
  )
}
