"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<main className="h-full">
			<div className="grid gap-12 h-full grid-cols-12">
				<div className="col-span-6">
					<Button className="h-full w-full rounded-3xl block p-16 space-y-24 text-wrap" onClick={() => router.push("/readcard")}>
						<img className="w-full" src="/top_up.png" alt="" />
						<h1 className="font-semibold text-gradient">Top up TL to IstanbulKart</h1>
					</Button>
				</div>
				<div className="col-span-6 flex flex-col jusitfy-evenly gap-12">
					<Button className="grow w-full rounded-3xl p-12 justify-start gap-4 text-wrap text-start" onClick={() => router.push("/viewsub")}>
						<img className="h-full" src="/view_subs.png" alt="" />
						<h1 className="font-semibold text-gradient text-4xl">View Subscription</h1>
					</Button>
					<Button className="grow w-full rounded-3xl p-12 justify-start gap-4 text-wrap text-start" onClick={() => router.push("/buycard")}>
						<img className="h-full" src="/buy_card.png" alt="" />
						<h1 className="font-semibold text-gradient text-4xl">Buy an istanbulKart</h1>
					</Button>
					<Button className="grow w-full rounded-3xl p-12 justify-start gap-4 text-wrap text-start" onClick={() => router.push("/language")}>
						<img className="h-full p-4" src="/language.png" alt="" />
						<h1 className="font-semibold text-gradient text-4xl">Language</h1>
					</Button>
				</div>
			</div>
		</main>
	);
}
