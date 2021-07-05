import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import Layout from "@/components/Layout";

import detectLocale from "@/helpers/localeDetector";

import "./styles/globals.scss";

export const i18n = setupI18n();

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`../src/locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const locale = detectLocale();
    dynamicActivate(locale);
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <Layout>
        <Head>
          <title>Conun</title>
          <meta name="description" content="Conun Foundation" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}
export default App;
