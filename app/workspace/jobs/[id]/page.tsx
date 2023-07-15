// React
import { FC } from "react";

type PageProps = {
    params: {
        id: string;
    }
}

const JobManager = ({ params: { id } }: PageProps) => {

    return (
        <>
            job manager
        </>
    )
}

export default JobManager;