"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

// Styles pour la barre de défilement personnalisée
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

// Type pour les images des partenaires
type PartnerImage = string;

// Interface pour les données des partenaires
interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  images: PartnerImage[]; // Ajout d'un tableau d'images pour le carrousel
}

// Données des partenaires avec des images supplémentaires pour les carrousels
const partners: Partner[] = [
  {
    id: 1,
    name: "L'Apothèque du Jorat",
    logo: "/images/logo.png",
    description: "Située  à Mézières, L'Apothèque du Jorat est une pépinière biodynamique, labellisée Demeter. Spécialisée dans la culture de plantes utiles et majoritairement indigènes, elle propose une riche diversité de plantes aromatiques, médicinales, ainsi que de plantons de légumes, parfaits pour enrichir vos jardins et potagers. Les produits de la pépinière sont disponibles au marché de Lausanne, où vous pourrez les découvrir dans une ambiance conviviale, mais également lors des foires horticoles de la région, où la passion pour les plantes rassemble amateurs et experts. Pour ceux qui préfèrent la proximité et l'autonomie, un espace de self-service est aménagé à proximité de la pépinière, permettant d'accéder facilement à une sélection de plantes tout au long de la saison.",
    website: "https://www.apothequedujorat.ch",
    images: [
      "/images/partenaire-apo.jpg",
      "/images/partenaire-apo2.png",
      "/images/partenaire-apo3.jpeg",
      "/images/partenaire-apo4.jpeg"
    ]
  },
];

export default function PartenairesPage() {
  // État pour suivre quels partenaires ont du contenu caché
  const [hasHiddenContent, setHasHiddenContent] = useState<{[key: number]: boolean}>({});
  
  // Référence pour les éléments de description
  const descriptionRefs = React.useRef<{[key: number]: HTMLDivElement | null}>({});
  
  // Fonction pour définir la référence
  const setDescriptionRef = (partnerId: number, element: HTMLDivElement | null) => {
    descriptionRefs.current[partnerId] = element;
  };
  
  // Fonction pour vérifier si un élément a du contenu caché
  const checkOverflow = React.useCallback((partnerId: number, element: HTMLDivElement | null) => {
    if (element) {
      const hasOverflow = element.scrollHeight > element.clientHeight;
      setHasHiddenContent(prev => ({...prev, [partnerId]: hasOverflow}));
    }
  }, []);
  
  // Effet pour vérifier le débordement au montage du composant
  React.useEffect(() => {
    const checkAllOverflows = () => {
      Object.entries(descriptionRefs.current).forEach(([key, element]) => {
        if (element) {
          checkOverflow(parseInt(key), element);
        }
      });
    };
    
    // Vérifier initialement après un court délai pour s'assurer que le DOM est bien rendu
    const timeoutId = setTimeout(checkAllOverflows, 100);
    
    // Ajouter un écouteur de redimensionnement
    window.addEventListener('resize', checkAllOverflows);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkAllOverflows);
    };
  }, [checkOverflow]);

  // Fonction pour créer un plugin d'autoplay avec un délai différent selon la position
  const createPlugin = (index: number) => {
    // Configurer un délai différent pour chaque carrousel
    const delay = 4000 + (index * 1000); // 4 secondes + 1 seconde par index
    
    return Autoplay({
      delay: delay,
      stopOnInteraction: true,
    });
  };
  
  // Fonction pour générer le carrousel
  const renderCarousel = (partner: Partner, partnerIndex: number) => {
    return (
      <Carousel 
        className="w-full h-full"
        opts={{
          loop: true,
          duration: 80, // Durée plus longue pour une transition plus douce
        }}
        plugins={[
          createPlugin(partnerIndex),
          Fade() // Effet de fondu
        ]}
      >
        <CarouselContent className="-ml-1 h-full">
          {partner.images.map((image: string, index: number) => (
            <CarouselItem key={index} className="pl-1 h-full">
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={`${partner.name} - Image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-opacity duration-700"
                  onLoad={() => console.log(`Image chargée: ${image}`)}
                  onError={() => console.error(`Erreur de chargement: ${image}`)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <style jsx global>{scrollbarStyles}</style>
      <h1 className="text-4xl font-bold mb-6 text-white">Nos Partenaires</h1>
      
      <p className="mb-8 text-lg text-white">
        Découvrez les entreprises et organisations avec lesquelles nous collaborons pour offrir des services 
        de qualité. Nos partenariats nous permettent de vous proposer des solutions durables et innovantes 
        pour vos espaces verts.
      </p>
      
      {/* Liste des partenaires en format colonne */}
      <div className="flex flex-col space-y-8 mb-12">
        {partners.map((partner, partnerIndex) => (
          <Card key={partner.id} className="bg-[#3A8E7F] border-none overflow-hidden p-0 rounded-xs">
            <div className="flex flex-col md:flex-row h-full">
              {/* Côté gauche : Carrousel d'images */}
              <div className="w-full md:w-2/5 flex-shrink-0 relative overflow-hidden">
                {renderCarousel(partner, partnerIndex)}
              </div>
              
              {/* Côté droit : Contenu texte */}
              <div className="w-full md:w-3/5 flex flex-col px-6 py-4">
                <CardHeader className="pb-2 p-0 pt-2 md:p-0 md:pt-0">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center">
                      <CardTitle className="text-xl font-semibold text-white">{partner.name}</CardTitle>
                      <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-white hover:text-white/80 transition-opacity">
                        <ExternalLink className="h-5 w-5 opacity-80 hover:opacity-100" />
                      </Link>
                    </div>
                    <div className="h-16 w-16 relative">
                      <Image 
                        src={partner.logo} 
                        alt={`Logo ${partner.name}`} 
                        fill
                        style={{ objectFit: 'contain' }}
                        className="bg-white p-1"
                      />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow overflow-hidden relative px-0">
                  <div 
                    ref={(el) => setDescriptionRef(partner.id, el)}
                    className="max-h-[220px] md:max-h-[280px] overflow-y-auto pr-2 custom-scrollbar"
                    onScroll={(e) => {
                      const target = e.currentTarget;
                      const isAtBottom = Math.abs((target.scrollHeight - target.scrollTop) - target.clientHeight) < 5;
                      if (isAtBottom) {
                        setHasHiddenContent(prev => ({...prev, [partner.id]: false}));
                      } else {
                        setHasHiddenContent(prev => ({...prev, [partner.id]: true}));
                      }
                    }}
                  >
                    <CardDescription className="text-base text-gray-200 leading-relaxed">
                      <p className="first-letter:text-lg first-letter:font-medium">
                        {partner.description}
                      </p>
                    </CardDescription>
                  </div>
                  
                  {/* Dégradé de transparence */}
                  {hasHiddenContent[partner.id] && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#3A8E7F] to-transparent pointer-events-none"></div>
                  )}
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
