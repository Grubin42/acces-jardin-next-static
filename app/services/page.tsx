import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactCTA } from '@/components/ContactCTA'

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Nos Services</h1>
      
      <p className="mb-8 text-lg text-white">
        Accès Jardin vous propose divers services d'entretien de jardin et de petites créations.
        Transformez votre espace extérieur grâce à notre savoir-faire et notre engagement pour la nature,
        en créant un jardin magnifique et accueillant adapté à vos besoins.
      </p>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#3A8E7F] border-none rounded-xs">
          <CardHeader className="">
            <CardTitle className="text-black text-lg">Entretien de jardin</CardTitle>
            <CardDescription className='text-white max-w-xs'>
              Afin d'assurer l'entretien de votre jardin, 
              AccèsJardin vous propose:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Désherbage</li>
              <li>Tailles d'arbres et arbustes</li>
              <li>Taille de haie</li>
              <li>Taille de fruitiers</li>
              <li>Entretien de gazon</li>
              <li>Ramassage de feuilles</li>
              <li>Débroussaillage</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-[#3A8E7F] border-none rounded-xs">
          <CardHeader className="pb-2">
            <CardTitle className="text-black text-lg">Soin aux arbres et abattage</CardTitle>
            <CardDescription className='text-white max-w-xs'>
              Afin d'assurer les soins spécifiques à vos 
              arbres, Accès Jardin vous propose:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Taille d'arbres et arbustes</li>
              <li>Taille de haie</li>
              <li>Taille d'arbres fruitiers</li>
              <li>Traitement préventif des maladies</li>
              <li>Abattage</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-[#3A8E7F] border-none rounded-xs">
          <CardHeader className="pb-2">
            <CardTitle className="text-black text-lg">Plantation</CardTitle>
            <CardDescription className='text-white max-w-xs'>
              Pour une envie de renouveler vos massifs, 
              Accès Jardin vous propose:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Plantation de plantes vivaces</li>
              <li>Plantation de graminées</li>
              <li>Plantation de haie libre</li>
              <li>Plantation d'arbres</li>
              <li>Plantation d'arbustes</li>
              <li>Plantation de fruitiers</li>
              <li>Potager</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-[#3A8E7F] border-none rounded-xs">
          <CardHeader className="pb-2">
            <CardTitle className="text-black text-lg">Petites créations</CardTitle>
            <CardDescription className='text-white max-w-xs'>
              Pour une envie de créer de nouveaux 
              aménagements, Accès Jardin vous propose:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bacs de potagers surélevés</li>
              <li>Création de massifs</li>
              <li>Dallage et pavage</li>
              <li>Petite terrasse</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Utilisation du composant ContactCTA avec les valeurs par défaut */}
      <ContactCTA />
      
      {/* Ou avec des valeurs personnalisées */}
      {/* 
      <ContactCTA 
        title="Prêt à transformer votre jardin ?" 
        description="Découvrez comment nous pouvons vous aider à créer l'espace extérieur de vos rêves."
        buttonText="Demander un devis"
        buttonLink="/contact"
      />
      */}
    </div>
  )
} 