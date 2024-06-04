"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { BackButton } from "../layout";
import { useRouter } from "next/navigation";

export default function FailedToReadPage() {
	const router = useRouter();

	return (
		<main className="h-full">
			<div className=" flex flex-col justify-center gap-8 w-full items-center p-24 h-full text-center">
				<h1>Card not read</h1>
				<div className="text-3xl">Please remove and reinsert your card</div>
				<CrossCircledIcon className="size-24 text-red-600"></CrossCircledIcon>
				<BackButton onClick={() => router.back()}></BackButton>
			</div>
		</main>
	);
}
