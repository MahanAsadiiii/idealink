import { CopyRight, Navbar, Profile, Proposal, Insight, EmailSuggestions ,DiskProfile ,OceanProfile, Footer} from "./components";
import InputUrl from "./components/InputUrl";

function App2() {
  return (
    <div className="App">
      <Navbar />
      <InputUrl className='mt-[60px] mb-[67px] w-full' />
      <Profile />
      <Proposal/>
      <Insight/>
      <EmailSuggestions/>
      <DiskProfile />
      <OceanProfile/>
      <Footer/>
      <CopyRight />
    </div>
  )
}

export default App2