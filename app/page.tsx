import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
      {/* Carte Bienvenue */}
      <Link
        href="/philosophie"
        className="row-span-1 col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-3 order-1 md:order-1 lg:order-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Card className="h-full min-h-[400px] md:min-h-[500px] lg:min-h-[800px] rounded-xs bg-[url('/images/bg-cart-principal.jpg')] bg-cover bg-center border-none flex items-center justify-center shadow-md">
          <div className="flex flex-col w-full bg-[rgba(195,204,174,0.9)] py-8 text-black text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-medium">
                Bienvenue chez Accès Jardin
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <p>
                A votre service pour un jardin naturel et respectueux de
                l'environnement.
              </p>
            </CardContent>
          </div>
        </Card>
      </Link>

      {/* Carte Nos services */}
      <Link
        href="/services"
        className="row-span-1 col-span-1 lg:row-span-2 order-2 md:order-2 lg:order-1 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Card className="h-full min-h-[250px] rounded-xs bg-[url('/images/bg-cart-service.jpg')] bg-cover bg-end border-none flex items-center justify-end shadow-md">
          <CardTitle className="bg-[#3A8E7F] text-3xl font-medium text-white p-3 border-1 rounded-xs">
            Nos services
          </CardTitle>
        </Card>
      </Link>

      {/* Carte Notre équipe */}
      <Link
        href="/equipe"
        className="row-span-1 col-span-1 order-3 md:order-3 lg:order-3 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Card className="h-full min-h-[200px] rounded-xs bg-[url('/images/bg-cart-equipe.jpg')] bg-cover bg-center border-none flex items-center justify-end shadow-md">
          <CardTitle className="bg-[#3A8E7F] text-3xl font-medium text-white p-3 border-1 rounded-xs">
            Notre équipe
          </CardTitle>
        </Card>
      </Link>

      {/* Carte Nos réalisations */}
      <Link
        href="/realisation"
        className="row-span-1 col-span-1 lg:row-span-2 order-4 md:order-4 lg:order-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Card className="h-full min-h-[250px] rounded-xs bg-[url('/images/bg-cart-realisation.jpg')] bg-cover bg-center border-none flex items-center justify-end shadow-md">
          <CardTitle className="bg-[#3A8E7F] text-3xl font-medium text-white p-3 border-1 rounded-xs">
            Nos réalisations
          </CardTitle>
        </Card>
      </Link>

      {/* Carte Contact */}
      <Link
        href="/contact"
        className="row-span-1 col-span-1 order-5 md:order-5 lg:order-5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Card className="h-full min-h-[200px] rounded-xs bg-[url('/images/bg-cart-contact.png')] bg-cover bg-center border-none flex items-center justify-end shadow-md">
          <CardTitle className="bg-[#3A8E7F] text-3xl font-medium text-white p-3 border-1 rounded-xs">
            Contact
          </CardTitle>
        </Card>
      </Link>

      {/* Nouvelle carte Partenaires sur toute la largeur */}
      <Link
        href="/partenaires"
        className="row-span-1 col-span-1 md:col-span-2 lg:col-span-3 order-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Card className="h-48 rounded-xs bg-[url('/images/bg-cart-partenaire.png')] bg-cover bg-center border-none flex items-center justify-end shadow-md">
          <CardTitle className="bg-[#3A8E7F] text-3xl font-medium text-white p-3 border-1 rounded-xs">
            Nos partenaires
          </CardTitle>
        </Card>
      </Link>
    </div>
  );
}
