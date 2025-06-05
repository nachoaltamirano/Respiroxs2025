
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ObrasSociales = () => {
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto con usted pronto.",
    });
    setFormData({ organization: "", contact: "", email: "", phone: "", message: "" });
  };

  const benefits = [
    {
      title: "Precios Preferenciales",
      description: "Descuentos especiales para compras al por mayor y contratos a largo plazo"
    },
    {
      title: "Soporte Técnico Dedicado",
      description: "Equipo de soporte exclusivo disponible 24/7 para resolver cualquier inconveniente"
    },
    {
      title: "Capacitación Especializada",
      description: "Programas de entrenamiento personalizados para su personal médico y técnico"
    },
    {
      title: "Mantenimiento Programado",
      description: "Calendarios de mantenimiento preventivo para garantizar el funcionamiento óptimo"
    },
    {
      title: "Garantía Extendida",
      description: "Cobertura de garantía ampliada sin costos adicionales en contratos de volumen"
    },
    {
      title: "Financiación Flexible",
      description: "Planes de financiamiento adaptados a las necesidades de su institución"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluciones para <span className="text-red-600">Obras Sociales</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Construyamos juntos el futuro de la atención médica. Ofrecemos soluciones integrales 
              para instituciones médicas y obras sociales con tecnología de vanguardia.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir <span className="text-red-600">Respiroxs SRL?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más de 15 años de experiencia respaldando a las principales instituciones médicas del país.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiencia Comprobada</h3>
                    <p className="text-gray-600">Más de 200 instituciones confían en nuestros equipos médicos y servicios.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tecnología de Vanguardia</h3>
                    <p className="text-gray-600">Equipos médicos con las últimas innovaciones tecnológicas y certificaciones internacionales.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Soporte Integral</h3>
                    <p className="text-gray-600">Desde la instalación hasta el mantenimiento, ofrecemos soporte completo durante todo el ciclo de vida del equipo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Estadísticas que Respaldan Nuestra Calidad</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                  <div className="text-gray-700">Instituciones</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-gray-700">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                  <div className="text-gray-700">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-gray-700">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beneficios de <span className="text-red-600">Ser Nuestro Socio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos condiciones especiales y beneficios exclusivos para nuestros socios estratégicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para <span className="text-red-600">Colaborar?</span>
              </h2>
              <p className="text-lg text-gray-600">
                Contáctenos para discutir cómo podemos ayudar a su institución a brindar mejor atención médica.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organization">Organización *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="Nombre de la institución"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Contacto *</Label>
                    <Input
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      placeholder="Nombre del responsable"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="contacto@institucion.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Cuéntenos sobre sus necesidades y cómo podemos ayudar a su institución..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Enviar Consulta
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contacto@respiroxs.com</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600">+54 11 4567-8900</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-600">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObrasSociales;
