import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">

                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-pink-400 hover:text-2xl">
                    <Briefcase />
                    Job Tracker
                </Link>

                <div className="flex items-center gap-4">
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
                </div>

            </div>
        </nav>
    );
}