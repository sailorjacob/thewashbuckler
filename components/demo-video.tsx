"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

interface DemoVideoProps {
  children: React.ReactNode
}

export function DemoVideo({ children }: DemoVideoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
        <div className="relative aspect-video w-full">
          <Image
            src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/demovideo.gif"
            alt="The Washbuckler Sink Splash Guard Demo Video"
            fill
            className="object-contain rounded-lg"
            unoptimized
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
