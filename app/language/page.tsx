"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { BackButton } from "@/components/ui/custom";
import { useRouter } from "next/navigation";

export default function LanguagePage() {
	const router = useRouter();

	return (
		<main className="h-full">
			<BackButton onClick={() => router.back()}></BackButton>
			<div className=" flex flex-col justify-center gap-12 w-full items-center p-24 h-full">
				<Button className=" w-full rounded-3xl p-20 justify-center gap-12 text-wrap text-center" onClick={() => router.back()}>
					<img className="" style={{ height: "76px" }} src="/tr.png" alt="" />
					<h1 className="font-semibold text-gradient">Türkçe</h1>
				</Button>

				<Button className=" w-full rounded-3xl p-20 justify-center gap-12 text-wrap text-center" onClick={() => router.back()}>
					<img className="" style={{ height: "70px" }} src="/uk.png" alt="" />
					<h1 className="font-semibold text-gradient ">English</h1>
				</Button>
			</div>
		</main>
	);
}
