import Layout from "../components/Layout";
import { Profile, Proposal, Insight, EmailSuggestions, DiskProfile, OceanProfile } from "../components";
import InputUrl from "../components/InputUrl";
import Section from "../components/Section";

const Reports = () => {
    return (
        <Layout>
            <Section>
            <InputUrl className='my-8 md:my-16' />
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