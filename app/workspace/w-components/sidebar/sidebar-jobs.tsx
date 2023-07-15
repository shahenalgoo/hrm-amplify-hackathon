'use client';

// React
import { FC, HTMLAttributes } from "react";
import { usePathname } from 'next/navigation';

// Libs
import { cn } from "@/lib/utils";

// UI
import { LinkList, LinkListItem } from "@/components/ui/link-list";

// Data
import { jobs } from "@/data/jobs";


interface SidebarJobsProps extends HTMLAttributes<HTMLDivElement> { }

const SidebarJobs: FC<SidebarJobsProps> = ({ className, ...props }) => {

    // Hooks
    //
    const pathname = usePathname();


    return (
        <div {...props} className={cn("sidebar-jobs", className)}>

            <LinkList className="space-y-2">
                {jobs.map((item) => (
                    <LinkListItem
                        key={item.id}
                        href={`/workspace/jobs/${item.id}`}
                        title={item.title}
                        className={pathname === `/workspace/jobs/${item.id}` ? '!bg-black text-white' : ''}
                    >
                        {item.application_count} Applications
                    </LinkListItem>
                ))}
            </LinkList>

        </div>
    )
}

export default SidebarJobs;