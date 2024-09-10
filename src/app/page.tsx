'use client';
 {
  // ... (之前的组件代码保持不变)
}
import { useState, useEffect } from 'react'
import { Sun, Cloud, CloudRain, Wind, Droplet, Heart, Coffee, Umbrella } from 'lucide-react'
export default function Home()
export default function Component() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      setGreeting(getGreeting(now.getHours()))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getGreeting = (hour) => {
    if (hour < 6) return "晚安，宝宝"
    if (hour < 12) return "早安，宝宝"
    if (hour < 18) return "下午好，宝宝"
    return "晚上好，亲爱的"
  }

  const currentWeather = {
    temperature: 25,
    condition: "晴天",
    humidity: 60,
    windSpeed: 10,
  }

  const forecast = [
    { day: "明天", temp: 26, condition: "晴天" },
    { day: "后天", temp: 24, condition: "多云" },
    { day: "大后天", temp: 23, condition: "小雨" },
  ]

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "晴天":
        return <Sun className="h-8 w-8 text-yellow-400" />
      case "多云":
        return <Cloud className="h-8 w-8 text-gray-400" />
      case "小雨":
        return <CloudRain className="h-8 w-8 text-blue-400" />
      default:
        return <Sun className="h-8 w-8 text-yellow-400" />
    }
  }

  const getWeatherAdvice = (condition) => {
    switch (condition) {
      case "晴天":
        return "今天阳光明媚，别忘了涂防晒霜哦！"
      case "多云":
        return "天气不错，适合出去散步呢。"
      case "小雨":
        return "今天可能会下雨，记得带伞！"
      default:
        return "无论天气如何，我都希望你心情愉快！"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-400 p-8 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">
            珏莹的专属天气 <Heart className="inline-block text-red-500" />
          </h1>
          <div className="text-xl text-white">
            {currentTime.toLocaleTimeString()}
          </div>
        </header>
        
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 mb-8 backdrop-blur-md">
          <h2 className="text-3xl font-semibold mb-4 text-purple-600">{greeting}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getWeatherIcon(currentWeather.condition)}
              <span className="text-6xl ml-4 font-bold text-purple-700">{currentWeather.temperature}°C</span>
            </div>
            <div className="text-right">
              <p className="text-2xl mb-2 text-purple-600">{currentWeather.condition}</p>
              <p className="flex items-center justify-end text-gray-600">
                <Droplet className="mr-2" /> 湿度: {currentWeather.humidity}%
              </p>
              <p className="flex items-center justify-end text-gray-600">
                <Wind className="mr-2" /> 风速: {currentWeather.windSpeed} km/h
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg text-purple-600">{getWeatherAdvice(currentWeather.condition)}</p>
        </div>

        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">未来天气预报</h2>
          <div className="grid grid-cols-3 gap-4">
            {forecast.map((day) => (
              <div key={day.day} className="text-center p-4 rounded-lg bg-purple-100 transition-transform hover:scale-105">
                <p className="font-semibold text-purple-600">{day.day}</p>
                {getWeatherIcon(day.condition)}
                <p className="text-xl font-bold mt-2 text-purple-700">{day.temp}°C</p>
                <p className="text-sm text-purple-600">{day.condition}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">贴心小提示</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2"><Coffee className="inline-block mr-2 text-brown-500" /> 今天别忘了喝足够的水哦！</li>
            <li className="mb-2"><Umbrella className="inline-block mr-2 text-blue-500" /> 如果要出门，记得看看天气预报！</li>
            <li><Heart className="inline-block mr-2 text-red-500" /> 无论天气如何，我都爱你！</li>
          </ul>
        </div>
      </div>
    </div>
  )
}