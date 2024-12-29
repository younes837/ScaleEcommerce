import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Heart, Menu, Search, ShoppingBagIcon, X } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import { InputDemo } from "./ui/search-input-with-kbd";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4  pb-4">
      {" "}
      <div className="fade-bottom absolute left-0 h-32 sm:h-20 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative  max-w-container mx-10">
        {/* Mobile View */}
        <NavbarComponent>
          <NavbarLeft>
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <LaunchUI />
              <span className="hidden md:inline">Launch UI</span>
            </a>
            <div className="hidden lg:block">
              <Navigation />
            </div>
          </NavbarLeft>
          <NavbarRight>
            <div className="hidden sm:block w-full">
              <InputDemo className="w-full" />
            </div>
            <Button variant="ghost" size="icon">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBagIcon size={20} />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-90">
                <SheetHeader>
                  <SheetTitle>
                    {" "}
                    <LaunchUI />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 pt-6 mt-6">
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Components
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>

        {/* Mobile Search - Full width under navbar */}
        <div className="mt-2 sm:hidden w-full">
          <InputDemo className="w-full" />
        </div>
      </div>
    </header>
  );
}
