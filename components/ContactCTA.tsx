import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function ContactCTA({
  title = "Vous avez un projet en tête ?",
  description = "Que vous souhaitiez créer un nouveau jardin, rénover un espace existant ou simplement entretenir votre coin de verdure, nous sommes là pour vous accompagner dans votre projet.",
  buttonText = "Contactez-nous",
  buttonLink = "/contact"
}: ContactCTAProps) {
  return (
    <Card className="mt-6 bg-[#3A8E7F] border-none rounded-xs text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="max-w-2xl mx-auto text-black">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          asChild
          variant="secondary" 
          className="bg-[#363636] text-white hover:bg-[#2D7A6D] transition-colors"
        >
          <Link href={buttonLink}>
            {buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 