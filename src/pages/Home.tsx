import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Clock, 
  Award, 
  Phone, 
  CheckCircle, 
  Star,
  Wrench,
  Home as HomeIcon,
  Building
} from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";
import portfolioImage from "@/assets/electrical-work-grid.jpg";

const Home = () => {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Residential Electrical",
      description: "Complete home electrical services including wiring, outlets, and lighting installation."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Electrical",
      description: "Professional commercial electrical solutions for businesses and industrial facilities."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical repair services for urgent electrical issues."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Electrical Maintenance",
      description: "Regular maintenance and inspection services to keep your electrical systems safe."
    }
  ];

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: "Licensed & Insured" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Emergency Service" },
    { icon: <Award className="h-5 w-5" />, text: "15+ Years Experience" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Satisfaction Guaranteed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 spark-glow">
            <Star className="h-4 w-4 mr-2" />
            Trusted by 500+ Customers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Professional
            <span className="block bg-gradient-electric bg-clip-text text-transparent spark-animation">
              Electrical Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert electrical solutions for your home and business. Licensed, insured, and committed to safety and quality workmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm">
                <div className="text-primary">{feature.icon}</div>
                <span className="text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Electrical Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple repairs to complex installations, we provide comprehensive electrical solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-electric rounded-lg electric-glow group-hover:pulse-glow transition-all duration-300 w-fit">
                    <div className="text-primary-foreground">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">
                View All Services
                <Zap className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality Work, <span className="text-primary">Proven Results</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take a look at our recent electrical projects. From residential rewiring to commercial installations, 
                we deliver professional results that meet the highest safety standards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Code-compliant installations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>High-quality materials only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Detailed project documentation</span>
                </div>
              </div>
              
              <Button variant="electric" size="lg" asChild>
                <Link to="/portfolio">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={portfolioImage} 
                alt="Electrical work portfolio"
                className="rounded-lg shadow-xl w-full electric-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Electrical Work Done Right?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free consultation and quote. Available 24/7 for emergency services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-ELECTRIC
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;