// React
import { AnchorHTMLAttributes, FC, HTMLAttributes, forwardRef } from "react";

// Libs
import { cn } from "@/lib/utils";
import Link from "next/link";




interface LinkListProps extends HTMLAttributes<HTMLDivElement> { }

const LinkList: FC<LinkListProps> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={cn("link-list", className)}>
            {children}
        </div>
    )
}




interface LinkListItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    title: string;
}

const LinkListItem: FC<LinkListItemProps> = ({ children, className, href, title, ...props }) => {
    return (
        <Link href={href} {...props} className={cn("link-list-item block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent", className)}>
            <div className="text-xs font-semibold leading-none line-clamp-1">{title}</div>
            {children &&
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                    {children}
                </p>
            }
        </Link>
    )
}
















export {
    LinkList,
    LinkListItem
}