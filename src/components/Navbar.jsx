import React from "react";
import { Share, Moon, Sun, X } from "lucide-react";
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

import { useTheme } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import About from "./About";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <nav className=" sticky  w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen flex flex-wrap items-center justify-between  p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Quillbot Who?
            </span>
          </a>
          <div className="flex md:order-2 gap-x-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button>Download</Button>
            <Button variant="outline" size="icon">
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

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 border-1 rounded-[6px]"
            id="navbar-sticky"
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="cursor-pointer">
                    Features
                  </NavigationMenuLink>
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
                  <NavigationMenuLink className="cursor-pointer">
                    Github Repo
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
