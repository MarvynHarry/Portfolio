# 📝 Guía de Personalización

## 🖼️ Actualizar tu Foto de Perfil

Tu foto ya está configurada en `/public/profile.jpg`

**Para cambiarla:**
1. Reemplaza el archivo `/public/profile.jpg` con tu nueva foto
2. Recomendado: Imagen cuadrada (300x300px o mayor)
3. Formato: JPG, PNG, o WebP

---

## ✏️ Editar tu Información Personal

### 📧 Información de Contacto

Edita `/src/data/translations.js`:

```javascript
// Línea ~163 (inglés) y ~334 (español)
cards: [
  { icon: '📧', title: 'Email', value: 'TU_EMAIL@example.com' },
  { icon: '💼', title: 'LinkedIn', value: 'tu_usuario' },
  { icon: '💻', title: 'GitHub', value: 'tu_usuario' },
  { icon: '🐦', title: 'Twitter', value: '@tu_usuario' },
]
```

Actualiza también los links en `/src/components/Contact/Contact.jsx`:
- Línea 21: `mailto:TU_EMAIL@example.com`
- Línea 30: `https://www.linkedin.com/in/TU_USUARIO/`
- Línea 41: `https://github.com/TU_USUARIO`
- Línea 52: `https://twitter.com/TU_USUARIO`

---

## 💼 Actualizar tu CV

1. Reemplaza `/public/Marvyn Harryson CV.pdf` con tu CV actualizado
2. O renómbralo en `/src/components/Hero/Hero.jsx` línea 55

---

## 🚀 Editar Proyectos

Edita `/src/data/translations.js`:

```javascript
// Línea ~120 (inglés) y ~291 (español)
projects: {
  items: [
    {
      title: 'Nombre del Proyecto',
      description: 'Descripción detallada',
      tags: ['Tech1', 'Tech2', 'Tech3']
    },
    // Agrega más proyectos aquí
  ]
}
```

Para agregar links reales a tus proyectos, edita `/src/components/Projects/Projects.jsx`:
- Línea 20: URL de GitHub
- Línea 27: URL del demo/sitio live

---

## 🛠️ Modificar Habilidades

Edita `/src/data/skills.js`:

```javascript
export const skills = {
  frontend: ['React', 'Tu', 'Stack', 'Frontend'],
  backend: ['Node.js', 'Tu', 'Stack', 'Backend'],
  tools: ['Git', 'Tus', 'Herramientas']
}
```

---

## 🎨 Cambiar Tecnologías Flotantes

Edita `/src/components/Hero/Hero.jsx` (líneas 12-35)

**Buscar logos en:** https://devicon.dev

```jsx
// Ejemplo para agregar Python:
<i className="tech-float tech-25 devicon-python-plain colored"></i>
```

Luego agrega el estilo de posición en `/src/components/Hero/Hero.css`:

```css
.tech-25 {
  top: 25%;
  left: 35%;
  animation-delay: 3s;
  animation-duration: 26s;
}
```

---

## 📊 Estadísticas del Hero

Edita `/src/components/Hero/Hero.jsx` líneas 78-90:

```jsx
<div className="stat-number">3+</div>  {/* Cambia el número */}
```

---

## 🎯 Tips Rápidos

1. **Idioma por defecto:** Cambia en `/src/App.jsx` línea 21
   ```javascript
   const [language, setLanguage] = useState('es')  // 'en' o 'es'
   ```

2. **Colores del tema:** Edita `/src/index.css`

3. **Orden de secciones:** Cambia el orden en `/src/App.jsx` líneas 64-76

4. **Agregar nueva sección:**
   - Crea carpeta en `/src/components/NuevaSeccion/`
   - Crea `NuevaSeccion.jsx` y `NuevaSeccion.css`
   - Importa en `/src/App.jsx`

---

## 🐛 Solución de Problemas

**La imagen no aparece:**
- Verifica que esté en `/public/profile.jpg`
- Recarga con Ctrl + Shift + R

**Los cambios no se reflejan:**
- Guarda el archivo
- Espera 1-2 segundos (hot reload)
- Si no funciona, reinicia el servidor

**Error al compilar:**
- Revisa que no falten comas `,` en los arrays
- Verifica que todas las comillas estén cerradas

---

## 📞 Archivos Clave

| Archivo | Qué contiene |
|---------|-------------|
| `/src/data/translations.js` | Todos los textos (EN/ES) |
| `/src/data/skills.js` | Lista de habilidades |
| `/src/components/Hero/Hero.jsx` | Sección principal + logos tech |
| `/src/components/About/About.jsx` | Sección sobre mí |
| `/public/profile.jpg` | Tu foto de perfil |
| `/public/Marvyn Harryson CV.pdf` | Tu CV |

---

## 🚀 Comandos Útiles

```bash
npm run dev      # Iniciar desarrollo
npm run build    # Compilar para producción
npm run preview  # Ver versión de producción
```

---

¡Listo! Tu portafolio está 100% personalizable. 🎉
