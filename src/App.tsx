import Items from "./Components/Products/Products";
import Header from "./Components/Header/Header";
import Theme from "./Theme/Theme";
import { ProductsProvider } from "./Contexts/ProductsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <ProductsProvider>
          <Header />
          <Items />
        </ProductsProvider>
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
