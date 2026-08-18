import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services, freudQuote, specializations, testimonials } from '../mockData';
import * as LucideIcons from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#FFF8F0] to-[#F0EBE3] -z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A574]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#8B7355] shadow-sm">
                  Psychologue & Psychothérapeute
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Tamila Hachemi
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Psychologue à <span className="text-[#8B7355] font-semibold">Marseille 1er</span>
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Profitez de mon accompagnement bienveillant pour avancer dans votre chemin de vie ! 
                Psychothérapie, coaching, médiation… Et bien plus encore !
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/rendez-vous">
                  <Button size="lg" className="bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/qui-suis-je">
                  <Button size="lg" variant="outline" className="border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-all duration-300 text-base">
                    Découvrir mon parcours
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/126921/Tamila%20Hachemi%20Psychologue%20%C3%A0%20Marseille%201er.webp"
                  alt="Tamila Hachemi Psychologue à Marseille 1er"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#D4A574] to-[#8B7355] rounded-3xl -z-10 blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <Quote className="w-16 h-16 text-[#D4A574]/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-relaxed mb-6">
              "{freudQuote.text}"
            </blockquote>
            <cite className="text-lg font-semibold text-[#8B7355] not-italic">
              — {freudQuote.author}
            </cite>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8F6F3] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Découvrez la psychothérapie, le coaching et la médiation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spécialisée dans la gestion des identités culturelles, de genre et de sexualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-lg font-medium text-gray-800">{spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#8B7355]/10 to-[#D4A574]/10 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-[#8B7355]" />
              <span className="text-sm font-semibold text-[#8B7355]">Mes Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Un accompagnement adapté à vos besoins
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thérapie individuelle, coaching, médiation, services de groupes et ateliers à thèmes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Circle;
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-[#F8F6F3]">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B7355] to-[#D4A574] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">{service.duration}</span>
                      <span className="text-lg font-bold text-[#8B7355]">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-all duration-300">
                Voir tous les services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8F6F3] to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600">
              Ce que disent mes clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-[#8B7355]">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8B7355] to-[#D4A574]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commencer votre cheminement ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Prenez le premier pas vers un mieux-être. Contactez-moi pour une première consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous">
              <Button size="lg" className="bg-white text-[#8B7355] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base">
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#8B7355] transition-all duration-300 text-base">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
