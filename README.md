# YeveaInfo (WoodContent)

Contenido en español sobre madera de olivo — guías técnicas, condiciones de
venta, instrucciones de cuidado y FAQs — para **yevea.com/guides**. Existe
para apoyar al e-commerce principal en **yevea.com/catalog**, no para
sustituirlo: su función es ser encontrado y citado por buscadores y motores
de respuesta de IA (AEO/GEO), y dirigir ese tráfico al catálogo
transaccional.

**Contexto estratégico:** yevea.com es líder del sector de la madera de
olivo y sale primero en las búsquedas tradicionales. Esto tiene dos
consecuencias para este repo:

1. **Ventaja AEO de partida.** Los motores de respuesta con grounding
   (Perplexity, Copilot, AI Overviews, ChatGPT con búsqueda) construyen
   sus respuestas a partir de los primeros resultados de búsqueda. Estar
   ya en el nº 1 significa que nuestras páginas entran en el conjunto de
   candidatas a cita; el cuello de botella no es la autoridad, sino la
   **extraibilidad** (HTML estático, JSON-LD válido, respuestas directas).
2. **Restricción dura: no romper el SEO existente.** Ningún cambio de
   estructura, rutas o redirecciones debe poner en riesgo el
   posicionamiento actual. Ante la duda, se despliega en paralelo y se
   verifica antes de tocar nada indexado.

**Decisión de estructura:** la carpeta **`es/madera-olivo/` es la más
importante del proyecto y ahí van todas las guías.** Es la sección que
consolida el liderazgo temático («topical authority») sobre madera de
olivo. Las páginas de soporte comercial (condiciones de venta) viven en
`es/`, fuera de la carpeta de guías.

---

## 1. Principio rector: AEO/GEO primero

Cada página debe estar escrita y estructurada para que **los motores de
respuesta (AI Overviews, ChatGPT, Perplexity, Claude, etc.) y los crawlers
tradicionales puedan extraer hechos sin ejecutar JavaScript**. Reglas no
negociables:

1. **HTML plano y estático — nunca JSX/React.** La mayoría de crawlers
   GEO/AEO descargan el HTML crudo y no renderizan JavaScript. Todo el
   contenido debe estar presente en el primer byte.
2. **JSON-LD de `schema.org` inline en el `<head>`**, con el tipo MIME
   correcto: `<script type="application/ld+json">` (con `+`; el valor
   `application/ld-json` es inválido y los crawlers lo ignoran por
   completo).
3. **Respuestas directas y citables.** Cada sección y cada entrada de FAQ
   empieza con una afirmación factual de una frase, antes del detalle. Esa
   primera frase es la que un motor de IA levantará como respuesta.
4. **Titulares en forma de pregunta real** («¿Cómo curar una tabla de
   madera de olivo?», «¿La madera de olivo es apta para contacto
   alimentario?») — deben coincidir con lo que la gente pregunta a los
   asistentes de IA.
5. **Un solo hecho, una sola fuente.** Garantía, plazos de envío, zonas,
   precios: cada dato vive en `datos/hechos.md` y las páginas lo copian de
   ahí. Datos contradictorios entre páginas destruyen la confianza del
   motor de respuesta y provocan que cite el dato erróneo.
6. **Enlaces cruzados al catálogo** con anchor text descriptivo, para que
   quien llegue citado por una IA acabe en una página que vende.

## 2. Errores conocidos (checklist de corrección)

Estado: borrador en progreso, **no desplegable** hasta cerrar esta lista.

### Bloqueantes AEO (arreglar primero)

- [ ] `index.html`: cambiar `type="application/ld-json"` por
      `type="application/ld+json"`. Sin esto, **todo el structured data del
      sitio es invisible**.
- [ ] `index.html`: canonical apunta a `https://yevea.com`; debe ser
      `https://yevea.com/guides/` (la URL real de despliegue). Regla
      general: el canonical de cada página = su URL final en `/guides/...`.
- [ ] `index.html`: enlace roto `https://yevea.comcatalog` →
      `https://yevea.com/catalog`.
- [ ] `index.html`: eliminar los enlaces a `/guides/en/`, `/guides/fr/` y
      `/guides/de/` (no existen; 3 enlaces rotos en la portada) y dejar
      `inLanguage: ["es"]` en el JSON-LD hasta que haya más idiomas.
- [ ] `index.html`: la redirección comentada usa `http-transform`
      (inexistente; es `http-equiv`) y la URL `yevea.comes/` sin barra.
      Corregir o borrar el bloque.
