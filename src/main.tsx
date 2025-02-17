// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
