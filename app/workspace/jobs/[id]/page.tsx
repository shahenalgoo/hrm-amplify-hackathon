// React
import { FC } from "react";
import { KanbanBoard } from "../../w-components/kanban/kanban";

type PageProps = {
    params: {
        id: string;
    }
}

const JobManager = ({ params: { id } }: PageProps) => {

    return (
        <>
            <KanbanBoard />
        </>
    )
}

export default JobManager;