import React from 'react'

export default function PhilosophiePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Notre Philosophie</h1>
      
      <div className="bg-[#3A8E7F] p-6 rounded-xs mb-8">
        <h2 className="text-2xl font-semibold mb-4">Un jardin naturel et respectueux</h2>
        <p className="mb-4">
          Chez Accès Jardin, nous croyons que chaque espace vert peut être à la fois beau, utile et écologique.
          Nous favorisons la biodiversité en utilisant des plantes indigènes tout en mettant en valeur les produits locaux et naturels.
          Notre approche durable et respectueuse de l'environnement transforme chaque jardin en un refuge pour la faune et un espace de quiétude pour tous.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-[#3A8E7F] p-6 rounded-xs">
          <h3 className="text-2xl font-semibold mb-3">Nos valeurs</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respect de l'environnement et de la biodiversité</li>
            <li>Utilisation de techniques et produits écologiques</li>
            <li>Création d'espaces durables et autonomes</li>
            <li>Valorisation des plantes indigènes et des produits locaux</li>
            <li>Adaptation aux besoins spécifiques de chaque client</li>
          </ul>
        </div>
        
        <div className="col-span-1 bg-[#3A8E7F] rounded-xs flex flex-col justify-end min-h-[300px] hidden md:flex">
          <div 
            className="bg-[url('/images/philo-bg-cart.png')] bg-contain bg-no-repeat bg-bottom h-60 w-full"
            style={{ backgroundPosition: 'center bottom' }}
          >
          </div>
        </div>
      </div>
    </div>
  )
} 