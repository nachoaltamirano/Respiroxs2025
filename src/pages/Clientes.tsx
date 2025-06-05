
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Clientes = () => {
  const categories = [
    {
      title: "Oxigenoterapia",
      description: "Nuestro oxigeno garantiza su seguridad y bienestar",
      items: ["Concentradores de oxígeno", "Tubos de oxígeno", "Vaso humidificador", "Cánula nasal"]
    },
    {
      title: "Apnea de Sueño",
      description: "Monitores multiparamétricos, ECG, desfibriladores",
      items: ["Monitores de signos vitales", "ECG de 12 derivaciones", "Desfibriladores", "Holter cardíaco"]
    },
    {
      title: "Ventilación",
      description: "Ecógrafos, rayos X portátiles, equipos de ultrasonido",
      items: ["Ecógrafos 4D", "Rayos X digitales", "Ultrasonido Doppler", "Equipos portátiles"]
    },
    {
      title: "Bombas de alimentación",
      description: "Analizadores, centrífugas, microscopios especializados",
      items: ["Analizadores hematológicos", "Centrífugas clínicas", "Microscopios", "Equipos de química clínica"]
    },
    {
      title: "Aspiradores - Oximetros - Nebulizadores",
      description: "Bombas de infusión, monitores, equipos de emergencia",
      items: ["Bombas de infusión", "Monitores UCI", "Carros de paro", "Equipos de emergencia"]
    },
    {
      title: "Asistidor de tos",
      description: "Equipos de fisioterapia y rehabilitación funcional",
      items: ["Electroestimuladores", "Equipos de ondas de choque", "Ultrasonido terapéutico", "Láser terapéutico"]
    }
  ];

  const services = [
    {
      title: "Instalación y Puesta en Marcha",
      description: "Instalación profesional de equipos con capacitación incluida"
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento para garantizar el funcionamiento óptimo"
    },
    {
      title: "Reparación y Servicio Técnico",
      description: "Servicio técnico especializado con repuestos originales"
    },
    {
      title: "Capacitación Técnica",
      description: "Entrenamiento completo para el personal médico y técnico"
    },
    {
      title: "Asesoramiento Técnico",
      description: "Consultoría especializada para la selección de equipos"
    },
    {
      title: "Garantía Extendida",
      description: "Planes de garantía extendida para mayor tranquilidad"
    }
  ];

  const trustedCompanies = [
    "Hospital Italiano", "Clínica Alemana", "Sanatorio Allende", 
    "Hospital Británico", "Clínica Santa Isabel", "Fundación Favaloro",
    "Hospital Austral", "Clínica Universidad de Navarra", "OSDE"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Equipos Médicos de <span className="text-red-600">Alta Calidad</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Descubra nuestra amplia gama de equipos médicos, servicios especializados y las empresas que confían en nosotros.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/shop">Ver Productos en Tienda</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras <span className="text-red-600">Categorías</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia variedad de equipos médicos para todas las especialidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros <span className="text-red-600">Servicios</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Brindamos servicios integrales para garantizar el máximo rendimiento de sus equipos médicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Empresas que <span className="text-red-600">Confían en Nosotros</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más de 200 instituciones médicas confían en nuestros equipos y servicios.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                <span className="text-gray-700 font-medium text-center">{company}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Link to="/obras-sociales">Únase a Nuestros Socios</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
