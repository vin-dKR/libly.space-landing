import { Button } from "./ui/button";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Prism from "./react-bits/Prism";

export function Hero() {
    return (
        <section
            className="relative w-full min-h-screen overflow-hidden"
        >
            {/* Prism Background - positioned absolutely */}
            <div className="absolute inset-0 z-0">
                <Prism
                    animationType="hover"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0.1}
                    glow={1}
                />
            </div>

            {/* Content - positioned above Prism */}
            <div className="relative z-10 max-w-7xl mx-auto overflow-hidden pt-[200px] sm:pt-40">
                <ContainerScroll
                    titleComponent={
                        <div className="px-4 space-y-8 mb-20">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/30 border border-white/20 shadow-xl"
                            >
                                <span className="text-xs sm:text-sm text-blue-600 font-bold">
                                    ✨ Modern Library Management System
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl tracking-tight font-bold text-gray-900 font-satoshiBlack" >
                                Manage Your Library{" "}
                                <span className="text-blue-600">Effortlessly</span>
                            </h1>

                            <p className="text-sm sm:text-xl items-center mx-auto text-gray-600 leading-relaxed max-w-3xl">
                                Say goodbye to paper registers and error-prone spreadsheets.
                                Libly.Space helps you manage students, seats, shifts, and payments
                                all in one secure platform.
                            </p>

                            <div className="flex flex-col sm:flex-row mx-auto justify-center items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                                {[
                                    "Real-time seat tracking",
                                    "Automated payment & due calculations",
                                    "Multiple shift management"
                                ].map((feature) => (
                                    <div key={feature} className="gap-10 bg-white/30 px-6 rounded-2xl border border-white/30 pb-1 shadow-2xl">
                                        <span className="text-xs lg:text-md text-gray-700 w-full">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-row gap-4 justify-center">
                                <a
                                    href="https://app.libly.space"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto font-semibold"
                                    >
                                        Sign Up for Free
                                    </Button>
                                </a>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => {
                                        const element = document.getElementById('features');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-auto font-semibold"
                                >
                                    Log In
                                </Button>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-700">
                                Free for up to 50 students  •  No credit card required.
                            </p>
                        </div>
                    }
                >
                    <Image
                        src="/images/app.png"
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    );
}
