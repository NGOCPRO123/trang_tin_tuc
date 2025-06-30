"use client"

import { useState, useEffect } from "react"
import { ChevronDown, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Cloud, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

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
  const [forecast, setForecast] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      setError("")
      try {
        // Current weather
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedProvince.query}&appid=${API_KEY}&units=metric&lang=vi`
        )
        const data = await res.json()
        if (data.cod !== 200) throw new Error(data.message)
        setCurrentWeather(data)

        // Forecast (3-hour step, get next 4 days)
        const res2 = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${selectedProvince.query}&appid=${API_KEY}&units=metric&lang=vi`
        )
        const data2 = await res2.json()
        if (data2.cod !== "200") throw new Error(data2.message)
        // Pick 1 forecast per day (at 12:00)
        const daily = data2.list.filter((item: any) => item.dt_txt.includes("12:00:00")).slice(0, 4)
        setForecast(daily)
      } catch (err: any) {
        setError(err.message || "Lỗi lấy dữ liệu thời tiết")
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [selectedProvince])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between text-sm bg-transparent">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{selectedProvince.name}</span>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {provinces.map((province) => (
            <DropdownMenuItem key={province.id} onClick={() => setSelectedProvince(province)} className="text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              {province.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {loading ? (
        <div className="text-center py-8 text-muted-foreground">Đang tải dữ liệu thời tiết...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : currentWeather ? (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProvince.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5"
            >
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-3">
                  <WeatherIcon type={getWeatherIconType(currentWeather.weather[0].main.toLowerCase())} className="h-16 w-16" />
                </div>
                <div className="text-3xl font-bold text-blue-900">{Math.round(currentWeather.main.temp)}°C</div>
                <div className="text-sm text-blue-700">{currentWeather.weather[0].description}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span>{currentWeather.main.humidity}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <span>{Math.round(currentWeather.wind.speed)} km/h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-green-500" />
                  <span>{currentWeather.visibility / 1000} km</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-4 w-4 text-red-500" />
                  <span>Cảm giác {Math.round(currentWeather.main.feels_like)}°C</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-xl font-mono font-bold text-gray-800">{formatTime(currentTime)}</div>
            <div className="text-sm text-gray-600 mt-2">{formatDate(currentTime)}</div>
          </div>

          {/* 4-Day Forecast */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-700">Dự báo 4 ngày</div>
            <div className="space-y-2">
              {forecast.map((item, index) => (
                <motion.div
                  key={item.dt}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-white rounded border"
                >
                  <div className="flex items-center space-x-3">
                    <WeatherIcon type={getWeatherIconType(item.weather[0].main.toLowerCase())} className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {(() => {
                        const d = new Date(item.dt_txt)
                        return `T${d.getDay() === 0 ? 8 : d.getDay() + 1}`
                      })()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{Math.round(item.main.temp_min)}°/{Math.round(item.main.temp_max)}°</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Weather Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-2">
            <div className="text-sm font-medium text-yellow-800 mb-2">⚠️ Cảnh báo thời tiết</div>
            <div className="text-sm text-yellow-700">Dữ liệu thực tế từ OpenWeatherMap. Hạn chế ra ngoài khi thời tiết xấu.</div>
          </div>
        </>
      ) : null}
    </div>
  )
}
