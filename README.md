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

El sitio se publica en **Vercel** con el dominio https://marvynharry.com. Cada push a `main` despliega a producción y cada PR genera una URL de vista previa.

- Configuración: `vercel.json` (build, cabeceras de seguridad y caché de assets)
- Variable de entorno en Vercel: `VITE_WEB3FORMS_KEY` (formulario de contacto)
- Build: `npm run build` → carpeta `dist/`

Si el dominio cambia, actualiza `https://marvynharry.com` en `index.html`, `public/robots.txt` y `public/sitemap.xml`.

## Autor

**Marvyn Harryson**
Full Stack Developer

## Licencia

Este proyecto es de uso personal.
