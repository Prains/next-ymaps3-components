## next-ymaps3-components


## EN

## Description

The package next-ymaps3-components provides components for creating maps in Next.js using YMaps3.

The package allows importing YMaps3 components as regular React components. Fully typed.

### Установка

In RootLayout, you need to wrap the components in YandexMapApiProvider with passing the apiKey.

After YandexMapApiProvider, wrap the components in YandexMapComponentsProvider.

```jsx
import { YandexMapApiProvider, YandexMapComponentsProvider } from "next-ymaps3-components";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <YandexMapApiProvider apiKey="YOUR_API_KEY">
          <YandexMapComponentsProvider>
            {children}
          </YandexMapComponentsProvider>
        </YandexMapApiProvider>
      </body>
    </html>
  );
}
```

After that, all Yandex Maps components can be used with regular imports.


```jsx
import { YMap } from "next-ymaps3-components";

export default function Home() {
  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    />
  );
}
```

### Map Behaviors

Map behaviors are changed using the useRemoveBehavior hook. By default, all behaviors are available on the map.

```jsx
'use client'
import { useRemoveBehavior, DRAG } from "next-ymaps3-components";

export default function Home() {
    useRemoveBehavior(DRAG);

  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    />
  );
}
```

```jsx
'use client'
import { useRemoveBehaviorOnHover, DRAG } from "next-ymaps3-components";

export default function Home() {
    const elementId = 'element'

     useRemoveBehaviorOnHover(DRAG, elementId);

  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    >
    <YMapMarker coordinates={[55.75165, 37.61731]}>
        <div id={elementId}/>
    </YMapMarker>
    </YMap>
  );
}
```



If you need to implement custom logic for changing map behaviors, you can access the useMapBehaviors store.

```jsx
'use client'
import { useMapBehaviors } from "next-ymaps3-components";

export default function Home() {
  const { behaviors, setBehaviors, resetBehaviors, removeBehavior } = useMapBehaviors();

  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    />
  );
}
```

## RU

## Описание пакета

Пакет next-ymaps3-components предоставляет компоненты для создания карт на Next.js с использованием YMaps3.

Пакет позволяет импортировать компоненты YMaps3 как обычные реакт компоненты. Полностью типизироованы.

### Установка

В RootLayout нужно обернуть компоненты в YandexMapApiProvider с передачей apiKey.

После YandexMapApiProvider нужно обернуть компоненты в YandexMapComponentsProvider.

```jsx
import { YandexMapApiProvider, YandexMapComponentsProvider } from "next-ymaps3-components";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <YandexMapApiProvider apiKey="YOUR_API_KEY">
          <YandexMapComponentsProvider>
            {children}
          </YandexMapComponentsProvider>
        </YandexMapApiProvider>
      </body>
    </html>
  );
}
```

После этого все компоненты яндекс карт можно будет использовать обычным импортом 


```jsx
import { YMap } from "next-ymaps3-components";

export default function Home() {
  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    />
  );
}
```

### Поведения карты

Поведения карты меняются хуком useRemoveBehavior. По умолчанию в карте доступны все поведения.

```jsx
'use client'
import { useRemoveBehavior, DRAG } from "next-ymaps3-components";

export default function Home() {
    const { removeBehavior } = useRemoveBehavior(DRAG);

  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    />
  );
}
```

```jsx
'use client'
import { useRemoveBehaviorOnHover, DRAG } from "next-ymaps3-components";

export default function Home() {
    const elementId = 'element'

     useRemoveBehaviorOnHover(DRAG, elementId);

  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    >
    <YMapMarker coordinates={[55.75165, 37.61731]}>
        <div id={elementId}/>
    </YMapMarker>
    </YMap>
  );
}


Если нужно сделать собственную логику смену поведений карты, можно обратиться к хранилищу useMapBehaviors

```jsx
'use client'
import { useMapBehaviors } from "next-ymaps3-components";

export default function Home() {
  const { behaviors, setBehaviors, resetBehaviors, removeBehavior } = useMapBehaviors();

  return (
    <YMap
       location={center: [55.75165, 37.61731], zoom: 13}
    />
  );
}
```