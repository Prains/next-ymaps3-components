import Script from "next/script";

interface YandexMapAPiProviderProps {
  apiKey: string;
}

export const YandexMapApiProviders = ({ apiKey }: YandexMapAPiProviderProps) => {
  return (
    <Script
      strategy="beforeInteractive"
      src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}
    />
  );
};
