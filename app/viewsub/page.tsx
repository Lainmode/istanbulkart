"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { BackButton } from "@/components/ui/custom";
import { useRouter } from "next/navigation";
import SelectPaymentMethodPage from "../selectpaymentmethod/page";
import ReadCardPage from "../readcard/page";

export default function BuyCardPage() {
	const router = useRouter();

	return <ReadCardPage />;
}
