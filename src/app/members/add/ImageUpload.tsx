"use client"

import toast from "react-hot-toast"
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import Image from "next/image"
import LoadingIcon from "@/components/LoadingIcon"
import { DEFAULT_PROFILE_PIC } from "@/constants"

export default function ImageUpload({setProfilePicture}: {setProfilePicture: React.Dispatch<string>}) {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<
        {
            name: string
            key: string
            url: string
            size: number
        }[]
    >([])
    return (
        <div className="flex items-center gap-6">
            <div className="relative ">
                <Image
                    src={
                        image.length
                            ? image[0].url
                            : DEFAULT_PROFILE_PIC
                    }
                    height={80}
                    width={80}
                    className={`rounded-full h-auto ${
                        loading ? "brightness-50" : "brightness-100"
                    }`}
                    alt="profPic"
                />
                {loading && (
                    <LoadingIcon className="absolute left-1/2 top-1/2 z-20  translate-x-[-50%] translate-y-[-50%]  text-4xl text-slate-300" />
                )}
            </div>
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    setLoading(false)
                    if (res) {
                        setImage(res)
                        setProfilePicture(res[0].url)
                    }
                }}
                onUploadProgress={() => setLoading(true)}
                onUploadError={(error: Error) => {
                    setLoading(false)
                    toast.error(`UPLOAD ERROR! ${error.message}`)
                }}
            />
        </div>
    )
}
