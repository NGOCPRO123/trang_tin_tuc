"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LoadingProps {
  variant?: "spinner" | "dots" | "pulse" | "wave";
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  className?: string;
}

interface LoadingPageProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "card";
}

interface LoadingSectionProps {
  height?: string;
}

interface LoadingScreenProps {
  isVisible?: boolean;
  message?: string;
}

export function Loading({ 
  variant = "spinner", 
  size = "md", 
  text,
  className = "" 
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const renderVariant = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} bg-yellow-500 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      case "pulse":
        return (
          <div className={`${sizeClasses[size]} bg-yellow-500 rounded-full animate-pulse`} />
        );
      case "wave":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-yellow-500 rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  height: size === "sm" ? "12px" : size === "lg" ? "20px" : "16px"
                }}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className={`${sizeClasses[size]} border-2 border-yellow-200 rounded-full animate-spin border-t-yellow-500`} />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      {renderVariant()}
      {text && (
        <p className="text-sm text-yellow-700 font-medium">{text}</p>
      )}
    </div>
  );
}

export function LoadingPage({ 
  title = "Đang tải...", 
  subtitle = "Vui lòng chờ trong giây lát",
  variant = "default"
}: LoadingPageProps) {
  if (variant === "card") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full mx-4">
          <Loading size="lg" text={title} />
          {subtitle && (
            <p className="text-center text-gray-600 mt-4">{subtitle}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center">
      <div className="text-center">
        {/* Main Loading Spinner */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-yellow-200 rounded-full animate-spin border-t-yellow-500 mx-auto"></div>
          <div className="w-16 h-16 border-4 border-amber-200 rounded-full animate-spin border-t-amber-600 absolute top-2 left-1/2 transform -translate-x-1/2 animate-reverse-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-800 animate-pulse">{title}</h2>
          <p className="text-yellow-700 text-lg">{subtitle}</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-yellow-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-amber-400 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-yellow-400 rounded-full opacity-25 animate-float"></div>
      </div>
    </div>
  );
}

export function LoadingSection({ height = "h-32" }: LoadingSectionProps) {
  return (
    <div className={`${height} flex items-center justify-center bg-gray-50 rounded-lg`}>
      <Loading size="lg" text="Đang tải..." />
    </div>
  );
}

export function LoadingScreen({
  isVisible = true,
  message = "Vui lòng đợi trong khi chúng tôi tải dữ liệu mới nhất của bạn",
}: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 overflow-hidden"
    >
      {/* Background Texture Shapes */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 blur-xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/25 to-red-500/25 blur-lg"
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-300/20 to-amber-400/20 blur-2xl"
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 transform rotate-45 blur-sm"
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-amber-400/35 to-yellow-500/35 rounded-lg blur-sm"
        />

        {/* Floating Dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-yellow-300/60 rounded-full blur-sm"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Loading Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-900 to-yellow-800" />
          </motion.div>

          {/* Inner Spinner */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Loader2 className="w-8 h-8 text-yellow-300" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center max-w-md px-6"
        >
          <motion.h2
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-xl font-medium text-yellow-100 leading-relaxed"
          >
            {message}
          </motion.h2>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-yellow-300/80 rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-yellow-800/30 pointer-events-none" />
    </motion.div>
  );
}

// Demo component for showcasing all loading variants
export function LoadingDemo() {
  const [showPageLoading, setShowPageLoading] = useState(false);
  const [showSectionLoading, setShowSectionLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Loading Components Demo</h1>
          <p className="text-lg text-gray-600">Các loại loading khác nhau cho website</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Loading Components */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Loading</CardTitle>
              <CardDescription>Các loại loading cơ bản</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Spinner</h4>
                  <Loading variant="spinner" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dots</h4>
                  <Loading variant="dots" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pulse</h4>
                  <Loading variant="pulse" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wave</h4>
                  <Loading variant="wave" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Default with Text</h4>
                  <Loading text="Đang tải..." />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Loading Sizes</CardTitle>
              <CardDescription>Các kích thước khác nhau</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Small</h4>
                  <Loading size="sm" variant="spinner" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Medium</h4>
                  <Loading size="md" variant="spinner" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Large</h4>
                  <Loading size="lg" variant="spinner" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Extra Large</h4>
                  <Loading size="xl" variant="spinner" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading Page Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Loading Page</CardTitle>
              <CardDescription>Các biến thể loading trang</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => setShowPageLoading(true)}
                className="w-full"
              >
                Xem Loading Page
              </Button>
              <p className="text-sm text-gray-600">
                Click để xem loading page với các biến thể khác nhau
              </p>
            </CardContent>
          </Card>

          {/* Loading Section */}
          <Card>
            <CardHeader>
              <CardTitle>Loading Section</CardTitle>
              <CardDescription>Loading cho một phần trang</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => setShowSectionLoading(true)}
                className="w-full"
              >
                Xem Loading Section
              </Button>
              <p className="text-sm text-gray-600">
                Click để xem loading cho một section
              </p>
            </CardContent>
          </Card>

          {/* Custom Loading */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Loading</CardTitle>
              <CardDescription>Loading tùy chỉnh</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Loading 
                  variant="spinner" 
                  className="text-blue-500"
                  text="Đang xử lý..."
                />
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Loading 
                  variant="dots" 
                  className="text-green-500"
                  text="Đang tải dữ liệu..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Usage Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Ví dụ Sử dụng</CardTitle>
              <CardDescription>Cách sử dụng trong code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><code>{"<Loading />"}</code> - Loading cơ bản</p>
                <p><code>{"<LoadingPage />"}</code> - Loading toàn trang</p>
                <p><code>{"<LoadingSection />"}</code> - Loading section</p>
                <p><code>{"<Loading variant=\"spinner\" />"}</code> - Spinner</p>
                <p><code>{"<Loading size=\"lg\" />"}</code> - Kích thước lớn</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loading Page Demo */}
        {showPageLoading && (
          <div className="fixed inset-0 z-50">
            <LoadingPage 
              title="Đang tải trang demo..."
              subtitle="Đây là ví dụ về loading page"
              variant="card"
            />
            <Button 
              onClick={() => setShowPageLoading(false)}
              className="fixed top-4 right-4 z-10"
              variant="outline"
            >
              Đóng
            </Button>
          </div>
        )}

        {/* Loading Section Demo */}
        {showSectionLoading && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <Card className="w-96">
              <CardHeader>
                <CardTitle>Loading Section Demo</CardTitle>
                <CardDescription>Loading cho một phần nội dung</CardDescription>
              </CardHeader>
              <CardContent>
                <LoadingSection height="h-32" />
                <Button 
                  onClick={() => setShowSectionLoading(false)}
                  className="w-full mt-4"
                >
                  Đóng
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DefaultLoading() {
  return <LoadingPage />;
}
  