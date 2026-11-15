import testimonialsImage from "@/assets/testimonials.png";


export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
          What Others Are Saying
        </h2>
        
        <div className="flex justify-center">
          <img 
            src={testimonialsImage} 
            alt="Testimonials from language learners sharing their positive experiences with James's coaching advice"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