- [ ] Reconciliar la garantía: `condiciones-venta` dice **3 años** y
      `preguntas-frecuentes.html` dice **5 años**. Registrar el valor real
      en `datos/hechos.md` y propagarlo.

### Estructurales

- [ ] **Consolidar todas las guías en `es/madera-olivo/`.** Mover ahí
      `instrucciones-de-uso` y cualquier guía futura. `condiciones-venta`
      se queda en `es/`. Si alguna URL antigua llegó a indexarse,
      añadir redirección 301 (ver restricción SEO arriba).
- [ ] **Formatos mezclados.** Convertir todos los `.jsx` a HTML plano
      siguiendo el patrón de `es/madera-olivo/preguntas-frecuentes.html`
      (autocontenido, JSON-LD inline, sin dependencias en cliente). No hay
      `package.json` ni bundler, así que los `.jsx` reales hoy no pueden
      renderizarse; los «falsos .jsx» (HTML con extensión equivocada) solo
      necesitan renombrarse y limpiarse.
- [ ] **Imports rotos** (`../../../components/Header` vs `header.jsx`,
      etc.). Desaparecen al eliminar los `.jsx`; no invertir en
      arreglarlos.
- [ ] **Rutas base inconsistentes** (`/es/...`, `/doc/...`, `/info/...`,
      `/assets/...`). Reescribir todo enlace interno, asset y canonical
      con el prefijo real `/guides/...`, en todas las páginas.
- [ ] **`assets/js/woodpages.js`**: eliminarlo. Inyectar header/footer por
      `fetch` en cliente hace ese contenido invisible para los crawlers
      sin JS. Sustituir por el mecanismo de §5.
- [ ] **Placeholders**: completar `encimeras-bano` (lleno de
      `[PLACEHOLDER: ...]`) antes de publicarla, o excluirla del
      despliegue y de `llms.txt`.
- [ ] **`index.html` raíz**: ya existe; verificar que el servidor lo sirve
      en `/guides/` y que no queda directory listing en subcarpetas.

## 3. Mejoras AEO propuestas (más allá de los arreglos)

### 3.1 Structured data por tipo de página

| Página | Tipos JSON-LD |
|---|---|
| Portada `/guides/` | `WebSite` + `Organization` |
| Guías técnicas (`madera-olivo/`) | `TechArticle` + `BreadcrumbList` |
| FAQs | `FAQPage` (las preguntas/respuestas del schema deben coincidir literalmente con el texto visible) |
| Condiciones de venta | `WebPage` + `Organization` con `ContactPoint` |
| Instrucciones de uso | `HowTo` (pasos numerados) + `BreadcrumbList` |

Añadir en todos: `datePublished`, `dateModified` (los motores de IA
priorizan contenido con fecha), `inLanguage: "es"`, `publisher` →
Organization Yevea.

### 3.2 Archivos de descubrimiento

- [x] `llms.txt` — **creado en este repo**; desplegar en la raíz de
      `yevea.com` (no dentro de `/guides/`). Mantenerlo al día: cada guía
      nueva en `madera-olivo/` se añade con su línea de resumen. Nota
      honesta: hoy los crawlers de búsqueda IA apenas lo consultan, pero
      los agentes de programación sí, el coste de mantenimiento es casi
      nulo y nos deja preparados si un proveedor grande lo adopta.
- [ ] `sitemap.xml` con todas las URLs `/guides/...` y `lastmod` reales;
      declararlo en Search Console.
- [ ] `robots.txt` (raíz de yevea.com) que **permita explícitamente** los
      crawlers de IA: `GPTBot`, `ClaudeBot`, `Claude-SearchBot`,
      `PerplexityBot`, `Google-Extended`, `OAI-SearchBot`, `Bingbot`.
      Bloquearlos sería sabotear el objetivo del proyecto.

### 3.3 Patrón de redacción por página

Cada página sigue esta plantilla:

1. `<title>` único: pregunta o beneficio + «| Yevea» (≤ 60 caracteres).
2. `<meta name="description">` única, con la respuesta resumida.
3. Un solo `<h1>`.
4. Primer párrafo = respuesta completa en 2–3 frases (el «fragmento
   citable»).
5. `<h2>` en forma de pregunta; primera frase de cada sección =
   respuesta directa; después el detalle.
