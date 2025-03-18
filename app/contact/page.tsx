"use client"

import React from 'react'
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Contactez-nous</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Informations de contact - 1 colonne à gauche */}
        <Card className="p-6 bg-[#3A8E7F] border-none rounded-xs md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-white mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Adresse</h3>
                <p>Route de Servion 5<br />1083 Jorat-Mézières<br />Suisse</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-white mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Téléphone</h3>
                <p>+41 79 626 02 33</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-white mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>info@acces-jardin.ch</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-white mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Horaires d'ouverture</h3>
                <p>Lundi - Vendredi: 8h00 - 18h00<br />
                Samedi: Fermé<br />
                Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Zone d'intervention - 2 colonnes à droite */}
        <Card className="px-6 pb-0 bg-[#3A8E7F] border-none rounded-xs md:col-span-2 flex flex-col min-h-[300px]">
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-4 text-black">Zone d'intervention</h2>
            <p className="mb-3 text-black">
              Nous intervenons principalement dans la région Lausannoise et le canton de Vaud, 
              mais nous pouvons également nous déplacer dans les cantons limitrophes 
              pour des projets spécifiques.
            </p>
            <p className="mb-4 text-black">
              N'hésitez pas à nous contacter pour vérifier si votre localisation est 
              dans notre zone d'intervention.
            </p>
          </div>
          
          {/* Image en bas de la carte */}
          <div 
            className="bg-[url('/images/philo-bg-cart.png')] bg-contain bg-no-repeat bg-bottom h-60 w-full mt-auto"
            style={{ backgroundPosition: 'center bottom' }}
          >
          </div>
        </Card>
      </div>
    </div>
  );
} 