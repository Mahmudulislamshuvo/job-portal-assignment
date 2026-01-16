import React from "react";

const CompanySocialIcons = () => {
  return (
    <>
      <div class="card p-6">
        <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
        <div class="space-y-2">
          <a
            href="#"
            class="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
          >
            <i
              data-lucide="linkedin"
              class="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
            ></i>
            <span class="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="#"
            class="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
          >
            <i
              data-lucide="twitter"
              class="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
            ></i>
            <span class="text-sm font-medium">Twitter</span>
          </a>
          <a
            href="#"
            class="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
          >
            <i
              data-lucide="facebook"
              class="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
            ></i>
            <span class="text-sm font-medium">Facebook</span>
          </a>
          <a
            href="#"
            class="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
          >
            <i
              data-lucide="instagram"
              class="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
            ></i>
            <span class="text-sm font-medium">Instagram</span>
          </a>
          <a
            href="#"
            class="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
          >
            <i
              data-lucide="github"
              class="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
            ></i>
            <span class="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CompanySocialIcons;
