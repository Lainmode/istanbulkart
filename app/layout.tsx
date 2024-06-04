/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-background select-none">
			<body className={cn(inter.className, "max-h-screen aspect-square mx-auto flex flex-col bg-gradient relative")}>
				<div className="flex w-full justify-center mt-16">
					<img src="/logo.png" className="w-1/3"></img>
				</div>

				<div className="my-auto grow z-50 p-24">{children}</div>

				<div className="absolute bottom-0 w-full">
					<img src="/istanbul_bg.png" className="w-full h-full"></img>
				</div>

				<div className="mt-auto flex justify-center w-full p-2">
					<img src="/belbim.png" className="h-full z-50"></img>
				</div>

				<div className="absolute bottom-0 right-0 p-4">
					<p>istanbulkart.istanbul</p>
				</div>
			</body>
		</html>
	);
}
