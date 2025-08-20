import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Zap,
  Send,
  AlertTriangle,
  CheckCircle,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll contact you within 24 hours to discuss your electrical needs.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      urgent: false
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      items: [
        "Main Line: (555) 123-ELECTRIC",
        "Emergency: (555) 911-ELECTRIC",
        "Office: (555) 123-4567"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      items: [
        "info@electricpro.com",
        "emergency@electricpro.com",
        "quotes@electricpro.com"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Areas",
      items: [
        "Los Angeles County",
        "Orange County",
        "Ventura County"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      items: [
        "Mon-Fri: 7:00 AM - 6:00 PM",
        "Saturday: 8:00 AM - 4:00 PM",
        "Emergency: 24/7 Available"
      ]
    }
  ];

  const services = [
    "Residential Electrical",
    "Commercial Electrical", 
    "Emergency Repairs",
    "Electrical Maintenance",
    "Panel Upgrades",
    "Lighting Installation",
    "Other (Specify in message)"
  ];

  const reasons = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Free, no-obligation estimates"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Licensed and insured professionals"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Same-day emergency service"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Competitive pricing and warranties"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 spark-glow">
              <Star className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact
              <span className="block bg-gradient-electric bg-clip-text text-transparent">
                ElectricPro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your electrical project? Get in touch with our expert team for 
              professional electrical services, free estimates, and 24/7 emergency support.
            </p>
          </div>

          {/* Emergency Banner */}
          <Card className="bg-destructive/10 border-destructive/30 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4">
                <AlertTriangle className="h-8 w-8 text-destructive animate-pulse" />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-destructive mb-2">Electrical Emergency?</h3>
                  <p className="text-muted-foreground mb-4">Don't wait! Call our emergency line immediately.</p>
                  <Button variant="destructive" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency: (555) 911-ELECTRIC
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                  Request a Quote
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your electrical project or issue in detail..."
                      rows={5}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="urgent"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleInputChange}
                      className="rounded border-input"
                    />
                    <Label htmlFor="urgent" className="text-sm">
                      This is an urgent request (we'll prioritize your message)
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="electric" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Multiple ways to reach us for all your electrical needs. We're here to help!
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <div className="p-2 bg-gradient-electric rounded-lg electric-glow mr-3">
                          <div className="text-primary-foreground">{info.icon}</div>
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {info.items.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-muted-foreground">
                            {item}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Why Choose ElectricPro?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {reasons.map((reason, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="text-primary">{reason.icon}</div>
                        <span>{reason.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            For urgent electrical issues or immediate quotes, call us directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-ELECTRIC
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;