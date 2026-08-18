import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { siteInfo } from '../mockData';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message envoyé !",
      description: "Je vous recontacterai dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: siteInfo.address,
      color: "from-[#8B7355] to-[#D4A574]"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: siteInfo.phone,
      color: "from-[#D4A574] to-[#E8C4A0]"
    },
    {
      icon: Mail,
      title: "Email",
      content: siteInfo.email,
      color: "from-[#8B7355] to-[#A68968]"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: siteInfo.hours,
      color: "from-[#D4A574] to-[#8B7355]"
    }
  ];

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
              Contactez-moi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Je suis à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8F6F3] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Envoyez-moi un message
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les meilleurs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full border-gray-300 focus:border-[#8B7355] focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    className="w-full border-gray-300 focus:border-[#8B7355] focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    className="w-full border-gray-300 focus:border-[#8B7355] focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre situation et de vos besoins..."
                    rows={6}
                    className="w-full border-gray-300 focus:border-[#8B7355] focus:ring-[#8B7355] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Map / Additional Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-[#F8F6F3] to-[#F0EBE3] flex items-center justify-center">
                  {/* Google Maps Embed would go here */}
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-[#8B7355] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Cabinet à Marseille 1er
                    </h3>
                    <p className="text-gray-600 mb-4">{siteInfo.address}</p>
                    <p className="text-sm text-gray-500">
                      Facilement accessible en transports en commun
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#8B7355] to-[#D4A574] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Première consultation
                  </h3>
                  <p className="mb-6 leading-relaxed">
                    La première séance est l'occasion de faire connaissance, d'échanger sur vos besoins et de définir ensemble les modalités de l'accompagnement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Espace confidentiel et bienveillant</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Sans engagement</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Tarif identique aux séances suivantes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
