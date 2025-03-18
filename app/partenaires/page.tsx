import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// Données des partenaires (à remplacer par vos vrais partenaires)
const partners = [
  {
    id: 1,
    name: "Jardin Suisse",
    logo: "/images/partners/jardin-suisse.png", // À remplacer par le vrai logo
    description: "Association professionnelle des entreprises horticoles suisses, garantissant des standards de qualité élevés.",
    website: "https://www.jardinsuisse.ch"
  },
  {
    id: 2,
    name: "Bio Suisse",
    logo: "/images/partners/bio-suisse.png", // À remplacer par le vrai logo
    description: "Label de qualité pour les produits biologiques suisses, assurant des méthodes de culture respectueuses de l'environnement.",
    website: "https://www.bio-suisse.ch"
  },
  {
    id: 3,
    name: "Pépinières Vaudoises",
    logo: "/images/partners/pepinieres-vaudoises.png", // À remplacer par le vrai logo
    description: "Fournisseur local de plantes et arbustes de qualité, cultivés dans le respect des traditions horticoles suisses.",
    website: "https://www.example.com/pepinieres"
  },
  {
    id: 4,
    name: "Outils & Jardins",
    logo: "/images/partners/outils-jardins.png", // À remplacer par le vrai logo
    description: "Distributeur d'équipements et d'outils professionnels pour l'aménagement et l'entretien des espaces verts.",
    website: "https://www.example.com/outils"
  },
  {
    id: 5,
    name: "Terre Vivante",
    logo: "/images/partners/terre-vivante.png", // À remplacer par le vrai logo
    description: "Spécialiste des amendements et substrats naturels pour jardins écologiques et durables.",
    website: "https://www.example.com/terre-vivante"
  },
  {
    id: 6,
    name: "Eau & Jardins",
    logo: "/images/partners/eau-jardins.png", // À remplacer par le vrai logo
    description: "Expert en systèmes d'irrigation écologiques et en gestion durable de l'eau pour les espaces verts.",
    website: "https://www.example.com/eau-jardins"
  }
];

export default function PartenairesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Nos Partenaires</h1>
    </div>
  );
}
