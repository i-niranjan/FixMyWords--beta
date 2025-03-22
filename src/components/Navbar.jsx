import React, { useContext } from "react";
import { NavLink } from "react-router";
import { Share, Moon, Sun, X, LogOut, Menu, LogIn, User } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import About from "./About";
import AuthContext from "@/context/authProvider";
import { TextContext } from "@/context/TextContext";

export default function Navbar() {
  const { openShareDialog } = useContext(TextContext);

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <nav className=" sticky  w-full z-20 top-0 start-0 border-b border-gray-200  backdrop-blur-sm ">
        <div className="max-w-screen flex  flex-wrap items-center justify-between p-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden ">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-2">
              <DropdownMenuItem>
                <a href="https://github.com/i-niranjan/FixMyWords--beta">
                  Github Repo
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div>
            <a
              href="/"
              className="flex  items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-lg font-semibold whitespace-nowrap ">
                FixMyWords
              </span>
            </a>
          </div>
          <div className="md:hidden flex gap-2">
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={openShareDialog}
            >
              <Share />
            </Button>
            <NavLink
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-0 rounded-sm cursor-pointer shadow-xl
  hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 text-sm
  transition-transform duration-500 ease-in-out flex items-center "
              to={user ? "#" : "/auth"}
              onClick={user ? logoutUser : null}
            >
              {user ? (
                <>
                  <LogOut size={18} />
                </>
              ) : (
                <User size={18} />
              )}
            </NavLink>
          </div>

          <div className="md:flex hidden  md:order-2 gap-x-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-sm cursor-pointer shadow-xl
  hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 text-sm
  transition-transform duration-500 ease-in-out flex items-center gap-2"
              to={user ? "#" : "/auth"}
              onClick={user ? logoutUser : null}
            >
              {user ? (
                <>
                  Howdy, {user.length > 10 ? `${user.slice(0, 9)}...` : user}{" "}
                  <LogOut size={14} />
                </>
              ) : (
                "Login / Register 🚀"
              )}
            </NavLink>

            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={openShareDialog}
            >
              <Share />
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 border-1 rounded-[6px]"
            id="navbar-sticky"
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="opacity-75" variant="ghost">
                          Features
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Coming Soon</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button className="cursor-pointer" variant="ghost">
                        Insights
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle>🚀 Meet Fix My Words</DrawerTitle>
                          <DrawerDescription>
                            Your go-to AI-powered text transformation tool!
                            Whether you need grammar fixes, rephrasing, or
                            creative rewrites, we make text editing effortless.
                            Powered by cutting-edge AI, we ensure precision,
                            clarity, and style in every word.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <div className="flex items-center justify-center space-x-2">
                            <About />
                          </div>
                          <div className="mt-3 "></div>
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button
                              className="cursor-pointer"
                              variant="outline"
                            >
                              <X />
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      className="cursor-pointer"
                      href="https://github.com/i-niranjan/FixMyWords--beta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contribute
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
