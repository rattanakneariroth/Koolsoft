import MyProfilePic from "../components/MyProfilePic";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";




export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <Navbar/>
      <MyProfilePic/>
      <p className="mt-12 mb-12 text-3xl text-center text-emerald-500">
        Hello and Welcome 🌱&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Roth</span>
        </span>
      </p>
      <Posts/>


      
    </main>
  )
}
