import { Profile, Proposal, Insight, EmailSuggestions, DiskProfile, OceanProfile ,Layout} from "../components";
import InputUrl from "../components/InputUrl";
import {Section} from "../components/index"

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