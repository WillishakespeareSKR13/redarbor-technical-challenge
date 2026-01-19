# 🚀 Redarbor Technical Challenge

Aplicación móvil de búsqueda de empleos remotos desarrollada con React Native, consumiendo la API de Remotive.

## 📋 Tabla de Contenidos

- [Stack Tecnológico](#-stack-tecnológico)
- [Características](#-características)
- [Arquitectura](#-arquitectura)
- [Aspectos Destacados](#-aspectos-destacados)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)

## 🛠 Stack Tecnológico

### Core

- **React Native 0.81** con **Expo SDK 54** - Framework multiplataforma
- **TypeScript** - Tipado estático para mayor robustez
- **Expo Router v6** - Navegación basada en file-system con tipado automático

### Gestión de Estado

- **Zustand** - Estado global ligero y performante
- **Jotai** - Estado atómico para componentes compartidos
- **TanStack Query v5** - Server state management con caché inteligente

### UI/UX

- **React Native Reanimated v4** - Animaciones nativas de 60fps
- **React Native Gesture Handler** - Gestos nativos optimizados
- **Sistema de Theming Personalizado** - Soporte dark/light mode
- **React Native Render HTML** - Renderizado seguro de contenido HTML

### Networking & Validación

- **Axios** - Cliente HTTP con interceptores configurados
- **Zod v4** - Validación de esquemas con inferencia de tipos
- **form-atoms** - Manejo de formularios con Jotai

### Otras Herramientas

- **AsyncStorage** - Persistencia local de datos
- **Expo Google Fonts (Inter)** - Tipografía moderna
- **New Architecture Enabled** - Preparado para el futuro de React Native

## ✨ Características

- 🔍 **Búsqueda Avanzada** - Filtros por categoría, tipo de trabajo y búsqueda de texto
- 📱 **Responsive Design** - Optimizado para iOS, Android y Web
- ⭐ **Sistema de Favoritos** - Persistencia local con AsyncStorage
- 🔐 **Autenticación Básica** - Sistema de login con validación
- 🌓 **Tema Dinámico** - Cambio automático entre modo claro/oscuro
- 🎨 **Animaciones Fluidas** - Transiciones suaves con Reanimated
- 📤 **Compartir Trabajos** - Integración con sistema de compartir nativo
- 🔄 **Pull to Refresh** - Actualización de datos con feedback visual
- 💾 **Caché Inteligente** - Optimización de requests con React Query

## 🏗 Arquitectura

### Estructura de Carpetas

```
src/
├── api/                    # Configuración de cliente HTTP
├── app/                    # File-based routing (Expo Router)
│   ├── home/              # Rutas del módulo principal
│   └── login/             # Rutas de autenticación
├── config/                # Configuración global y React Query
├── services/              # Arquitectura modular por dominio
│   ├── shared/           # Código compartido entre módulos
│   │   ├── animations/   # Hooks de animación reutilizables
│   │   ├── auth/         # HOCs de protección de rutas
│   │   ├── components/   # Componentes del Design System
│   │   ├── hooks/        # Custom hooks globales
│   │   ├── providers/    # Context providers
│   │   ├── theme/        # Sistema de tokens de diseño
│   │   └── utils/        # Utilidades y helpers
│   ├── auth/             # Módulo de autenticación
│   │   ├── hooks/        # useLogin
│   │   ├── screens/      # Pantalla de Login
│   │   └── stores/       # Estado de autenticación (Zustand)
│   └── home/             # Módulo de empleos
│       ├── components/   # Job, Filter, Share
│       ├── hooks/        # useJobs, useFavorites, useFilters
│       ├── screens/      # Home, JobDetail, Favorites, Account
│       └── types/        # TypeScript types
```

### Patrones de Diseño Aplicados

- **Modular Architecture** - Separación por dominios de negocio
- **Custom Hooks** - Lógica reutilizable encapsulada
- **Component Composition** - Componentes pequeños y componibles
- **Atomic Design** - Sistema de componentes escalable
- **Repository Pattern** - Abstracción de llamadas API
- **Provider Pattern** - Inyección de dependencias

## 🌟 Aspectos Destacados

### 1. **Arquitectura Escalable por Servicios**

Organización modular donde cada feature (`auth`, `home`) tiene sus propios componentes, hooks, stores y screens. Esto facilita el mantenimiento y la escalabilidad del proyecto.

### 2. **Sistema de Animaciones Personalizado**

Implementación de animaciones declarativas con Reanimated v4, incluyendo:

- Animaciones de entrada escalonadas para listas
- Transiciones suaves entre pantallas
- Feedback visual en interacciones

### 3. **Design System Robusto**

Sistema de tokens de diseño con:

- Colores semánticos adaptables al tema
- Espaciados consistentes
- Tipografía escalable
- Componentes base reutilizables

### 4. **Type Safety Completo**

- TypeScript estricto en todo el proyecto
- Validación de formularios con Zod
- Tipos inferidos automáticamente desde Expo Router
- Props tipadas en todos los componentes

### 5. **Optimización de Performance**

- Caché de queries con TanStack Query
- Memoización adecuada de componentes
- Lazy loading de pantallas
- Persistencia eficiente con Zustand

### 6. **Developer Experience**

- Configuración de TypeScript optimizada
- Scripts organizados en package.json
- Estructura de carpetas intuitiva
- Código limpio y bien documentado

### 7. **Preparado para Producción**

- New Architecture habilitada
- Hermes engine para mejor performance
- Configuración de Splash Screen adaptativa
- Soporte completo para iOS, Android y Web

## 📦 Instalación

```bash
# Instalar dependencias
yarn install

# Para iOS (solo macOS)
cd ios && pod install && cd ..
```

## 🎯 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
yarn start

# Ejecutar en plataformas específicas
yarn android    # Android (requiere emulador o dispositivo)
yarn ios        # iOS (requiere macOS y Xcode)
yarn web        # Navegador web

# Verificación de tipos
yarn typecheck

# Generar carpetas nativas
yarn prebuild
```

## 🚀 Inicio Rápido

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd redarbor-technical-challenge
   ```

2. **Instalar dependencias**

   ```bash
   yarn install
   ```

3. **Iniciar la aplicación**

   ```bash
   npx expo start
   ```

4. **Escanear el QR** con la app Expo Go o presionar:
   - `a` para Android
   - `i` para iOS
   - `w` para Web

---

**Desarrollado con ❤️ para Redarbor**
