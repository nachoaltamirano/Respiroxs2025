
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Clickable Areas */}
      <div className="relative h-screen bg-gradient-to-br from-red-50 to-white">
        {/* Background Medical Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Respiroxs</span> SRL
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Equipos médicos de alta calidad para profesionales de la salud. 
                Confianza, innovación y excelencia en cada producto.
              </p>
            </div>

            {/* Main Clickable Areas */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Obras Sociales Area */}
              <Link to="/obras-sociales" className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors">
                      <svg className="w-8 h-8 text-red-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Obras Sociales</h3>
                    <p className="text-gray-600 mb-6">
                      Soluciones integrales para instituciones médicas y obras sociales. 
                      Colaboramos con su organización.
                    </p>
                    <ArrowRight className="w-6 h-6 text-red-600 mx-auto group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Clientes Area */}
              <Link to="/clientes" className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-red-600 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors">
                      <svg className="w-8 h-8 text-red-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Clientes</h3>
                    <p className="text-gray-600 mb-6">
                      Descubra nuestros equipos médicos, servicios especializados 
                      y empresas que confían en nosotros.
                    </p>
                    <ArrowRight className="w-6 h-6 text-red-600 mx-auto group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Floating Shop Button */}
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-lg">
                <Link to="/shop">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explorar Tienda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Confianza en <span className="text-red-600">Cada Detalle</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más de 15 años brindando equipos médicos de calidad superior a profesionales de la salud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Certificada</h3>
              <p className="text-gray-600">Equipos con certificaciones internacionales</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Soporte Técnico</h3>
              <p className="text-gray-600">Asistencia especializada 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Logística eficiente en todo el país</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
