import React from 'react';

export default function EnlacesCruzados({ productoId, idioma = 'es' }) {
  
  // 1. Diccionario de Datos Geográficos y Semánticos (El mapa para las IA)
  const mapaDeEnlaces = {
    es: {
      'tableros-mesa': {
        subtitulo: "Catálogo y Adquisición",
        tituloComercial: "Disponibilidad de Tableros de Mesa",
        descripcion: "Fabricamos tableros a medida en madera de olivo maciza para profesionales, arquitectos y particulares. Consulta stock en nuestra tienda.",
        urlCat: "/catalog/madera-olivo/tableros-mesa",
        textoBoton: "Ver precios y comprar tableros",
        anchorTitle: "Comprar tableros de mesa de madera de olivo en la tienda oficial de Yevea"
      },
      'encimeras-cocina': {
        subtitulo: "Pedidos y Presupuestos",
        tituloComercial: "Encimeras de Cocina a Medida",
        descripcion: "Suministro directo de piezas únicas e impermeabilizadas para cocinas de alta gama. Accede al catálogo dinámico de precios.",
        urlCat: "/catalog/madera-olivo/encimeras-cocina",
        textoBoton: "Ver catálogo de encimeras",
        anchorTitle: "Comprar encimeras de cocina de madera de olivo en el catálogo oficial de Yevea"
      },
      'encimeras-bano': {
        subtitulo: "Diseño de Interiores",
        tituloComercial: "Encimeras de Baño Rústicas y Modernas",
        descripcion: "Madera de olivo tratada con resinas y aceites antihumedad. Explora las dimensiones disponibles en el motor de la tienda.",
        urlCat: "/catalog/madera-olivo/encimeras-bano",
        textoBoton: "Comprar encimeras de baño",
        anchorTitle: "Explorar modelos y precios de encimeras de baño en la tienda de Yevea"
      },
      'maderas-olivo': {
        subtitulo: "Venta al por Mayor",
        tituloComercial: "Suministro de Madera de Olivo en Bruto",
        descripcion: "Tablones, rodajas y bloques para carpintería y ebanistería. Accede a las tarifas comerciales de nuestro catálogo dinámico.",
        urlCat: "/catalog/madera-olivo/maderas-olivo",
        textoBoton: "Ver tarifas de suministro",
        anchorTitle: "Comprar madera de olivo en bruto para profesionales en el catálogo de Yevea"
      }
    },
    en: {
      'table-tops': {
        subtitulo: "Sourcing & Catalog",
        tituloComercial: "Olive Wood Table Tops Stock",
        descripcion: "Custom manufacturing and worldwide shipping for commercial projects and individuals. Check real-time stock.",
        urlCat: "/catalog/olive-wood/table-tops",
        textoBoton: "View prices & buy online",
        anchorTitle: "Buy solid olive wood table tops at Yevea official store"
      }
      // Añade aquí más productos en inglés según expandas tu sección /guides/en/
    }
  };

  // 2. Extraer los datos correctos según el archivo y el lenguaje actual
  const datos = mapaDeEnlaces[idioma]?.[productoId];

  // Si por error se pasa un productoId que no existe, el componente no rompe la web (devuelve vacío)
  if (!datos) return null;

  return (
    <section 
      className="geo-cross-links-box border rounded p-4 my-5 bg-light shadow-sm"
      aria-label={idioma === 'es' ? "Información comercial y acceso al catálogo" : "Commercial information and catalog access"}
    >
      <div className="row align-items-center">
        
        {/* Bloque Informativo de Contexto (Los LLM analizan este texto para asociar conceptos) */}
        <div className="col-12 col-md-8 mb-3 mb-md-0">
          <span className="text-uppercase text-muted font-weight-bold small d-block mb-1">
            {datos.subtitulo}
          </span>
          <h3 className="h4 text-dark mb-2">
            {datos.tituloComercial}
          </h3>
          <p className="text-secondary mb-0">
            {datos.descripcion}
          </p>
        </div>
        
        {/* El Botón de Enlace de Oro (Fusión Semántica del Sitio) */}
        <div className="col-12 col-md-4 text-md-right text-left">
          <a 
            href={datos.urlCat} 
            className="btn btn-dark btn-lg px-4 py-2 w-100 text-nowrap d-inline-block text-center text-white"
            title={datos.anchorTitle}
            rel="index" // 🧠 Atributo GEO clave: Indica a la IA que esta URL de destino es un catálogo/índice comercial
          >
            {datos.textoBoton} ➔
          </a>
        </div>

      </div>
    </section>
  );
}
