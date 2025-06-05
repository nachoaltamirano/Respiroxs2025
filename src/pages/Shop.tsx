
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const { toast } = useToast();

  const categories = [
    { id: "all", name: "Todos los Productos" },
    { id: "respiratory", name: "Equipos Respiratorios" },
    { id: "cardiac", name: "Monitoreo Cardíaco" },
    { id: "imaging", name: "Diagnóstico por Imágenes" },
    { id: "laboratory", name: "Equipos de Laboratorio" },
    { id: "intensive", name: "Cuidados Intensivos" },
    { id: "rehabilitation", name: "Rehabilitación" }
  ];

  const products = [
    {
      id: 1,
      name: "Ventilador Mecánico VM-2000",
      category: "respiratory",
      price: 125000,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      description: "Ventilador de alta gama para cuidados intensivos con modos avanzados de ventilación."
    },
    {
      id: 2,
      name: "Monitor Multiparamétrico MP-500",
      category: "cardiac",
      price: 89000,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
      description: "Monitor de signos vitales con pantalla táctil de 15 pulgadas y alarmas configurables."
    },
    {
      id: 3,
      name: "Ecógrafo 4D Ultra Pro",
      category: "imaging",
      price: 198000,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      description: "Ecógrafo de última generación con tecnología 4D y sondas múltiples."
    },
    {
      id: 4,
      name: "Concentrador de Oxígeno OX-10L",
      category: "respiratory",
      price: 45000,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      description: "Concentrador de oxígeno de 10 litros por minuto, silencioso y eficiente."
    },
    {
      id: 5,
      name: "Desfibrilador DEF-Pro",
      category: "intensive",
      price: 156000,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop",
      description: "Desfibrilador automático con marcapasos externo y pantalla de 8 pulgadas."
    },
    {
      id: 6,
      name: "Analizador Hematológico AH-300",
      category: "laboratory",
      price: 234000,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      description: "Analizador automático de 5 poblaciones con 23 parámetros medibles."
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    toast({
      title: "Producto agregado",
      description: "El producto se agregó correctamente al carrito.",
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tienda de <span className="text-red-600">Equipos Médicos</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Encuentre los mejores equipos médicos con garantía y soporte técnico especializado.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar equipos médicos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2">
              <Button variant="outline" className="relative">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Carrito
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-600 text-white">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Mostrando {filteredProducts.length} productos
              {selectedCategory !== "all" && (
                <span> en {categories.find(c => c.id === selectedCategory)?.name}</span>
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">
                      {formatPrice(product.price)}
                    </span>
                    <Badge variant="secondary">
                      {categories.find(c => c.id === product.category)?.name}
                    </Badge>
                  </div>

                  <Button
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
              <p className="text-gray-600">Intente con otros términos de búsqueda o cambie la categoría.</p>
            </div>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantía Completa</h3>
              <p className="text-gray-600">Todos nuestros equipos incluyen garantía de fábrica y soporte técnico.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instalación Incluida</h3>
              <p className="text-gray-600">Servicio de instalación y capacitación sin costo adicional.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">Asistencia técnica disponible las 24 horas, los 7 días de la semana.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
