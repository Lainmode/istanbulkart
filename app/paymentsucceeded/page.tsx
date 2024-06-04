"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CheckCircledIcon, ChevronLeftIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { BackButton, MenuButton } from "@/components/ui/custom";
import { useRouter } from "next/navigation";

export default function PaymentSucceededPage() {
	const router = useRouter();

	return (
		<main className="h-full">
			<div className=" flex flex-col justify-center gap-8 w-full items-center p-24 h-full text-center">
				<h1>Payment Succeeded</h1>
				<div className="text-3xl">Thank you for your purchase</div>

				<CheckCircledIcon className="size-24 text-green-500"></CheckCircledIcon>
				<MenuButton onClick={() => router.replace("/")}></MenuButton>
			</div>
		</main>
	);
}
