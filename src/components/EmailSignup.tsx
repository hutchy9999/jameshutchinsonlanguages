import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface EmailSignupProps {
  variant?: "hero" | "secondary";
  className?: string;
}

export const EmailSignup = ({ variant = "secondary", className = "" }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Subscribe via ConvertKit
    try {
      const { error } = await supabase.functions.invoke('subscribe-convertkit', {
        body: { email: email.trim() }
      });

      if (error) {
        console.error('ConvertKit subscription error:', error);
        throw error;
      }
      
      toast({
        title: "Success!",
        description: "You're signed up! I'll send you free snippets and launch updates soon.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error", 
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-1 ${isHero ? 'h-12 text-base' : ''}`}
            disabled={isLoading}
          />
          <Button
            type="submit"
            variant={isHero ? "hero" : "default"}
            size={isHero ? "lg" : "default"}
            disabled={isLoading}
            className={isHero ? "sm:w-auto w-full" : ""}
          >
            {isLoading ? "Signing up..." : isHero ? "Get Free Snippets" : "Sign Up"}
          </Button>
        </div>
        {isHero && (
          <p className="text-sm text-muted-foreground text-center">
            No spam. Just practical language learning insights.
          </p>
        )}
      </form>
    </div>
  );
};