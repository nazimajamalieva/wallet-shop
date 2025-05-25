"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Mail,
  Lock,
  Check,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaMicrosoft, FaGoogle } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/dashboard");
    } catch (error) {
      setLoginError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ЛЕВАЯ ЧАСТЬ */}
      <div className="hidden md:flex md:w-1/2 bg-neutral-900 text-white items-center justify-center relative p-10">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        <motion.div
          className="relative z-10 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isAnimating ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RiStackLine className="w-18 h-18 mx-auto" />
          <div className="text-4xl font-bold">Welcome Back</div>
          <p className="text-sm text-gray-300 ">
            We're excited to see you again. Access your <br /> account to
            continue your journey with us.
          </p>
          <ul className=" text-sm space-y-2 text-gray-300 items-center justify-center">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Personalized dashboard
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Real-time analytics
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Secure data encryption
            </li>
          </ul>
        </motion.div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md ">
          <div className="text-2xl font-bold text-center ">
            Sign in to your account
          </div>
          <p className="text-center text-sm text-gray-500 mb-7">
            Enter your credentials to access your account
          </p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="mb-2">
                Email address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="pl-10"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="mb-2">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="text-right text-sm text-primary mt-1 cursor-pointer">
                Forgot password?
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <Label htmlFor="remember">Remember me for 30 days</Label>
            </div>

            {loginError && (
              <Alert variant="destructive">
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500"
            >
              {isLoading ? (
                <Loader2 className="animate-spin w-5 h-5 mr-2" />
              ) : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>

            <div className="text-center text-sm text-gray-500">
              Or continue with
            </div>

            <div className="flex gap-4 ">
              <Button variant="outline" className="px-17">
                <FaGoogle />
                Google
              </Button>
              <Button variant="outline" className="px-17">
                <FaMicrosoft />
                Microsoft
              </Button>
            </div>

            <div className="text-center text-sm">
              Don’t have an account?{" "}
              <span className="text-primary cursor-pointer">
                Create a free account
              </span>
            </div>

            <p className="text-xs text-center text-gray-400">
              By signing in, you agree to our{" "}
              <span className=" text-primary">Terms of Service</span> and{" "}
              <span className=" text-primary">Privacy Policy</span>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
