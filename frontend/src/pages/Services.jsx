import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Euro } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mockData';
import * as LucideIcons from 'lucide-react';

const Services = () => {
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
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A574]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mes Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un accompagnement sur mesure pour répondre à vos besoins spécifiques en psychothérapie, coaching et médiation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Circle;
              return (
                <Card 
                  key={service.id} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-[#F8F6F3] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#D4A574] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                            <Clock className="w-4 h-4 text-[#8B7355]" />
                            <span className="text-sm font-medium text-gray-700">{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#8B7355]/10 to-[#D4A574]/10 rounded-lg">
                            <Euro className="w-4 h-4 text-[#8B7355]" />
                            <span className="text-sm font-bold text-[#8B7355]">{service.price}</span>
                          </div>
                        </div>
                        
                        <Link to="/rendez-vous">
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white transition-all duration-300 group-hover:scale-105"
                          >
                            Réserver ce service
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8F6F3] to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça se passe ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et bienveillant pour commencer votre accompagnement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Premier Contact",
                description: "Prenez rendez-vous en ligne ou par téléphone selon votre préférence."
              },
              {
                step: "02",
                title: "Première Séance",
                description: "Rencontre pour échanger sur vos besoins et définir vos objectifs."
              },
              {
                step: "03",
                title: "Accompagnement",
                description: "Séances régulières adaptées à votre rythme et vos besoins."
              },
              {
                step: "04",
                title: "Évolution",
                description: "Suivi de vos progrès et ajustement de l'accompagnement."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B7355] to-[#D4A574] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#D4A574] to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Les réponses à vos questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Combien de temps dure une séance ?",
                answer: "La durée varie selon le type de service : 45 à 60 minutes pour une séance individuelle, 60 à 75 minutes pour une thérapie de couple, et jusqu'à 90 minutes pour la médiation."
              },
              {
                question: "Quelle est la fréquence des séances ?",
                answer: "La fréquence est définie ensemble selon vos besoins. Généralement, nous commençons par des séances hebdomadaires, puis nous ajustons selon votre évolution."
              },
              {
                question: "Les séances sont-elles remboursées ?",
                answer: "Les consultations avec un psychologue ne sont pas remboursées par la Sécurité sociale, mais certaines mutuelles proposent une prise en charge partielle. Je vous fournis une facture pour vos démarches."
              },
              {
                question: "Puis-je annuler ou reporter un rendez-vous ?",
                answer: "Oui, vous pouvez annuler ou reporter votre rendez-vous en me prévenant au moins 48h à l'avance. Au-delà de ce délai, la séance pourra être facturée."
              },
              {
                question: "Proposez-vous des consultations en ligne ?",
                answer: "Oui, je propose des consultations en visioconférence pour les personnes qui ne peuvent pas se déplacer ou qui préfèrent ce format."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-white to-[#F8F6F3] rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8B7355] to-[#D4A574]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à franchir le pas ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Réservez votre première consultation et commençons ensemble votre cheminement vers le mieux-être.
          </p>
          <Link to="/rendez-vous">
            <Button size="lg" className="bg-white text-[#8B7355] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Prendre rendez-vous maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
