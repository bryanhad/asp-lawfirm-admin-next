"use client"

import toast from "react-hot-toast"
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import Image from "next/image"
import LoadingIcon from "@/components/LoadingIcon"
import { DEFAULT_PROFILE_PIC } from "@/constants"

export default function ImageUpload({
    setPicture,
    picture
}: {
    setPicture: React.Dispatch<string>
    picture?:string
}) {
    const [loading, setLoading] = useState(false)
    const [currentImage, setCurrentImage] = useState<
        {
            name: string
            key: string
            url: string
            size: number
        }[]
    >(picture ? [{name: '', key: '', url: picture, size: 0}] : [])
    return (
        <div>
            <div className="flex items-center gap-6">
                <div className="relative ">
                    <div className="grid aspect-square h-[80px] border place-content-center overflow-hidden rounded-full">
                        <Image
                            src={
                                currentImage.length > 0
                                    ? currentImage[0].url
                                    : DEFAULT_PROFILE_PIC
                            }
                            height={80}
                            width={80}
                            className={`h-auto ${
                                loading ? "brightness-50" : "brightness-100"
                            }`}
                            alt="profPic"
                        />
                    </div>
                    {loading && (
                        <LoadingIcon className="absolute left-1/2 top-1/2 z-20  translate-x-[-50%] translate-y-[-50%]  text-4xl text-slate-300" />
                    )}
                </div>
                <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        setLoading(false)
                        if (res) {
                            setCurrentImage(res)
                            setPicture(res[0].url)
                        }
                    }}
                    onUploadProgress={() => setLoading(true)}
                    onUploadError={(error: Error) => {
                        setLoading(false)
                        toast.error(`UPLOAD ERROR! ${error.message}`)
                    }}
                />
            </div>
            {currentImage.length > 0 && (
                <p className="text-slate-400 mt-2">{currentImage[0]?.name}</p>
            )}
        </div>
    )
}
