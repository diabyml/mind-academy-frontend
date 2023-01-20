import React from "react";
import AppLayout from '../components/app-layout';
import { withApollo } from "../utils/withApollo";

interface Props {
}

const Profile = () => {
    return <AppLayout>
        Profile
    </AppLayout>
}

export default withApollo({ssr:true})(Profile);