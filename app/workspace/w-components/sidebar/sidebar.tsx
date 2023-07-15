// React
import { FC, HTMLAttributes } from "react";

// Libs
import { cn } from "@/lib/utils";

// Sidebar
import SidebarJobs from "./sidebar-jobs";

// UI
import { ScrollArea } from "@/components/ui/scroll-area";



interface SidebarProps extends HTMLAttributes<HTMLDivElement> { }

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
    return (
        <aside {...props} className={cn("sidebar fixed top-0 left-0 z-30 w-64 h-full bg-white", className)}>
            <ScrollArea className="w-full h-full p-2">
                <SidebarJobs />
            </ScrollArea>
        </aside>
    )
}

export { Sidebar }