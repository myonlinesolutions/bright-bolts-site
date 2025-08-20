import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Home, 
  Building, 
  Star,
  Phone,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  CheckCircle
} from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects", icon: <Zap className="h-4 w-4" /> },
    { id: "residential", name: "Residential", icon: <Home className="h-4 w-4" /> },
    { id: "commercial", name: "Commercial", icon: <Building className="h-4 w-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Home Electrical Upgrade",
      category: "residential",
      location: "Beverly Hills, CA",
      date: "2024",
      image: portfolio1,
      description: "Complete electrical panel upgrade and smart home wiring installation for a luxury residence.",
      features: [
        "200A electrical panel upgrade",
        "Smart lighting system installation",
        "GFCI outlet installation throughout",
        "USB charging stations",
        "Landscape lighting setup"
      ],
      testimonial: "Outstanding work! The team was professional, clean, and completed everything on time.",
      client: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Industrial Facility Rewiring",
      category: "commercial",
      location: "Downtown LA",
      date: "2024",
      image: portfolio2,
      description: "Complete electrical infrastructure overhaul for a 50,000 sq ft manufacturing facility.",
      features: [
        "480V power distribution system",
        "Emergency lighting installation",
        "Motor control centers",
        "Conduit and cable tray systems",
        "Electrical safety compliance"
      ],
      testimonial: "Exceptional service and expertise. Zero downtime during the installation process.",
      client: "Tech Manufacturing Inc."
    },
    {
      id: 3,
      title: "Kitchen & Bath Electrical Renovation",
      category: "residential",
      location: "Santa Monica, CA",
      date: "2023",
      image: portfolio3,
      description: "Modern electrical upgrade for kitchen remodel with high-end appliances and lighting.",
      features: [
        "Dedicated appliance circuits",
        "Under-cabinet LED lighting",
        "GFCI protection in wet areas",
        "Recessed lighting installation",
        "Electric vehicle charger prep"
      ],
      testimonial: "Professional, reliable, and delivered exactly what we needed for our dream kitchen.",
      client: "Michael & Lisa Chen"
    },
    {
      id: 4,
      title: "Office Building Lighting Upgrade",
      category: "commercial",
      location: "Burbank, CA",
      date: "2023",
      image: portfolio1,
      description: "Energy-efficient LED lighting conversion for 10-story office building.",
      features: [
        "LED lighting retrofit",
        "Occupancy sensors installation",
        "Lighting control systems",
        "Emergency lighting upgrade",
        "40% energy reduction achieved"
      ],
      testimonial: "The energy savings have been incredible. Highly recommend ElectricPro!",
      client: "Pacific Real Estate Group"
    },
    {
      id: 5,
      title: "Whole House Electrical Inspection",
      category: "residential",
      location: "Pasadena, CA",
      date: "2023",
      image: portfolio2,
      description: "Comprehensive electrical safety inspection and code compliance updates.",
      features: [
        "Full electrical system inspection",
        "AFCI breaker installation",
        "Grounding system upgrade",
        "Outlet and switch replacement",
        "Safety compliance certification"
      ],
      testimonial: "Thorough inspection that gave us peace of mind about our home's electrical safety.",
      client: "Robert Martinez"
    },
    {
      id: 6,
      title: "Restaurant Kitchen Electrical",
      category: "commercial",
      location: "West Hollywood, CA",
      date: "2023",
      image: portfolio3,
      description: "Commercial kitchen electrical installation for new restaurant opening.",
      features: [
        "Heavy-duty appliance circuits",
        "Commercial-grade outlets",
        "Exhaust fan electrical connections",
        "Kitchen equipment wiring",
        "Code-compliant installation"
      ],
      testimonial: "They understood our unique restaurant needs and delivered perfectly.",
      client: "Bistro Moderne"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "50+", label: "Completed Projects This Year" },
    { number: "100%", label: "Customer Satisfaction Rate" },
    { number: "0", label: "Safety Incidents" },
    { number: "A+", label: "BBB Rating" }
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
              Our Work Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quality Work
              <span className="block bg-gradient-electric bg-clip-text text-transparent">
                Proven Results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our recent electrical projects showcasing professional workmanship, 
              safety compliance, and customer satisfaction across residential and commercial sectors.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "electric" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:border-primary/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={project.category === "residential" ? "secondary" : "default"} 
                      className="spark-glow"
                    >
                      {project.category === "residential" ? (
                        <Home className="h-3 w-3 mr-1" />
                      ) : (
                        <Building className="h-3 w-3 mr-1" />
                      )}
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {project.date}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                        <Calendar className="h-4 w-4 ml-4 mr-1" />
                        {project.date}
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Project Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <blockquote className="italic text-muted-foreground mb-2">
                        "{project.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-medium text-primary">
                        - {project.client}
                      </cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us bring the same level of professionalism and quality to your electrical project. 
            Contact us today for a free consultation and quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;