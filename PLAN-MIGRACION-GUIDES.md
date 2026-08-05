# Plan de migración: yevea.com (legacy) → yevea.com/guides (YeveaInfo)

Regla de oro: esto NO es una migración de dominio, es una reestructuración de URLs
dentro del mismo dominio. Riesgo menor y gran ventaja: se puede hacer POR FASES,
sección a sección, sin tocar lo que aún no está listo. Nada del legacy se borra
ni se redirige hasta que su sustituto esté publicado, validado e indexado.

---

## Fase 0 — Inventario y línea base (1 semana)
- [ ] 0.1 Rastrear el sitio legacy completo y obtener la lista total de URLs
      (Screaming Frog gratuito hasta 500 URLs, o `wget --spider -r`).
- [ ] 0.2 Google Search Console → exportar 16 meses: páginas top por clics e
      impresiones, y consultas top (separar consultas de compra vs consultas
      de venta de madera de olivareros).
- [ ] 0.3 Exportar backlinks (GSC → Enlaces). Las páginas con backlinks externos
      son intocables sin redirección 1:1.
- [ ] 0.4 Guardar todo en el repo YeveaInfo: `/migration/inventario.csv`.
      Columnas: URL, clics/12m, impresiones, backlinks, idioma, tema.
- [ ] 0.5 Captura de línea base: posiciones actuales de las 20 keywords clave
      (ES y EN) para poder medir el impacto después.

## Fase 1 — Mapa de URLs (el documento más importante del proyecto)
- [ ] 1.1 Crear `/migration/mapa-urls.csv` con una fila por URL legacy:
      `url_legacy → url_nueva → acción (migrar / consolidar / eliminar) → prioridad`.
- [ ] 1.2 Reglas de decisión:
      - Página con tráfico o backlinks → migrar con 301 exacto 1:1.
      - Varias páginas flojas del mismo tema → consolidar en una sola guía
        (todas las viejas redirigen a la nueva).
      - Página sin tráfico, sin backlinks, sin valor → eliminar (410 o 301 a
        la categoría más cercana). NUNCA redirigir todo a la home.
- [ ] 1.3 Prioridad de migración: (1) /guides/madera-olivo (núcleo),
      (2) páginas del lado suministro (vender madera de olivo — clave para el
      flywheel de compras), (3) resto de guías, (4) páginas menores.
- [ ] 1.4 Congelar el mapa: es el contrato del proyecto. Todo cambio posterior
      se anota en el propio CSV.

## Fase 2 — Construcción en YeveaInfo (formato AEO desde el primer día)
Para CADA página nueva:
- [ ] 2.1 Respuesta directa a la pregunta principal en el primer párrafo
      (2-4 frases, mencionando "Yevea" cuando sea natural).
- [ ] 2.2 Schema.org en JSON-LD: FAQPage donde haya preguntas, Article en
      guías, Organization (líder del sector) en la home de /guides.
- [ ] 2.3 HTML estático puro: la página debe verse completa sin JavaScript.
- [ ] 2.4 hreflang correcto entre versiones ES/EN; enlazado interno entre
      guías relacionadas y hacia la tienda.
- [ ] 2.5 Título y H1 formulados como la pregunta que hace la gente.
- [ ] 2.6 Contenido nuevo del lado suministro (no existe en legacy, prioridad
      alta): "Compramos madera de olivo", condiciones, precios orientativos,
      recogida — en español, dirigido a olivareros.
- [ ] 2.7 Revisión final por página: checklist 2.1–2.5 antes de marcarla
      como lista en el mapa de URLs.

## Fase 3 — Validación en pre-producción
- [ ] 3.1 Publicar en una ruta de staging con `noindex` (o repo privado con
      GitHub Pages de vista previa). JAMÁS staging indexable.
- [ ] 3.2 Validar schema con validator.schema.org / prueba de resultados
      enriquecidos de Google.
- [ ] 3.3 Comprobar enlaces rotos internos (Screaming Frog sobre staging).
- [ ] 3.4 PageSpeed Insights: móvil verde en las páginas prioritarias.
- [ ] 3.5 Revisión manual en móvil real (Chromebook + Android).

## Fase 4 — Publicación por tandas y redirecciones 301
Por cada tanda (empezar con /guides/madera-olivo):
- [ ] 4.1 Subir las páginas nuevas a producción (sin tocar aún las legacy).
- [ ] 4.2 Añadir las 301 de esa tanda en `.htaccess` (cPanel → Administrador
      de archivos), copiadas del mapa de URLs. Formato:
      `Redirect 301 /pagina-vieja.html /guides/madera-olivo/pagina-nueva/`
- [ ] 4.3 Probar cada redirección a mano (o con `curl -I`): debe dar UN solo
      salto 301, sin cadenas.
- [ ] 4.4 Actualizar `sitemap.xml` (solo URLs nuevas, nunca las redirigidas)
      y reenviarlo en Search Console.
- [ ] 4.5 Solicitar indexación en GSC de las 5-10 páginas más importantes
      de la tanda.
- [ ] 4.6 Esperar 1-2 semanas y verificar en GSC que las nuevas indexan y
      las viejas desaparecen SIN errores, antes de lanzar la siguiente tanda.

## Fase 5 — Cierre de la migración
- [ ] 5.1 Mover `llms.txt` y `robots.txt` de /guides a la raíz de yevea.com.
- [ ] 5.2 `llms.txt` actualizado con el índice de todas las guías.
- [ ] 5.3 Las 301 se quedan PARA SIEMPRE (mínimo 1 año, recomendado indefinido).
- [ ] 5.4 Retirar del servidor el contenido legacy ya redirigido (los archivos,
      no las redirecciones).

## Fase 6 — Vigilancia (4-8 semanas tras cada tanda)
- [ ] 6.1 GSC 2-3 veces/semana: Cobertura (errores 404/soft-404), rendimiento
      de las páginas nuevas vs línea base de Fase 0.
- [ ] 6.2 Vigilar las 20 keywords clave. Caída temporal de 1-3 semanas es
      normal; caída sostenida >4 semanas = revisar redirecciones y contenido.
- [ ] 6.3 Comprobar menciones en motores de respuesta: preguntar a ChatGPT/
      Perplexity/Claude las 10 preguntas clave y anotar si citan a Yevea.
- [ ] 6.4 Plan de reversión: si una tanda hunde rankings, las páginas legacy
      siguen en el repo/backup y las 301 se pueden retirar en minutos.

---

## Reglas que no se rompen nunca
1. Ninguna URL legacy muere sin 301 exacto a su equivalente.
2. Nunca redirigir en masa a la home.
3. Nada se publica indexable sin pasar la Fase 3.
4. Tandas pequeñas: mejor 10 páginas bien migradas que 100 a la vez.
5. El mapa de URLs (`/migration/mapa-urls.csv`) es la única fuente de verdad.
