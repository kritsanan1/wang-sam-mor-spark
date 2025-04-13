
import React from 'react';
import { CreditCard, MessageCircle } from 'lucide-react';

interface PaymentMethod {
  id: string;
  name: string;
  details: string;
}

interface ContactMethod {
  id: string;
  name: string;
  details: string;
  icon: string;
}

interface PaymentContactSectionProps {
  paymentMethods: PaymentMethod[];
  contactMethods: ContactMethod[];
}

const PaymentContactSection = ({ paymentMethods, contactMethods }: PaymentContactSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="wang-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-wang-orange" />
              ช่องทางการชำระเงิน
            </h3>
            <div className="space-y-4">
              {paymentMethods.map(method => (
                <div key={method.id} className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-medium mb-1">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Methods */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-wang-orange" />
              ช่องทางการติดต่อสอบถาม
            </h3>
            <div className="space-y-4">
              {contactMethods.map(method => (
                <div key={method.id} className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-medium mb-1">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentContactSection;
