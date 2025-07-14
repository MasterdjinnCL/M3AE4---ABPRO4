# Modelo de Cajas CSS - Box Model

## 📋 Descripción del Proyecto

Proyecto educativo para demostrar el modelo de cajas CSS utilizando SASS con el patrón 7-1. Este proyecto incluye una demostración práctica del CSS Box Model con diseño totalmente responsivo.

## ✨ Funcionalidades Implementadas

### 🛍️ Sección de Productos
- **12 productos** distribuidos en grilla responsiva (3x4 en desktop)
- Cada producto incluye imagen (ícono FontAwesome) y descripción detallada
- Efectos hover y transiciones suaves
- Diseño adaptativo para móviles y tablets

### 🧭 Navegación Fija
- Header fijo en la parte superior utilizando el 100% del ancho
- Menú responsivo con hamburger menu para móviles
- Navegación suave entre secciones (smooth scroll)

### 📱 Redes Sociales
- Íconos de redes sociales posicionados al lado derecho del footer
- Enlaces a GitHub, LinkedIn y Twitter
- Efectos hover con transformaciones

### 📝 Formulario de Contacto
- Formulario completo con campos:
  - Nombre (requerido)
  - Apellido (requerido)  
  - Comentario (textarea, requerido)
- Diseño en grid responsivo
- Validación HTML5

## 🎯 Características Técnicas

### 📐 CSS Box Model Demo
- Demostración visual interactiva del modelo de cajas
- Leyenda explicativa de Content, Padding, Border y Margin
- Colores diferenciados para cada parte del box model

### 🎨 Diseño Responsivo
- **Mobile First** approach
- Breakpoints definidos para diferentes dispositivos
- Grid CSS para layout adaptativo
- Flexbox para alineación y distribución

### 🏗️ Arquitectura SCSS
Estructura basada en el patrón **7-1**:
```
sass/
├── abstracts/
│   ├── _variables.scss  # Variables globales
│   └── _mixins.scss     # Mixins reutilizables
├── base/
│   └── _base.scss       # Estilos base y reset
├── components/
│   ├── _buttons.scss    # Componentes de botones
│   ├── _cards.scss      # Componentes de tarjetas
│   └── _products.scss   # Componentes de productos y formularios
├── layout/
│   ├── _header.scss     # Estilos del header
│   ├── _main.scss       # Estilos del contenido principal
│   └── _footer.scss     # Estilos del footer
└── style.scss          # Archivo principal que importa todos
```

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js instalado
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/MasterdjinnCL/M3AE4---ABP4.git

# Navegar al directorio
cd M3AE4---ABP4

# Instalar dependencias
npm install
```

### Scripts Disponibles
```bash
# Compilar SCSS a CSS (comprimido)
npm run build-css

# Modo desarrollo con watch (CSS expandido)
npm run watch-css

# Iniciar servidor de desarrollo
npm run serve

# Compilar para producción
npm run build
```

### Desarrollo
```bash
# Iniciar desarrollo (watch + servidor)
npm start
```

El proyecto estará disponible en `http://localhost:3000`

## 🌐 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **SASS/SCSS** - Preprocesador CSS
- **JavaScript ES6** - Interactividad
- **FontAwesome 6** - Iconografía
- **CSS Grid & Flexbox** - Layout responsivo
- **Live Server** - Servidor de desarrollo

## 📱 Responsive Design

El proyecto está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

## 🎓 Objetivos de Aprendizaje

- Comprensión del **CSS Box Model**
- Implementación de **diseño responsivo**
- Uso de **SASS/SCSS** y patrones de organización
- Técnicas de **layout moderno** (Grid + Flexbox)
- **Accesibilidad web** básica
- **Versionado con Git**

## 👨‍💻 Autor

**Juan Pablo Berrios**  
Proyecto Bootcamp UNAB Frontend - 2025

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

### 📝 Notas del Proyecto

Este proyecto forma parte del módulo de Frontend del Bootcamp UNAB y demuestra la aplicación práctica de conceptos fundamentales de CSS y diseño web responsivo.
