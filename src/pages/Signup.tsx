
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Github, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
    // Registration logic would go here
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md p-8 space-y-8 rounded-xl bg-card shadow-sm">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground mt-2">
              Sign up to start using our simulator
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Create account
            </Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="w-full">
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Github className="h-5 w-5 mr-2" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="text-center text-sm mt-6">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
