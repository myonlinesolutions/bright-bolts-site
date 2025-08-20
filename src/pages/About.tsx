import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  Clock,
  Phone,
  Lightbulb,
  Wrench,
  Heart
} from "lucide-react";
import electricianPortrait from "@/assets/electrician-portrait.jpg";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "500+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "1000+", label: "Projects Completed", icon: <Wrench className="h-6 w-6" /> },
    { number: "24/7", label: "Emergency Service", icon: <Zap className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "We prioritize safety in every project, following all electrical codes and using proper safety equipment."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Work",
      description: "We take pride in delivering high-quality electrical work that stands the test of time."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We listen to your needs and exceed expectations."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay updated with the latest electrical technologies and energy-efficient solutions."
    }
  ];

  const certifications = [
    "Licensed Master Electrician",
    "NECA Member",
    "OSHA Safety Certified",
    "Bonded & Insured",
    "Better Business Bureau A+ Rating",
    "Energy Efficiency Specialist"
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
              About ElectricPro
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted 
              <span className="block bg-gradient-electric bg-clip-text text-transparent">
                Electrical Partner
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 15 years of experience, we're committed to providing safe, reliable, 
              and professional electrical services to our community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 p-3 bg-gradient-electric rounded-lg electric-glow group-hover:pulse-glow transition-all duration-300 w-fit">
                    <div className="text-primary-foreground">{stat.icon}</div>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2008, ElectricPro began as a small family business with a simple mission: 
                  to provide reliable, safe, and professional electrical services to our local community.
                </p>
                <p>
                  What started as a one-person operation has grown into a trusted team of certified 
                  electricians, but our core values remain the same. We believe in honest work, 
                  fair pricing, and treating every customer like family.
                </p>
                <p>
                  Today, we're proud to be one of the area's most trusted electrical contractors, 
                  serving both residential and commercial clients with the same dedication to 
                  excellence that has defined us from the beginning.
                </p>
              </div>
              
              <div className="mt-8">
                <Button variant="electric" size="lg" asChild>
                  <Link to="/contact">
                    Get Started Today
                    <Zap className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={electricianPortrait} 
                alt="Professional electrician"
                className="rounded-lg shadow-xl w-full electric-glow"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-spark p-4 rounded-lg spark-glow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">A+</div>
                  <div className="text-sm text-primary-foreground">BBB Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and ensure we deliver the best service possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-electric rounded-lg electric-glow group-hover:pulse-glow transition-all duration-300 w-fit">
                    <div className="text-primary-foreground">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certifications & <span className="text-primary">Credentials</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We maintain the highest professional standards through continuous education and certification.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:border-primary/50 transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the ElectricPro difference. Contact us today for your electrical needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;