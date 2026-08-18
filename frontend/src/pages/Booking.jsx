import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Calendar } from '../components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { services, timeSlots } from '../mockData';
import { fr } from 'date-fns/locale';

const Booking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: null,
    time: '',
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

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setBookingData({ ...bookingData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock booking submission
    console.log('Booking submitted:', bookingData);
    
    toast({
      title: "Rendez-vous demandé !",
      description: "Je vous contacterai très prochainement pour confirmer votre rendez-vous.",
    });

    // Reset form
    setCurrentStep(1);
    setSelectedDate(null);
    setBookingData({
      service: '',
      date: null,
      time: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const steps = [
    { number: 1, title: "Service", icon: User },
    { number: 2, title: "Date & Heure", icon: CalendarIcon },
    { number: 3, title: "Coordonnées", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#FFF8F0] to-[#F0EBE3] -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Prendre rendez-vous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Réservez votre consultation en quelques clics
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-gradient-to-r from-[#8B7355] to-[#D4A574] transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-br from-[#8B7355] to-[#D4A574] text-white shadow-lg scale-110'
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="w-8 h-8" />
                  ) : (
                    <step.icon className="w-8 h-8" />
                  )}
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 bg-gradient-to-br from-[#F8F6F3] to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Choisissez un service
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Sélectionnez le type de consultation qui correspond à vos besoins.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => setBookingData({ ...bookingData, service: service.title })}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            bookingData.service === service.title
                              ? 'border-[#8B7355] bg-gradient-to-br from-[#8B7355]/5 to-[#D4A574]/5 shadow-md'
                              : 'border-gray-200 hover:border-[#D4A574]'
                          }`}
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{service.duration}</p>
                          <p className="text-xl font-bold text-[#8B7355]">{service.price}</p>
                        </div>
                      ))}
                    </div>

                    <Button
                      type="button"
                      onClick={() => bookingData.service && setCurrentStep(2)}
                      disabled={!bookingData.service}
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continuer
                    </Button>
                  </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Choisissez une date et une heure
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Sélectionnez le jour et l'heure qui vous conviennent.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Date du rendez-vous
                        </label>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          locale={fr}
                          disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                          className="rounded-xl border shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Heure du rendez-vous
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setBookingData({ ...bookingData, time })}
                              disabled={!selectedDate}
                              className={`p-3 rounded-lg border-2 transition-all duration-300 font-medium ${
                                bookingData.time === time
                                  ? 'border-[#8B7355] bg-gradient-to-br from-[#8B7355] to-[#D4A574] text-white shadow-md'
                                  : 'border-gray-200 hover:border-[#D4A574] disabled:opacity-50 disabled:cursor-not-allowed'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                        size="lg"
                        className="flex-1 border-2 border-gray-300"
                      >
                        Retour
                      </Button>
                      <Button
                        type="button"
                        onClick={() => bookingData.date && bookingData.time && setCurrentStep(3)}
                        disabled={!bookingData.date || !bookingData.time}
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white disabled:opacity-50"
                      >
                        Continuer
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Vos coordonnées
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Renseignez vos informations pour finaliser la réservation.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          placeholder="Votre nom"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={bookingData.email}
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                          placeholder="votre.email@exemple.com"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          placeholder="06 XX XX XX XX"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message (optionnel)
                        </label>
                        <Textarea
                          id="message"
                          value={bookingData.message}
                          onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                          placeholder="Parlez-moi brièvement de votre situation..."
                          rows={4}
                          className="w-full resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        size="lg"
                        className="flex-1 border-2 border-gray-300"
                      >
                        Retour
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-[#8B7355] to-[#D4A574] hover:from-[#7A6347] hover:to-[#C39563] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Confirmer le rendez-vous
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Booking Summary */}
          {currentStep > 1 && (
            <Card className="mt-6 border-0 shadow-lg bg-gradient-to-br from-[#F8F6F3] to-white">
              <CardHeader>
                <CardTitle className="text-xl">Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bookingData.service && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Service :</span>
                      <span className="font-semibold text-gray-900">{bookingData.service}</span>
                    </div>
                  )}
                  {bookingData.date && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Date :</span>
                      <span className="font-semibold text-gray-900">
                        {bookingData.date.toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  )}
                  {bookingData.time && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Heure :</span>
                      <span className="font-semibold text-gray-900">{bookingData.time}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default Booking;
