'use client'
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function Verifystudent() {

    const router = useRouter()
    const NestStep = () => {
        router.push('regestar?step=2')
    }

    return (
        <>
            <div className="w-full max-w-screen-sm space-y-8 px-4 mx-auto">
                <div className="space-y-2 text-center">
                    <Link className="inline-block" href="#">
                        <FlagIcon className="h-8 w-8" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <h1 className="text-3xl font-bold">শিক্ষার্থী যাচাই</h1>
                    <p className="text-gray-500 dark:text-gray-400">আপনার বোর্ড রোল এবং রেজিস্ট্রেশন নম্বর দিয়ে সেসন নির্বাচন করুন</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="boardRoll">আপনার সেসন নির্বাচন করুন:</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="20**" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2002">2002</SelectItem>
                                <SelectItem value="2003">2003</SelectItem>
                                <SelectItem value="2004">2004</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="boardRoll">আপনার বোর্ড রোল:</Label>
                        <Input id="boardRoll" placeholder="62**10" required />
                        <p className="text-red-500 text-sm">রোল নম্বর খুঁজে পাওয়া যাচ্ছে না</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="registrationNumber">আপনার রেজিস্টেশন নম্বর:</Label>
                        <Input id="registrationNumber" placeholder="15*******32" required />
                        <p className="text-red-500 text-sm">রেজিস্টেশন নম্বর সঠিক নয়</p>
                    </div>
                    <Button className="w-full" onClick={() => NestStep()}>পরবর্তী ধাপে অগ্রসর হন</Button>
                </div>

            </div>
        </>
    )
}

function FlagIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}
