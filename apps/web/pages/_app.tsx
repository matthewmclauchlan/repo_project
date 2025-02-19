import type { AppProps } from "next/app";
import "../styles/globals.css"; // ✅ Ensure this path is correct

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
