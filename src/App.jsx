import Navbar from './Components/Navbar'
import TopHeader from './Components/TopHeader'
import MainHeader from './Components/MainHeader'
import SidebarMenu from './Components/SidebarMenu'
import DepartmentContent from './Components/DepartmentContent'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <TopHeader />
      <div className="sticky top-0 z-50 bg-white shadow-sm">

      <MainHeader />
      <Navbar/>
      </div>
      <div className=' w-full pt-10 pb-10 pr-20 text-2xl'>
        <h1 className=' w-full text-right'>:: Department of Computer Science and Engineering ::</h1>
      </div>
      <main className="max-w-7xl mx-auto flex gap-8 px-4 py-8">
        <SidebarMenu />
        <DepartmentContent />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
