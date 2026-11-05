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

El sitio se publica en **AWS (S3 + CloudFront)** con el dominio https://marvynharry.com. Cada push a `main` lo despliega mediante `.github/workflows/deploy.yml`.

- Infraestructura: `infra/cloudfront-site.yml` (CloudFormation, en `us-east-1`)
- Variables de GitHub: `AWS_ROLE_ARN`, `S3_BUCKET` y `CLOUDFRONT_DISTRIBUTION_ID` (salen de los outputs del stack)
- Secreto de GitHub: `VITE_WEB3FORMS_KEY` (formulario de contacto)
- Build: `npm run build` → carpeta `dist/`

La distribución debe estar suscrita al plan **Free** de CloudFront, con la zona de Route 53 asociada. La cuenta de AWS debe estar en el plan de pago, porque el plan gratis de CloudFront no está disponible en cuentas con el Free plan.

Si el dominio cambia, actualiza `https://marvynharry.com` en `index.html`, `public/robots.txt` y `public/sitemap.xml`.

## Autor

**Marvyn Harryson**
Full Stack Developer

## Licencia

Este proyecto es de uso personal.
