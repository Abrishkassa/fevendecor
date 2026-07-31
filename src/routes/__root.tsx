import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AppProvider } from "@/contexts/AppContext";
import { BookingProvider } from "@/contexts/BookingContext";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Feven Decor | Premium Wedding & Event Decoration in Hawassa" },
      { name: "description", content: "Feven Decor transforms your celebrations into breathtaking visual masterpieces. Premium wedding and event decoration services in Hawassa, Ethiopia." },
      { name: "author", content: "Feven Decor" },
      { property: "og:title", content: "Feven Decor | Premium Wedding & Event Decoration" },
      { property: "og:description", content: "Luxury wedding and event decoration services in Hawassa, Ethiopia. Where dreams come alive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@fevendecor" },
      { name: "twitter:title", content: "Feven Decor | Premium Wedding & Event Decoration" },
      { name: "twitter:description", content: "Luxury wedding and event decoration services in Hawassa, Ethiopia. Where dreams come alive." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AppProvider>
      <BookingProvider>
        <Outlet />
      </BookingProvider>
    </AppProvider>
  );
}
