"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { getSession, signOut } from "@/lib/auth/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";

export default function Navbar() {
    const {data: session} = useSession()

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">

                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-pink-400 hover:text-2xl">
                    <Briefcase />
                    Job Tracker
                </Link>

                <div className="flex items-center gap-4">
                    {session?.user ? (
                        <>
                            <Link href="/dashboard">
                                <Button variant="ghost"
                                className="text-gray-700 hover:text-black">
                                    Dashboard
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost">
                                        <Avatar>
                                            <AvatarFallback className="bg-pink-400 text-white font-bold">
                                                {session.user.name[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <div>
                                            <p>
                                                {session.user.name}
                                            </p>
                                            <p>
                                                {session.user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <SignOutButton />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in">
                                <Button variant="ghost" className="text-white bg-mauve-300 hover:font-bold hover:bg-mauve-300 italic">
                                    Log In
                                </Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="bg-pink-400 hover:bg-pink-800 hover:font-bold">
                                    Start for free
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
}