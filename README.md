# vyntas.com

Web de Vyntas: divulgación práctica y científica de IA en español (con versión en inglés).

## Desarrollo
npm install
npm run dev

## Publicación (Cloudflare Pages)
- Comando de build: `npm run build`
- Carpeta de salida: `dist`
- Cada push a `main` publica vyntas.com; cualquier otra rama genera una URL de vista previa.

## Dónde se edita
- Textos en español e inglés: `src/content.ts`
- Estructura: `src/App.tsx`
- Gráfico del osciloscopio de la portada: `src/Trace.tsx`
- Estilos y colores: `src/index.css`
