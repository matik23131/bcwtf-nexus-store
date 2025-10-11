import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const UpdateProductImagesButton = () => {
  const handleUpdateImages = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Please login first");
        return;
      }

      const { data, error } = await supabase.functions.invoke('update-product-images', {
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) throw error;

      toast.success("Product images updated successfully!");
      window.location.reload();
    } catch (error: any) {
      toast.error(error.message || "Failed to update product images");
    }
  };

  return (
    <Button onClick={handleUpdateImages} variant="outline" className="mb-4">
      Update All Product Images
    </Button>
  );
};

export default UpdateProductImagesButton;
