"use client"

import { useState, useEffect } from "react"
import { ChevronDown, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Cloud, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { Loading } from "@/components/ui/loading"

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

const provinces = [
  { id: "hanoi", name: "Hà Nội", query: "Hanoi,vn" },
  { id: "hcm", name: "TP.HCM", query: "Ho Chi Minh City,vn" },
  { id: "danang", name: "Đà Nẵng", query: "Da Nang,vn" },
  { id: "haiphong", name: "Hải Phòng", query: "Hai Phong,vn" },
  { id: "cantho", name: "Cần Thơ", query: "Can Tho,vn" },
]

const WeatherIcon = ({ type, className = "h-8 w-8" }: { type: string; className?: string }) => {
  switch (type) {
    case "sun":
      return <Sun className={`${className} text-yellow-500`} />
    case "cloud":
      return <Cloud className={`${className} text-gray-500`} />
    case "rain":
      return <CloudRain className={`${className} text-blue-500`} />
    default:
      return <Sun className={`${className} text-yellow-500`} />
  }
}

function getWeatherIconType(main: string) {
  if (main.includes("rain") || main.includes("mưa")) return "rain"
  if (main.includes("cloud") || main.includes("mây")) return "cloud"
  return "sun"
}

export function WeatherWidget() {
  const [selectedProvince, setSelectedProvince] = useState(provinces[0])
  const [currentWeather, setCurrentWeather] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      setError("")
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedProvince.query}&appid=${API_KEY}&units=metric&lang=vi`
        )
        const data = await res.json()
        if (data.cod !== 200) throw new Error(data.message)
        setCurrentWeather(data)
      } catch (err: any) {
        setError(err.message || "Lỗi lấy dữ liệu thời tiết")
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [selectedProvince])

  return (
    <div className="flex flex-row items-center gap-4 w-full p-4 text-sm min-h-[100px]">
      <div className="flex flex-col items-center min-w-[90px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="px-2 py-1 text-xs bg-transparent min-w-[90px] flex items-center gap-1 mb-1">
              <MapPin className="h-4 w-4" />
              <span>{selectedProvince.name}</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {provinces.map((province) => (
              <DropdownMenuItem key={province.id} onClick={() => setSelectedProvince(province)} className="text-xs">
                <MapPin className="h-4 w-4 mr-2" />
                {province.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {loading ? (
          <Loading size="sm" variant="dots" className="text-xs" />
        ) : error ? (
          <div className="text-xs text-red-500">{error}</div>
        ) : currentWeather ? (
          <>
            <WeatherIcon type={getWeatherIconType(currentWeather.weather[0].main.toLowerCase())} className="h-10 w-10" />
            <div className="text-xl font-bold leading-none mt-1">{Math.round(currentWeather.main.temp)}°C</div>
            <div className="text-xs text-gray-600 leading-none mt-1 text-center max-w-[90px]">{currentWeather.weather[0].description}</div>
          </>
        ) : null}
      </div>
      {/* Thông tin phụ */}
      {currentWeather && !loading && !error && (
        <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
          <div className="flex items-center gap-1"><Droplets className="h-4 w-4 text-blue-500" /><span>{currentWeather.main.humidity}%</span></div>
          <div className="flex items-center gap-1"><Wind className="h-4 w-4 text-gray-500" /><span>{Math.round(currentWeather.wind.speed)} km/h</span></div>
          <div className="flex items-center gap-1"><Thermometer className="h-4 w-4 text-red-500" /><span>Cảm giác {Math.round(currentWeather.main.feels_like)}°C</span></div>
          <div className="flex items-center gap-1"><Eye className="h-4 w-4 text-green-500" /><span>{currentWeather.visibility / 1000} km</span></div>
        </div>
      )}
    </div>
  )
}
