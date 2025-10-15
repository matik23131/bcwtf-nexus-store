import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Shield } from "lucide-react";

const CreateAdminButton = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createAdminAccount = async () => {
    setLoading(true);
    try {
      // Sign up test admin
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: "admin@bc.wtf",
        password: "admin123456",
      });

      if (signUpError) {
        if (signUpError.message.includes("already registered")) {
          toast({
            title: "Admin account already exists",
            description: "Email: admin@bc.wtf | Password: admin123456",
          });
        } else {
          throw signUpError;
        }
      } else if (signUpData.user) {
        // Wait a bit for the profile trigger to create the profile
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Update profile to admin role
        const { error: profileError } = await supabase
          .from("profiles")
          .update({ role: "admin" })
          .eq("user_id", signUpData.user.id);

        if (profileError) {
          console.error("Profile error:", profileError);
          throw profileError;
        }

        toast({
          title: "Admin account created!",
          description: "Email: admin@bc.wtf | Password: admin123456",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={createAdminAccount}
      disabled={loading}
      variant="outline"
      className="gap-2"
    >
      <Shield className="w-4 h-4" />
      {loading ? "Creating..." : "Create Test Admin"}
    </Button>
  );
};

export default CreateAdminButton;