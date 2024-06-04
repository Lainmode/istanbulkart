"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { BackButton } from "../layout";
import { useRouter } from "next/navigation";

export default function FailedToReadPage() {
	const router = useRouter();

	return (
		<main className="h-full">
			<BackButton onClick={() => router.back()}></BackButton>
			<div className=" flex flex-col justify-center gap-12 w-full items-start  p-2 h-full text-start">
				<div className="w-full">
					<h1 className=" w-full pb-2" onClick={() => router.push("/failedtoread")}>
						Balance: 205 TL
					</h1>
					<hr className="my-4 border-secondary-foreground"></hr>
					<div className="font-normal text-3xl">Choose your preferred method</div>
				</div>

				<div className="grid grid-cols-2 w-full gap-12">
					<div className="w-full h-full rounded-xl bg-blue-950 p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-75 hover:outline hover:outline-primary">
						<img className="h-full p-4" src="/kredi.png" alt="" />
						<div className="text-3xl font-semibold">Credit Card</div>
					</div>
					<div className="w-full h-full rounded-xl bg-blue-950 p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-75 hover:outline hover:outline-primary">
						<img className="h-full p-4" src="/cash.png" alt="" />
						<div className="text-3xl font-semibold">
							Cash
							<div className="text-muted  text-2xl">insert a bill</div>
						</div>
					</div>
				</div>
				<h4 className="text-center mx-auto">Do not take your card away</h4>
			</div>
		</main>
	);
}
