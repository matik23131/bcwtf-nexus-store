import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, CheckCircle } from "lucide-react";

interface PurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle: string;
  price: string;
}

const PurchaseDialog = ({ open, onOpenChange, productTitle, price }: PurchaseDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Purchase {productTitle}
          </DialogTitle>
          <DialogDescription>
            Complete your purchase securely
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Product Summary */}
          <div className="bg-muted rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">{productTitle}</span>
              <span className="text-lg font-bold text-primary">{price}</span>
            </div>
          </div>

          <Separator />

          {/* Payment Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div>
              <Label htmlFor="discord">Discord Username</Label>
              <Input id="discord" placeholder="username#1234" />
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Secure payment processing</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>Instant delivery to your email</span>
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1">
              Pay {price}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;