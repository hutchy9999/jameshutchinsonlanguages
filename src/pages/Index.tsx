import { BookHero } from "@/components/BookHero";
import { ProductLinks } from "@/components/ProductLinks";
import { BookSection } from "@/components/BookSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <BookHero />
      <ProductLinks />
      <BookSection />
    </div>
  );
};

export default Index;