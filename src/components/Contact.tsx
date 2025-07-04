
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your business? We'd love to hear from you and explore potential opportunities.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input placeholder="Your full name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <Input placeholder="Your company name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your business and how we can help..."
                  className="w-full h-32"
                />
              </div>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@stockfishcapital.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">New York, NY</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Ready to Sell Your Business?</h3>
              <p className="text-blue-100 mb-4">
                If you own a profitable SME and are considering an exit, we'd love to discuss your options.
              </p>
              <Button variant="outline" className="border-white text-blue-900 bg-white hover:bg-blue-50 hover:text-blue-900">
                Schedule a Confidential Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
