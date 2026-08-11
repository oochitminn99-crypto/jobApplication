"use client";

import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

interface UserMenuProps {
  user: {
    email: string;
    name?: string;
    image?: string | null;
  };
}

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in"); // Redirect after signing out
          router.refresh();
        },
      },
    });
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold italic text-pink-500">
        {user.name || user.email}
      </span>
      <Button
        variant="ghost"
        className="relative h-8 w-8 rounded-full"
      >
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            {user.image}
          </AvatarFallback>
        </Avatar>
      </Button>

      <button
        onClick={handleSignOut}
        className="rounded-md bg-red-600 px-2 py-0.5 text-sm font-semibold text-white hover:bg-red-500 hover:font-bold hover:italic transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}

/*<Button
       variant="ghost"
       className="relative h-8 w-8 rounded-full"
     >
       <Avatar className="h-8 w-8">
         <AvatarFallback className="bg-primary text-white">
           {session.user.name[0].toUpperCase()}
         </AvatarFallback>
       </Avatar>
  </Button>*/


/*"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
          router.push("/sign-in");
        } else {
          alert("Error signing out");
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}*/