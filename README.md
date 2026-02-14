# Portfolio - Marvyn Harryson

Portafolio personal desarrollado con React y Vite, que presenta mi experiencia como Full Stack Developer, proyectos destacados y habilidades técnicas.

## Características

- Diseño moderno y responsive
- Soporte multilenguaje (Inglés/Español)
- Navegación suave entre secciones
- Animaciones y efectos parallax
- Secciones organizadas: Hero, Sobre mí, Experiencia, Proyectos, Habilidades y Contacto
- Optimizado para rendimiento con Vite

## Tecnologías Utilizadas

- **React 19** - Librería de UI
- **Vite 7** - Build tool y dev server
- **JavaScript (ES6+)** - Lenguaje de programación
- **CSS3** - Estilos y animaciones
- **Devicon** - Iconos de tecnologías
- **ESLint** - Linter para código limpio

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd Portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la versión de producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter de código

## Estructura del Proyecto

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar/       # Barra de navegación
│   │   ├── Hero/         # Sección principal
│   │   ├── About/        # Sobre mí
│   │   ├── Experience/   # Experiencia laboral
│   │   ├── Projects/     # Proyectos destacados
│   │   ├── Skills/       # Habilidades técnicas
│   │   ├── Contact/      # Formulario de contacto
│   │   └── Footer/       # Pie de página
│   ├── data/
│   │   ├── skills.js         # Datos de habilidades
│   │   └── translations.js   # Traducciones
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## Despliegue

### GitHub Pages (Automático)

El proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions:

1. Cada push a la rama `main` activará el despliegue automático
2. La página estará disponible en: https://marvynharry.github.io/Portfolio/

El workflow de GitHub Actions se encuentra en `.github/workflows/deploy.yml`

### Despliegue Manual (Opcional)

Si prefieres desplegar manualmente usando gh-pages:

```bash
npm run build
npm run deploy
```

### Otros servicios de hosting

El proyecto también puede desplegarse en:
- Vercel
- Netlify
- Cloudflare Pages

Para generar los archivos de producción:
```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

**Nota:** Si despliegas en otro servicio, asegúrate de ajustar el `base` en `vite.config.js` según sea necesario.

## Autor

**Marvyn Harryson**
Full Stack Developer

## Licencia

Este proyecto es de uso personal.
