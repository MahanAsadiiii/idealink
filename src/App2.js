import { CopyRight, Navbar, Profile, Proposal, Insight, EmailSuggestions ,DiskProfile ,OceanProfile} from "./components";
import InputUrl from "./components/InputUrl";

function App2() {
  return (
    <div className="App">
      <Navbar />
      <InputUrl className='my-[60px] w-[60vw]' />
      <Profile />
      <Proposal/>
      <Insight/>
      <EmailSuggestions/>
      <DiskProfile />
      <OceanProfile/>
      <CopyRight />
    </div>
  )
}

export default App2