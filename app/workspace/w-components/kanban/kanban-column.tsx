'use client';

// React
import { FC, HTMLAttributes, useState } from "react";

// Libs
import { cn } from "@/lib/utils";
import { Droppable } from "react-beautiful-dnd";
import { KanbanCard } from "./kanban-card";
import { candidates } from "@/data/candidates";

interface KanbanColumnProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    title: string;
}

const KanbanColumn: FC<KanbanColumnProps> = ({ className, id, title, ...props }) => {

    // States
    //
    const [completed, setCompleted] = useState([]);
    // const [incomplete, setIncomplete] = useState([]);

    return (
        <Droppable droppableId={id} direction="vertical" type="column">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="shrink-0 w-60 min-h-[600px] space-y-2 p-2 bg-white rounded-xl"
                >
                    <h4>{title}</h4>

                    {candidates.map((item, index) =>
                        <KanbanCard
                            key={item.id}
                            id={item.id}
                            candidate={item}
                            index={index}
                        />
                    )}
                </div>
            )}
        </Droppable>
    )
}

export { KanbanColumn }