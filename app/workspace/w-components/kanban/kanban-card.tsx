// React
import { FC, HTMLAttributes, useState } from "react";

// Libs
import { cn } from "@/lib/utils";
import { Draggable } from "react-beautiful-dnd";

interface KanbanCardProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    candidate: any;
    index: number;
}

const KanbanCard: FC<KanbanCardProps> = ({ className, id, candidate, index, ...props }) => {


    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    {...props}
                    className={cn("kanban-card bg-black text-white", className)}
                >
                    <div className='flex gap-1'>
                        {candidate.name}
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export { KanbanCard }