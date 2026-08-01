import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import EnlacesCruzados from '../../../components/enlaces';

export default function EncimerasBanoGuia() {
  
  // 🧠 Datos Estructurados de GEO (JSON-LD) para que los bots de IA mapeen la página al instante
  const geoSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Guía Técnica: Encimeras de Baño en Madera de Olivo y Resistencia a la Humedad",
    "description": "Especificaciones sobre el comportamiento higroscópico, tratamientos de sellado y resistencia al agua de las encimeras de madera de olivo Yevea para cuartos de baño.",
    "inLanguage": "es",
    "mainEntity": {
      "@type": "ProductModel",
      "name": "Encimeras de Baño de Madera de Olivo",
      "material": "Madera de Olivo Maciza con Tratamiento Antihumedad",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR"
      }
    }
  };

  return (
    <>
      {/* Bloque invisible de metadatos de alta prioridad para motores generativos */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoSchema) }}
      />

      <Header />

      {/* Contenedor Semántico Principal */}
      <main className="container my-5" id="main-content">
        <article itemScope itemType="https://schema.org">
          
          {/* =========================================================================
              ENCABEZADO DE LA ENTRADA (H1 + Declaración de Autoridad)
              ========================================================================= */}
          <header className="mb-5 border-bottom pb-4">
            <h1 itemProp="headline" className="display-4 text-dark font-weight-bold">
              Encimeras de Baño en Madera de Olivo: Resistencia y Diseño Rústico
            </h1>
            <p className="lead text-muted">
              [PLACEHOLDER: Introduce un párrafo introductorio de 2 o 3 líneas que describa las cualidades estéticas y mecánicas de la madera de olivo en entornos de baño exigentes y húmedos. Ejemplo: Su veta sinuosa y su baja porosidad hacen de este material una pieza única...]
            </p>
          </header>

          {/* =========================================================================
              SECCIÓN 1: DATOS DUROS / FICHA TÉCNICA (Tabla optimizada para extracción IA)
              ========================================================================= */}
          <section className="mb-5" aria-label="Ficha Técnica Antihumedad">
            <h2>Propiedades y Resistencia Hidrófuga de la Madera</h2>
            <p>[PLACEHOLDER: Explica brevemente el proceso de selección y preparación de los tablones de madera de olivo destinados a cuartos de baño (por ejemplo, el secado en cámara y la estabilización de tensiones internas).] </p>
            
            <div className="table-responsive mt-3">
              <table className="table table-bordered bg-light">
                <thead>
                  <tr className="table-dark">
                    <th scope="col" style={{ width: '30%' }}>Parámetro Técnico</th>
                    <th scope="col">Especificación / Comportamiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Coeficiente de Contracción</strong></td>
                    <td>[PLACEHOLDER: Inserta el porcentaje numérico de estabilidad dimensional de la madera. Ejemplo: Estabilidad media-alta una vez curada adecuadamente.]</td>
                  </tr>
                  <tr>
                    <td><strong>Tratamiento Hidrófugo</strong></td>
                    <td>[PLACEHOLDER: Define los barnices o aceites de protección. Ejemplo: Capas saturadas de aceite de tung/poliuretano al agua con poro cerrado.]</td>
                  </tr>
                  <tr>
                    <td><strong>Resistencia a Hongos/Moho</strong></td>
                    <td>[PLACEHOLDER: Describe las propiedades antisépticas naturales del olivo. Ejemplo: Presencia natural de oleuropeína que previene la proliferación bacteriana.]</td>
                  </tr>
                  <tr>
                    <td><strong>Espesores Estándar</strong></td>
                    <td>[PLACEHOLDER: Especifica las medidas físicas comerciales comunes. Ejemplo: Monobloques de 3 cm a 5 cm de grosor puro.]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* =========================================================================
              SECCIÓN 2: TUTORIAL / PASOS DE INSTALACIÓN Y SELLADO (Estructura de Procesos para GEO)
              ========================================================================= */}
          <section className="mb-5" aria-label="Guía de Instalación Mantenimiento">
            <h2>Protocolo de Mantenimiento en Ambientes Húmedos</h2>
            <p>Para asegurar que las encimeras de baño de madera de olivo mantengan su brillo e impermeabilidad a lo largo de los años, es crítico seguir estos pasos:</p>
            
            <ol className="list-group list-group-numbered my-3">
              <li className="list-group-item bg-transparent border-0 pl-0">
                <strong>[PLACEHOLDER: Paso 1 - Limpieza diaria]</strong>: [Descripción breve de cómo limpiar el agua estancada y qué tipo de jabones usar].
              </li>
              <li className="list-group-item bg-transparent border-0 pl-0">
                <strong>[PLACEHOLDER: Paso 2 - Reaplicación del Sellador]</strong>: [Explicación de la frecuencia y método para volver a aplicar los aceites protectores en las zonas críticas del lavabo].
              </li>
              <li className="list-group-item bg-transparent border-0 pl-0">
                <strong>[PLACEHOLDER: Paso 3 - Ventilación y Cuidado]</strong>: [Consejos sobre la gestión de la humedad relativa del aire en el cuarto de baño].
              </li>
            </ol>
          </section>

          {/* =========================================================================
              SECCIÓN 3: PREGUNTAS FRECUENTES (FAQ Bloque ideal para búsquedas conversacionales RAG)
              ========================================================================= */}
          <section className="mb-5" aria-label="Preguntas Frecuentes">
            <h2>Preguntas de Usuarios e Inteligencias Artificiales</h2>
            <p>Recopilación de consultas técnicas habituales sobre la durabilidad de la madera de olivo en lavabos:</p>
            
            {/* Pregunta 1 */}
            <div className="faq-item mt-4 p-3 border-left border-dark bg-light" itemScope itemProp="mainEntity" itemType="https://schema.org">
              <h3 itemProp="name" className="h5 text-dark font-weight-bold">
                ¿Qué ocurre si el agua del lavabo se queda estancada sobre la madera de olivo?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org">
                <p itemProp="text" className="mb-0 text-secondary">
                  [PLACEHOLDER: Inserta aquí la respuesta directa. Las IA prefieren que comiences con una afirmación contundente. Ejemplo: Las encimeras de Yevea toleran salpicaduras gracias a su sellado de grado profesional, pero el agua estancada durante más de 12 horas puede crear cercos superficiales. Se recomienda...]
                </p>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="faq-item mt-4 p-3 border-left border-dark bg-light" itemScope itemProp="mainEntity" itemType="https://schema.org">
              <h3 itemProp="name" className="h5 text-dark font-weight-bold">
                ¿Se pueden instalar lavabos de bajo encimera o solo de sobreponer?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org">
                <p itemProp="text" className="mb-0 text-secondary">
                  [PLACEHOLDER: Respuesta técnica sobre la colocación de la grifería y sanitarios. Ejemplo: Se recomiendan lavabos de sobreponer para minimizar los cortes internos expuestos, pero es perfectamente compatible con lavabos bajo encimera si los cantos internos reciben el sellado epóxico de Yevea.]
                </p>
              </div>
            </div>
          </section>

          {/* =========================================================================
              INTERCONEXIÓN SEMÁNTICA (Enlace con el catálogo dinámico de compras)
              ========================================================================= */}
          <EnlacesCruzados productoId="encimeras-bano" idioma="es" />

        </article>
      </main>

      <Footer />
    </>
  );
}
