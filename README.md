# Redarbor Technical Challenge

App de búsqueda de empleos remotos usando la API de Remotive.

## Stack Tecnológico

- **Expo 54**
- **React Native 0.81**
- **TypeScript**
- **Zustand** (State Management)
- **Expo Router** (Navegación)
- **Axios** (HTTP Client)

## Instalación

```bash
yarn install
```

## Ejecutar la aplicación

```bash
npx expo start
```

Para ejecutar en plataformas específicas:

```bash
yarn android
yarn ios
yarn web
```

## Estructura del Proyecto

```
src/
├── api/          # Cliente HTTP y configuración
├── app/          # Routing (Expo Router)
├── config/       # Configuración global
├── navigations/  # Navegación customizada
├── services/     # Arquitectura multiservicio
│   ├── shared/   # Código compartido
│   ├── auth/     # Servicio de autenticación
│   └── jobs/     # Servicio de empleos
└── theme/        # Sistema de diseño
```

## Características

- ✅ Listado de empleos remotos
- ✅ Búsqueda y filtros
- ✅ Detalle de empleos
- ✅ Sistema de favoritos persistente
- ✅ Compartir empleos
- ✅ Login básico
