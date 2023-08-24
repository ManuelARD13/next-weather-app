import Layout from '@/components/Layout';
import '@/styles/tailwind.css';
import { WeatherProvider } from '@context/WeatherContext';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WeatherProvider>
  );
}
