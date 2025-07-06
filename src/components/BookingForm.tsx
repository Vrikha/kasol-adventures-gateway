
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BookingFormProps {
  service: string;
  onClose: () => void;
  emailAddress: string;
}

const BookingForm = ({ service, onClose, emailAddress }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const subject = `Booking Inquiry for ${service} - KasolJourneys`;
    const body = `
Dear KasolJourneys Team,

I would like to make a booking inquiry for: ${service}

Personal Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Booking Details:
- Preferred Dates: ${formData.dates || 'Flexible'}
- Number of Guests: ${formData.guests || 'Not specified'}

Additional Message:
${formData.message || 'No additional message'}

Please get back to me with availability and pricing details.

Best regards,
${formData.name}
    `.trim();

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Email Client Opened",
      description: "Your email client should now be open with the booking details filled in.",
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Mail className="h-6 w-6 text-blue-600" />
              <span>Book via Email</span>
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Fill in your details and we'll open your email client with a pre-filled booking inquiry for <strong>{service}</strong>
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                  required
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-sm font-medium">
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleInputChange}
                  placeholder="2"
                  min="1"
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dates" className="text-sm font-medium">
                Preferred Dates
              </Label>
              <Input
                id="dates"
                name="dates"
                value={formData.dates}
                onChange={handleInputChange}
                placeholder="e.g., March 15-20, 2024 or Flexible"
                className="border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Additional Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any specific requirements, questions, or preferences..."
                rows={4}
                className="border-gray-300 focus:border-blue-500 resize-none"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>What happens next?</strong> Clicking "Send Email" will open your default email client 
                with all your details pre-filled. You can review and send the email to complete your booking inquiry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Email</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="sm:w-auto border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
