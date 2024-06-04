import { ChevronLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

interface BackButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function BackButton({ onClick }: BackButtonProps) {
	return (
		<Button variant="outline" className="rounded-xl bg-gradient border-black gap-4 text-xl py-6 px-8" onClick={onClick}>
			<ChevronLeftIcon></ChevronLeftIcon>
			Go Back
		</Button>
	);
}

export function MenuButton({ onClick }: BackButtonProps) {
	return (
		<Button variant="outline" className="rounded-xl bg-gradient border-black gap-4 text-xl py-6 px-8" onClick={onClick}>
			<HamburgerMenuIcon></HamburgerMenuIcon>
			Menu
		</Button>
	);
}
