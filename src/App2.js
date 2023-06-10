import { CopyRight, Navbar, Profile, Proposal, Insight, EmailSuggestions ,DiskProfile ,OceanProfile} from "./components";
import InputUrl from "./components/InputUrl";

function App2() {
  return (
    <div className="App">
      <Navbar />
      <InputUrl className='mt-[60px] mb-[67px] w-[1032px]' />
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