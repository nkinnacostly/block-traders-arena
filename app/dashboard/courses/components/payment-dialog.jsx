import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/payment-dialog";
import { Separator } from "@/components/ui/separator";
import { useCurrencyFormatter } from "@/hooks/use-currency-formatter";
import { useQueryClient } from "@tanstack/react-query";

import React from "react";
import { PaystackConsumer } from "react-paystack";
// import { toast } from "sonner";
function PaymentDialog({ handleOpenChange, openChange, data }) {
  const queryClient = useQueryClient();
  const email = data?.sender_email;
  const amount = data?.amount + "00";
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLICK_KEY;
  const { formatCurrency } = useCurrencyFormatter();
  const config = {
    reference: data?.reference + "",
    email: email,
    amount: amount,
    publicKey: publicKey,
    phone: data?.sender_phone,
    name: data?.sender_name,
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    queryClient.invalidateQueries({ queryKey: ["users-videos"] });
    queryClient.invalidateQueries({ queryKey: ["users-info"] });
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Confirm Payment",
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
  };

  return (
    <Dialog open={openChange} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please Confirm your Details</DialogTitle>
          <Separator />
        </DialogHeader>
        <div className="flex my-4 flex-col gap-3">
          <h2>Name: {data?.sender_name}</h2>
          <h2>Amount: {formatCurrency(data?.amount)}</h2>
          <h2>Email: {data?.sender_email}</h2>
          <h2>Phone: {data?.sender_phone}</h2>

          <h2>Reference: {data?.reference}</h2>
        </div>
        <Separator />
        <DialogFooter>
          <PaystackConsumer {...componentProps}>
            {({ initializePayment }) => (
              <Button
                onClick={() => {
                  handleOpenChange(), initializePayment(onSuccess, onClose);
                }}
              >
                Confirm Payment
              </Button>
            )}
          </PaystackConsumer>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentDialog;
