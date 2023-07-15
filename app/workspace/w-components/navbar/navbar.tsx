'use client';

// React
import { FC, HTMLAttributes } from "react";

// Libs
import { cn } from "@/lib/utils";

// UI
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";


interface NavbarProps extends HTMLAttributes<HTMLDivElement> { }

const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
    return (
        <header {...props} className={cn("fixed top-0 left-0 right-0 h-16 px-4 bg-white flex justify-between items-center", className)}>

            <NavigationMenu>
                <NavigationMenuList>

                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

                    <NavigationMenuItem>
                        <Link href="/workspace/jobs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Jobs
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/workspace/candidates" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Candidates
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/workspace/assessments" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Assessments
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>

        </header>
    )
}

export { Navbar }