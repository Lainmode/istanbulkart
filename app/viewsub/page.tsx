"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { BackButton } from "@/components/ui/custom";
import { useRouter } from "next/navigation";
import SelectPaymentMethodPage from "../selectpaymentmethod/page";
import ReadCardPage from "../readcard/page";

export default function ViewSubPage() {
	const router = useRouter();

	return (
		<main className="h-full">
			<BackButton onClick={() => router.back()}></BackButton>

			<div className=" flex flex-col justify-center gap-8 w-full items-center p-24 h-full text-center">
				<div className="w-full space-y-8 text-start">
					<hr className="border-secondary-foreground"></hr>
					<h1>
						Subscription Type: <span className="font-normal">Student</span>
					</h1>
					<h1>
						Expiry: <span className="font-normal">11/05/2024</span>
					</h1>
					<h1>
						Season ticket balance: <span className="font-normal">60</span>
					</h1>
					<hr className="border-secondary-foreground"></hr>
				</div>

				<Button className="p-16 rounded-3xl text-4xl" onClick={() => router.push("selectpaymentmethod")}>
					Renew Subscription
				</Button>
			</div>
		</main>
	);
}
