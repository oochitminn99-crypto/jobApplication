"use client";

import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

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
      <span className="text-sm font-medium">Hello, {user.name || user.email}</span>
      <button
        onClick={handleSignOut}
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}


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