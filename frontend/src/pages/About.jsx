import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Users, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { aboutText, specializations } from '../mockData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un espace sécurisant et sans jugement où vous pouvez vous exprimer librement."
    },
    {
      icon: Users,
      title: "Écoute Active",
      description: "Une attention authentique portée à votre histoire et vos besoins uniques."
    },
    {
      icon: Target,
      title: "Approche Personnalisée",
      description: "Des méthodes adaptées à votre situation pour des résultats concrets."
    },
    {
      icon: Award,
      title: "Professionnalisme",
      description: "Une formation solide et une pratique éthique au service de votre bien-être."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#FFF8F0] to-[#F0EBE3] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Qui suis-je ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Psychologue et psychothérapeute passionnée par l'accompagnement humain
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/126921/Tamila%20Hachemi%20Psychologue%20%C3%A0%20Marseille%201er.webp"
                  alt="Tamila Hachemi"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#D4A574] to-[#8B7355] rounded-3xl -z-10 blur-xl opacity-50"></div>
            </div>

            {/* Text Content */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>{aboutText.intro}</p>
                <p>{aboutText.main}</p>
                <p>{aboutText.approach}</p>
                <p className="font-medium text-[#8B7355]">{aboutText.mission}</p>
              </div>

              <div className="pt-6">
                <Link to="/rendez-vous">
                  <Button size="lg" className="bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mes valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident ma pratique thérapeutique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-[#F8F6F3]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8F6F3] to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mes domaines de spécialisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise développée pour répondre à vos besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#8B7355] to-[#D4A574] rounded-full group-hover:scale-150 transition-transform"></div>
                  <p className="text-lg font-medium text-gray-800">{spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="py-0 px-0">
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/126921/bandeau2%20%20Tamila%20Hachemi%20Psychologue%20%C3%A0%20Marseille%201er.webp"
            alt="Tamila Hachemi Cabinet"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8B7355] to-[#D4A574]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Commençons ensemble ce voyage
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Je suis là pour vous accompagner avec bienveillance dans votre cheminement personnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous">
              <Button size="lg" className="bg-white text-[#8B7355] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#8B7355] transition-all duration-300">
                Découvrir mes services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
