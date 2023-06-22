'use client'
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function index() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-10 flex-col justify-center items-center ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Power by openAI, Next.js, TailwindCSS, Tremor...
        </Subtitle>
        <Divider className="my-10"/>
        <Card className=" bg-gradient-to-r from-cyan-500 to-blue-500">
          <CityPicker/>
        </Card>
        

      </Card>
    </div>
  )
}
