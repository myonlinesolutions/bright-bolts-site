import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Home, 
  Building, 
  AlertTriangle, 
  Wrench, 
  Lightbulb, 
  Plug, 
  Shield, 
  Clock,
  CheckCircle,
  Phone,
  Star,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Electrical",
      description: "Complete electrical services for your home, from simple repairs to full rewiring projects.",
      features: [
        "Electrical panel upgrades",
        "Outlet and switch installation",
        "Indoor and outdoor lighting",
        "Ceiling fan installation",
        "GFCI and AFCI protection",
        "Electrical troubleshooting"
      ],
      emergency: false
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and industrial facilities.",
      features: [
        "Commercial wiring systems",
        "Electrical maintenance contracts",
        "Power distribution systems",
        "Emergency lighting systems",
        "Motor and equipment wiring",
        "Electrical code compliance"
      ],
      emergency: false
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical services for urgent electrical issues and safety concerns.",
      features: [
        "Power outage diagnosis",
        "Electrical fire prevention",
        "Circuit breaker problems",
        "Dangerous wiring issues",
        "Storm damage repairs",
        "Same-day service available"
      ],
      emergency: true
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Electrical Maintenance",
      description: "Preventive maintenance services to keep your electrical systems running safely and efficiently.",
      features: [
        "Annual electrical inspections",
        "Panel maintenance and cleaning",
        "Wire and connection checks",
        "Safety device testing",
        "Energy efficiency audits",
        "Preventive repair recommendations"
      ],
      emergency: false
    }
  ];

  const specialtyServices = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "LED Lighting Upgrades",
      description: "Energy-efficient LED lighting solutions for homes and businesses."
    },
    {
      icon: <Plug className="h-8 w-8" />,
      title: "Electric Vehicle Charging",
      description: "EV charger installation and electrical upgrades for electric vehicles."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Surge Protection",
      description: "Whole-house surge protection systems to safeguard your electronics."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Home Wiring",
      description: "Modern wiring solutions for smart home automation systems."
    }
  ];

  const serviceAreas = [
    "Residential Electrical Services",
    "Commercial Electrical Work",
    "Industrial Electrical Solutions",
    "Emergency Electrical Repairs",
    "Electrical Inspections",
    "Code Compliance Updates"
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
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete 
              <span className="block bg-gradient-electric bg-clip-text text-transparent">
                Electrical Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From routine maintenance to complex installations, we provide comprehensive 
              electrical services for residential, commercial, and industrial clients.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Clock className="h-5 w-5 mr-2" />
              24/7 Emergency Service
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Main Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional electrical services tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-primary/50 relative overflow-hidden">
                {service.emergency && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive" className="animate-pulse">
                      24/7 Emergency
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-electric rounded-lg electric-glow group-hover:pulse-glow transition-all duration-300 flex-shrink-0">
                      <div className="text-primary-foreground">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="ghost" className="w-full group">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialty <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced electrical solutions for modern homes and businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-spark rounded-lg spark-glow group-hover:pulse-glow transition-all duration-300 w-fit">
                    <div className="text-primary-foreground">{service.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Service <span className="text-primary">Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We provide electrical services across all sectors and applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:border-primary/50 transition-all duration-300 group">
                <Zap className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="py-20 bg-gradient-to-r from-destructive/10 to-destructive/5 border-t border-destructive/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-destructive/20 rounded-full">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Electrical Emergency?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait! Electrical emergencies can be dangerous. Our certified electricians are available 24/7 for emergency repairs.
          </p>
          
          <Button variant="destructive" size="lg" className="text-lg px-8 py-6 animate-pulse">
            <Phone className="h-5 w-5 mr-2" />
            Call Emergency Line: (555) 911-ELECTRIC
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free consultation and estimate for your electrical project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;