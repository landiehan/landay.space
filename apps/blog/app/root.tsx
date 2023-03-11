import type { MetaFunction } from "@remix-run/node";
import { Meta, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Blog | Landay",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
