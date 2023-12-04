import MaxWidthContainer from "../MaxWidthContainer"
import ToggleButton from "./ToggleButton"
import BurgerMenu from "./BurgerMenu"
import Logo from "./Logo"

export default function TopBar({ navHeight }: { navHeight: number }) {
    return (
        <>
            <nav
                style={{ height: `${navHeight}px` }}
                className="fixed top-0 z-30 w-full flex justify-center bg-primary lg:hidden"
            >
                <MaxWidthContainer className="flex justify-between items-center">
                    <Logo />
                    <ToggleButton />
                </MaxWidthContainer>
            </nav>
            <BurgerMenu navHeight={navHeight} />
        </>
    )
}