6. Datos concretos y verificables (densidad, temperaturas, plazos) mejor
   que adjetivos: los motores de respuesta citan números.
7. Bloque «Productos relacionados» con 2–3 enlaces al catálogo con anchor
   descriptivo («Tablas de cortar de madera de olivo», no «ver más»).
8. Migas de pan visibles + `BreadcrumbList`.
9. Fecha de última actualización visible al pie.

### 3.4 Señales E-E-A-T

- [ ] Página `/guides/es/sobre-yevea.html` (quiénes somos, taller,
      experiencia con el olivo, liderazgo del sector) enlazada desde el
      footer — los motores de IA la usan para evaluar si la fuente es
      citable.
- [ ] Datos de contacto reales (`ContactPoint`) en condiciones de venta.
- [ ] En afirmaciones técnicas (p. ej. propiedades de la madera), citar
      la fuente cuando exista.

### 3.5 Medición

- [ ] En analytics, segmentar referrals de `chatgpt.com`,
      `perplexity.ai`, `claude.ai`, `copilot.microsoft.com` y tráfico con
      UTM propio si se añade a los enlaces citables.
- [ ] Revisar mensualmente en Search Console qué páginas aparecen en AI
      Overviews / resultados enriquecidos, y vigilar que el
      posicionamiento tradicional nº 1 no se degrada tras cada despliegue.

## 4. Fuente única de hechos: `datos/hechos.md`

**Creado en este repo.** Contiene todos los datos que aparecen en más de
una página (garantía, envíos, contacto, propiedades de la madera).

Regla de trabajo — obligatoria también para agentes de IA (Claude Code):

1. Antes de escribir o editar cualquier página, **leer
   `datos/hechos.md`** y usar exactamente esos valores.
2. Ninguna página inventa un dato: si no está en la tabla, se añade
   primero ahí (con Martin confirmando el valor).
3. Al cambiar un valor, actualizar todas las páginas listadas en la
   columna «Páginas que lo usan».
4. Un valor marcado `POR DECIDIR` o `POR COMPLETAR` **bloquea la
   publicación** de las páginas que lo usan.

## 5. Reutilización de header/footer sin JS en runtime

Dos opciones, en orden de preferencia:

1. **Generador estático** (Astro o Eleventy): plantillas compartidas,
   salida 100 % HTML plano. Es la opción correcta si el sitio va a crecer.
2. **Sin herramientas**: mantener `components/header.html` y
   `components/footer.html` y un pequeño script de despliegue que los
   concatene con el contenido de cada página antes de subir. Mismo
   resultado (HTML completo en el primer byte), cero dependencias.

En ningún caso volver a `woodpages.js` + `fetch` en cliente.

## 6. Estructura objetivo

```
/guides/
├── index.html                      # portada (solo idiomas existentes)
├── sitemap.xml
├── datos/
│   └── hechos.md                   # fuente única de hechos
├── assets/
│   └── img/                        # imágenes con alt descriptivo
└── es/
    ├── index.html                  # índice en español
    ├── condiciones-venta.html      # soporte comercial (no es guía)
    ├── sobre-yevea.html            # E-E-A-T (pendiente de crear)
    └── madera-olivo/               # ★ TODAS las guías van aquí
        ├── index.html              # índice de guías
        ├── preguntas-frecuentes.html    # ← patrón de referencia
        ├── instrucciones-de-uso.html    # mover aquí desde es/
        └── encimeras-bano.html          # completar antes de publicar
```

`llms.txt` y `robots.txt` viven en la **raíz de yevea.com**, no dentro de
`/guides/`.

## 7. Checklist antes de publicar cualquier página

- [ ] Es `.html` plano, sin dependencia de JS para mostrar contenido
- [ ] Si es una guía, está dentro de `es/madera-olivo/`
- [ ] `<script type="application/ld+json">` válido (probar en
      validator.schema.org)
- [ ] Canonical = URL real en `https://yevea.com/guides/...`
- [ ] Todos los enlaces internos con prefijo `/guides/` y sin 404
- [ ] Datos compartidos coinciden con `datos/hechos.md` (sin valores
      `POR DECIDIR` pendientes)
- [ ] Primer párrafo responde la pregunta del título
- [ ] Bloque de productos relacionados hacia `/catalog`
- [ ] Fecha de actualización visible y en el JSON-LD
- [ ] Añadida a `llms.txt` y `sitemap.xml`
- [ ] Sin `[PLACEHOLDER]` ni texto de relleno
