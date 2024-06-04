"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { BackButton } from "../layout";
import { useRouter } from "next/navigation";

export default function ReadCardPage() {
	const router = useRouter();

	return (
		<main className="h-full">
			<BackButton onClick={() => router.back()}></BackButton>
			<div className=" flex flex-col justify-center gap-24 w-full items-center p-24 h-full text-center">
				<h1 onClick={() => router.push("/failedtoread")}>Please put your card on the card reader...</h1>
				<img onClick={() => router.push("/selectpaymentmethod")} className="" src="/tap_card.png" alt="" />
			</div>
		</main>
	);
}
