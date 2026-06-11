# VYNTAS - Longevidad Celular y Gerontología

Sitio web profesional de divulgación científica sobre longevidad y gerontología.

## Estructura

```
vyntas-web/
├── index.html          # Página principal (HTML + CSS + JS integrado)
├── README.md           # Este archivo
└── .gitignore          # Configuración de Git
```

## Despliegue en Cloudflare Pages

### Opción 1: Desde GitHub (Recomendado)

1. **Crea un repositorio en GitHub** (o usa tu repo `tyfundamental/VYNTAS` existente)
2. **Sube este contenido** al repositorio
3. **Conecta a Cloudflare Pages:**
   - Ve a tu panel de Cloudflare
   - Selecciona "Workers & Pages" → "Pages"
   - Haz clic en "Create application"
   - Selecciona "Connect to Git"
   - Elige tu repositorio `tyfundamental/VYNTAS`
   - Cloudflare detectará automáticamente `index.html` como página de inicio
   - Haz clic en "Save and Deploy"

4. **Configura el dominio:**
   - En Cloudflare Pages, ve a "Custom domains"
   - Añade `vyntas.com`
   - Los DNS se configurarán automáticamente

### Opción 2: Desde Cloudflare directamente

1. Entra en tu panel de Cloudflare → Workers & Pages
2. Haz clic en "Create application" → "Pages" → "Upload assets"
3. Carga el archivo `index.html`
4. Asigna el dominio `vyntas.com`

## Características

- ✅ Logo SVG con gradiente ADN personalizado
- ✅ Diseño premium científico (blanco/piedra + negro newsletter)
- ✅ 3 artículos reales con DOI verificados
- ✅ Newsletter BIO-LETTER con suscripción
- ✅ Contacto directo: info@vyntas.com
- ✅ Completamente responsive
- ✅ Sin dependencias externas (HTML puro)

## Editar contenido

Abre `index.html` en tu editor favorito:
- **Título**: Busca `<h1>VYNTAS</h1>`
- **Tagline**: Busca `CIENCIA PARA VIVIR MÁS Y MEJOR`
- **Artículos**: Busca `.article-card` para editar
- **Email de contacto**: Busca `info@vyntas.com` y reemplaza

## DNS en Cloudflare

Después de conectar el dominio, verifica los registros DNS:

```
Tipo    | Nombre      | Contenido
--------|-------------|----------------------------------
CNAME   | vyntas.com  | pages.cloudflare.com
```

Cloudflare lo configura automáticamente.

## Soporte

Para preguntas sobre el despliegue, contacta con `info@vyntas.com`

---

Creado por Daniel Malagón Periánez | Sevilla, 2026
