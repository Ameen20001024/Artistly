"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className='flex gap-5'>

            <NavigationMenuItem>
                <NavigationMenuLink asChild active >
                    <Link href='/'>HOME</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink asChild active>
                    <Link href='/artists'>ARTISTS</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink asChild active>
                    <Link href='/onboard'>ONBOARD</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>


        </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default Navbar
