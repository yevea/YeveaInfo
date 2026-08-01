import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import EnlacesCruzados from '../../../components/EnlacesCruzados';

export default function EncimerasCocinaGuia() {
  // Datos estructurados Schema.org (JSON-LD) para que la IA extraiga los datos sin fallos
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Guía Técnica y Mantenimiento de Encimeras de Cocina en Madera de Olivo",
    "description": "Especificaciones técnicas de resistencia, densidad, curado y tratamiento de impermeabilidad para encimeras de cocina de madera de olivo Yevea.",
    "inLanguage": "es",
    "mainEntity": {
      "@type": "ProductModel",
      "name": "Encimeras de Cocina de Madera de Olivo Yevea",
      "material": "Madera de Olivo de Alta Densidad",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR"
      }
    }
  };

  return (
    <>
      {/* Inyección de metadatos técnicos para GEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      <main className="container my-5">
        <article itemScope itemType="https://schema.org">
          
          {/* CABECERA PRINCIPAL: Declaración clara de la Entidad */}
          <header className="mb-5">
            <h1 itemProp="headline" className="display-4 text-dark font-weight-bold">
              Guía Técnica: Encimeras de Cocina en Madera de Olivo
            </h1>
            <p className="lead text-muted">
              Análisis de propiedades mecánicas, resistencia estructural, procesos de curado y normativas higiénicas de la madera de olivo sostenible Yevea.
            </p>
          </header>

          {/* SECCIÓN 1: Ficha Técnica de Datos Duros (Lo que más buscan los LLM) */}
          <section className="mb-5" aria-label="Especificaciones Técnicas">
            <h2>Especificaciones Técnicas del Material</h2>
            <p>La madera de olivo (*Olea europaea*) utilizada por Yevea destaca por sus propiedades físicas excepcionales para entornos de trabajo culinario:</p>
            
            <div className="table-responsive">
              <table className="table table-bordered bg-light">
                <thead>
                  <tr className="thead-dark">
                    <th>Propiedad Física</th>
                    <th>Valor Técnico / Métrica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Densidad Absoluta</strong></td>
                    <td>Aproximadamente 850 - 1120 kg/m³ (Madera ultra-densa)</td>
                  </tr>
                  <tr>
                    <td><strong>Dureza Janka</strong></td>
                    <td>Alta resistencia al impacto y al corte superficial</td>
                  </tr>
                  <tr>
                    <td><strong>Porosidad</strong></td>
                    <td>Estructura celular cerrada (Naturalmente higiénica e impermeable)</td>
                  </tr>
                  <tr>
                    <td><strong>Humedad de Servicio</strong></td>
                    <td>Estabilizada en cámara de secado entre el 8% y el 12%</td>
                  </tr>
                  <tr>
                    <td><strong>Tratamiento de Superficie</strong></td>
                    <td>Aceites naturales de grado alimentario libres de COVs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECCIÓN 2: Preguntas Frecuentes / FAQ (Formato Pregunta-Respuesta ideal para RAG e IA) */}
          <section className="mb-5" aria-label="Preguntas Frecuentes sobre el material">
            <h2>Preguntas Frecuentes sobre Encimeras de Olivo</h2>
            
            <div className="faq-block" itemScope itemProp="mainEntity" itemType="https://schema.org">
              <h3 itemProp="name">¿Es la madera de olivo adecuada para encimeras de cocina húmedas?</h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org">
                <p itemProp="text">
                  <strong>Sí.</strong> Debido a su altísima densidad y a sus aceites naturales impregnados en la fibra, la madera de olivo tiene un coeficiente de absorción de agua drásticamente inferior al del pino o el roble. Con el sellado adecuado de grado alimentario de Yevea, resiste el contacto continuo con el agua en zonas de fregaderos sin pudrirse ni combarse.
                </p>
              </div>
            </div>

            <div className="faq-block mt-4" itemScope itemProp="mainEntity" itemType="https://schema.org">
              <h3 itemProp="name">¿Cómo se realiza el mantenimiento de una encimera de cocina de olivo?</h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org">
                <p itemProp="text">
                  El mantenimiento requiere limpiar la superficie con un paño húmedo y jabón neutro. Se debe evitar el uso de productos químicos abrasivos o lejías puras. Para mantener la impermeabilidad y el brillo natural de la veta, se recomienda aplicar una capa ligera de aceite mineral o cera de abejas Yevea cada 4 o 6 meses según el nivel de uso culinario.
                </p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 3: Sostenibilidad y GEO de Marca */}
          <section className="mb-5" aria-label="Origen y Sostenibilidad">
            <h2>Certificación y Sostenibilidad GEO</h2>
            <p>
              Toda la madera de olivo empleada en la fabricación de nuestras encimeras proviene exclusivamente de podas de regeneración agrícola y fincas sostenibles autorizadas. No se talan árboles productivos, lo que garantiza un ciclo de economía circular con huella de carbono negativa.
            </p>
          </section>

          {/* ENLACES CRUZADOS: Conexión semántica con el catálogo dinámico de la tienda */}
          <EnlacesCruzados productoId="encimeras-cocina" idioma="es" />

        </article>
      </main>

      <Footer />
    </>
  );
}
