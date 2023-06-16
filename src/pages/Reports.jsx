import Layout from "../components/Layout";
import { Profile, Proposal, Insight, EmailSuggestions, DiskProfile, OceanProfile } from "../components";
import InputUrl from "../components/InputUrl";
import Section from "../components/Section";

const Reports = () => {
    return (
        <Layout>
            <Section>
            <InputUrl className='mt-[60px] mb-[67px]' />
            </Section>
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