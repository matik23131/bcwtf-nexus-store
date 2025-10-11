import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CreateTestProductsButton = () => {
  const handleCreateProducts = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Please login first");
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-test-products', {
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) throw error;

      toast.success("Test products created successfully!");
      window.location.reload();
    } catch (error: any) {
      toast.error(error.message || "Failed to create test products");
    }
  };

  return (
    <Button onClick={handleCreateProducts} className="mb-4">
      Create Test Products with Product Box Image
    </Button>
  );
};

export default CreateTestProductsButton;
