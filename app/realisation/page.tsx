"use client"

import React, { useState } from 'react'
import { ContactCTA } from '@/components/ContactCTA'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

// Types pour nos objets
type ProjectImage = string;

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  images: ProjectImage[];
}

export default function RealisationPage() {
  // État pour gérer l'image sélectionnée
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // État pour suivre quel projet est survolé
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Fonction pour ouvrir l'image
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setHoveredProject(null);
  };
  
  // Fonction pour fermer l'image
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  // Fonction pour render le carousel avec ou sans autoplay
  const renderCarousel = (project: Project, projectIndex: number) => {
    if (autoplayEnabled) {
      return (
        <Carousel 
          className="w-full"
          opts={{
            loop: true,
            duration: 80, // Durée plus longue pour une transition plus douce
          }}
          plugins={[
            createPlugin(projectIndex),
            Fade() // Effet de fondu
          ]}
        >
          <CarouselContent className="-ml-1">
            {project.images.map((image: string, index: number) => (
              <CarouselItem key={index} className="pl-1">
                <div 
                  className="relative h-64 cursor-pointer overflow-hidden" 
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xs transition-opacity duration-700"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-[#3A8E7F]" />
          <CarouselNext className="right-2 bg-[#3A8E7F]" />
        </Carousel>
      );
    } else {
      return (
        <Carousel 
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {project.images.map((image: string, index: number) => (
              <CarouselItem key={index}>
                <div 
                  className="relative h-64 cursor-pointer" 
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xs"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-[#3A8E7F]" />
          <CarouselNext className="right-2 bg-[#3A8E7F]" />
        </Carousel>
      );
    }
  };
  
  // Données des projets avec plusieurs images par projet
  const projects = [
    {
      id: 1,
      title: "Diverses plantations",
      description: "Plantation et création de massifs adaptés à la situation et aux besoins de nos clients.",
      location: "Vaud",
      year: "2018",
      images: [
        "/images/massif-ombre.jpg",
        "/images/massif-parking.jpg",
        "/images/massif-terrasse.jpg",
        "/images/massif-talu.jpg"
      ]
    },
    {
      id: 2,
      title: "Potagers surélevés",
      description: "Aménagement de divers potagers surélevé, avec des plantations en hauteur pour une meilleure visibilité et une meilleure récolte.",
      location: "Vaud",
      year: "2019",
      images: [
        "/images/potager-surelever-3.jpg",
        "/images/potager-surelever-4.jpg",
        "/images/potager-surelever-5.png"
      ]
    },
    {
      id: 3,
      title: "Création de terrasses",
      description: "Terrasse conçue pour vos moments de détente de convivialité en extérieur tout en s'intégrant harmonieusement à son environnement.",
      location: "Vevey",
      year: "2017",
      images: [
        "/images/terrasse-ombre.jpg",
        "/images/terrasse-pergola.jpg"
      ]
    },
    {
      id: 4,
      title: "Mariage",
      description: "Réalisation de la décoration d'un mariage en plein air, et décoration des tables avec des arrangements floraux.",
      location: "Morges",
      year: "2022",
      images: [
        "/images/mariage.jpg",
        "/images/mariage-2.jpg",
        "/images/mariage-3.jpg"
      ]
    }
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Nos Réalisations</h1>
      
      <p className="mb-8 text-lg text-white">
        Découvrez quelques-uns de nos projets. Chaque réalisation est unique et 
        reflète notre engagement à créer des espaces verts durables et harmonieux, 
        parfaitement adaptés aux besoins et aux envies de nos clients.
      </p>
      
      {/* Grid de projets avec carrousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, projectIndex) => (
          <Card 
            key={project.id} 
            className="bg-[#3A8E7F] pt-0 rounded-xs border-none overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-64">
              {hoveredProject === project.id 
                ? renderAutoplayCarousel(project, projectIndex)
                : renderStaticCarousel(project)
              }
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                {/* <span className="text-sm text-gray-400">{project.location}, {project.year}</span> */}
              </div>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-base text-gray-200">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Modal personnalisé pour afficher l'image en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleCloseModal}
        >
          <div className="relative h-[80vh] w-full max-w-4xl p-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-4 top-4 z-10 bg-black/50 text-white rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseModal();
              }}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={selectedImage}
              alt="Image agrandie"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-md"
            />
          </div>
        </div>
      )}
            
      {/* Composant ContactCTA */}
      <ContactCTA />
    </div>
  )
} 