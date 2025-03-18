import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EquipePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Notre équipe</h1>
      
      <p className="text-lg mb-12 text-white">
        Chez Accès Jardin, notre équipe est composée de professionnels qualifiés et engagés 
        pour répondre à toutes vos demandes tout en respectant l'environnement.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-[#3A8E7F] border-none rounded-xs pt-0 overflow-hidden">
          <div className="h-64 relative">
            <Image 
              src="/images/equipe-gael.png" 
              alt="Gaël Rubin" 
              fill
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-black">Gaël Rubin</CardTitle>
          </CardHeader>
          <CardContent className="text-black">
            <p className="mb-4">
              À la tête de notre équipe se trouve Gaël Rubin, un professionnel expérimenté 
              dans le domaine du paysagisme et de la pépinière. Après avoir suivi ces 
              différents apprentissages, il a été l'un des fondateurs de l'Apothèque du Jorat, 
              une pépinière spécialisée dans la production de plantes aromatiques, 
              médicinales et de plantons de légumes labellisés Demeter.
            </p>
            <p className="mb-4">
              Pendant plusieurs années, il a développé ses compétences et enrichi 
              ses connaissances en production biologique et biodynamique des végétaux.
            </p>
            <p>
              Grâce à son parcours, il apporte une expertise pratique et diversifiée, mettant 
              son savoir au service de l'entretien et de petites créations d'espaces verts 
              durables et harmonieux.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#3A8E7F] border-none rounded-xs pt-0 overflow-hidden">
          <div className="h-64 relative">
            <Image 
              src="/images/equipe-tara.png" 
              alt="Tara Rollinet" 
              fill
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
          </div>
          <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-black">Tara Rollinet</CardTitle>
          </CardHeader>
          <CardContent className="text-black">
            <p className="mb-4">
              Tara Rollinet, conjointe de Gaël Rubin, apporte une précieuse contribution à 
              notre entreprise familiale grâce à son parcours en tant qu'horticultrice-
              floricultrice. Également Co-fondatrice de l'Apothèque du Jorat, elle a pu 
              développé des compétences solides dans la culture et l'entretien des 
              plantes, qu'elles soient ornementales, aromatiques ou médicinales.
            </p>
            <p>
              Partageant son enthousiasme pour la nature et son expertise, Tara prête main 
              forte sur les chantiers si besoin, tout en mettant à profit ses connaissances 
              approfondies pour assurer un entretien optimal des jardins. Son engagement et 
              son savoir-faire complètent harmonieusement notre vision d'espaces verts 
              durables et soignés.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 