import Layout from "@/components/layout"
import { useSession } from "next-auth/react"

export default function Home() {
  const {data:session} = useSession();
  console.log(session)
      return (
        <>
          <Layout>
              <div className="text-blue-900">
                <p className="pl-2">Hello, {session?.user?.name}</p>
                <img src={session?.user?.image} alt="User Image" className="m-2 rounded-full"></img>
              </div>
          </Layout>
        </>
  )
}
