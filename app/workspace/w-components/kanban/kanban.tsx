'use client';

// React
import { FC, HTMLAttributes, useState } from "react";

// Libs
import { cn } from "@/lib/utils";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

// UI
import { ScrollArea } from "@/components/ui/scroll-area";

import { KanbanColumn } from "./kanban-column";

interface KanbanBoardProps extends HTMLAttributes<HTMLDivElement> { }

const KanbanBoard: FC<KanbanBoardProps> = ({ className, ...props }) => {

    // States
    //
    const [completed, setCompleted] = useState([
        {
            title: 'task 1'
        }
    ]);
    const [incomplete, setIncomplete] = useState([]);

    // handleOnDragEnd
    //
    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source } = result;
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div {...props} className={cn("kanban-board", className)}>

                <h2>Recruitment Pipeline</h2>

                <div className="flex gap-4 overflow-x-auto py-4">
                    <KanbanColumn
                        id="boardOne"
                        title="TO DO"
                    />
                    <KanbanColumn
                        id="boardtwo"
                        title="DONE"
                    />
                    {/* 
                    <KanbanColumn />
                    <KanbanColumn />
                    <KanbanColumn />
                    <KanbanColumn />
                    <KanbanColumn />
                    <KanbanColumn />
                    <KanbanColumn /> */}
                </div>

            </div>

        </DragDropContext>
    )
}

export { KanbanBoard }