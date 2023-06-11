import Layout from "../components/Layout";
import { Profile, Proposal, Insight, EmailSuggestions, DiskProfile, OceanProfile } from "../components";
import InputUrl from "../components/InputUrl";

const Reports = () => {
    return (
        <Layout>
            <InputUrl className='mt-[60px] mb-[67px] w-full' />
            <Profile />
            <Proposal />
            <Insight />
            <EmailSuggestions />
            <DiskProfile />
            <OceanProfile />
        </Layout>
    )
}

export default Reports