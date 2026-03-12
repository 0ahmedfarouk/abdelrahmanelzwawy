import { Switch, Route, Router as WouterRouter } from "wouter"; // Farouk
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Farouk
import { Toaster } from "@/components/ui/toaster"; // Farouk
import { TooltipProvider } from "@/components/ui/tooltip"; // Farouk
import { ThemeProvider } from "./lib/theme"; // Farouk
import Navbar from "./components/Navbar"; // Farouk
import Footer from "./components/Footer"; // Farouk
import HomePage from "./pages/HomePage"; // Farouk
import QuranPage from "./pages/QuranPage"; // Farouk
import DownloadsPage from "./pages/DownloadsPage"; // Farouk
import VideosPage from "./pages/VideosPage"; // Farouk
import ContactPage from "./pages/ContactPage"; // Farouk
import NotFound from "@/pages/not-found"; // Farouk

const queryClient = new QueryClient(); // Farouk

function Router() { // Farouk
  return ( // Farouk
    <div className="min-h-screen flex flex-col bg-background"> {/* Farouk */}
      <Navbar /> {/* Farouk */}
      <main className="flex-1"> {/* Farouk */}
        <Switch> {/* Farouk */}
          <Route path="/" component={HomePage} /> {/* Farouk */}
          <Route path="/quran" component={QuranPage} /> {/* Farouk */}
          <Route path="/downloads" component={DownloadsPage} /> {/* Farouk */}
          <Route path="/videos" component={VideosPage} /> {/* Farouk */}
          <Route path="/contact" component={ContactPage} /> {/* Farouk */}
          <Route component={NotFound} /> {/* Farouk */}
        </Switch> {/* Farouk */}
      </main> {/* Farouk */}
      <Footer /> {/* Farouk */}
    </div> // Farouk
  ); // Farouk
} // Farouk

function App() { // Farouk
  return ( // Farouk
    <QueryClientProvider client={queryClient}> {/* Farouk */}
      <ThemeProvider> {/* Farouk */}
        <TooltipProvider> {/* Farouk */}
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}> {/* Farouk */}
            <Router /> {/* Farouk */}
          </WouterRouter> {/* Farouk */}
          <Toaster /> {/* Farouk */}
        </TooltipProvider> {/* Farouk */}
      </ThemeProvider> {/* Farouk */}
    </QueryClientProvider> // Farouk
  ); // Farouk
} // Farouk

export default App; // Farouk
