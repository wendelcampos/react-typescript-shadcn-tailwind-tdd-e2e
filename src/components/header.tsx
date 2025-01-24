import { Separator } from "./ui/separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NaviLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-menu";

export function Header() { 
    return (
        <div className="border-b">
            <div className=" flex h-16 item-center gap-6 px-6">
                <Pizza className="h-16 w-6"/>

                <Separator orientation="vertical" className="h-8 mt-4"/>

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NaviLink to='/'>
                        <Home className="h-4 w-4"/>
                        Inicio
                    </NaviLink>
                    <NaviLink to='/orders'>
                        <UtensilsCrossed className="h-4 w-4"/>
                        Pedidos
                    </NaviLink>
                </nav>
                <div className="ml-auto flex items-center gap-2">
                        <ThemeToggle />
                        <AccountMenu />
                </div>
            </div>
        </div>
    )
}