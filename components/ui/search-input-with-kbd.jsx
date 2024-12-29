import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

function InputDemo() {
  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          id="input-25"
          className={cn(
            "peer pe-9 ps-9 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none "
          )}
          placeholder="Search..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
        {/* <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
          <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
            ⌘K
          </kbd>
        </div> */}
      </div>
    </div>
  );
}

export { InputDemo };
