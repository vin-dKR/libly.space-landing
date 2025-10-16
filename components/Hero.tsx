import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function Hero() {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto overflow-hidden pt-[200px] sm:pt-40">
                <ContainerScroll
                    titleComponent={
                        <>
                            <div className="space-y-8 mb-20">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200" style={{ backgroundColor: 'hsl(217 91% 95%)' }}>
                                    <span className="text-sm" style={{ color: 'hsl(217 91% 60%)' }}>
                                        ✨ Modern Library Management System
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-6xl tracking-tight font-bold">
                                    Manage Your Library{" "}
                                    <span style={{ color: 'hsl(217 91% 60%)' }}>Effortlessly</span>
                                </h1>

                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Say goodbye to paper registers and error-prone spreadsheets.
                                    Libly.Space helps you manage students, seats, shifts, and payments
                                    all in one secure platform.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "Real-time seat tracking",
                                        "Automated payment & due calculations",
                                        "Multiple shift management"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <CheckCircle2
                                                className="w-5 h-5 flex-shrink-0"
                                                style={{ color: 'hsl(217 91% 60%)' }}
                                            />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://app.libly.space"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            size="lg"
                                            style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                                            className="hover:opacity-90 w-full sm:w-auto"
                                        >
                                            Start Free Trial
                                        </Button>
                                    </a>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        onClick={() => {
                                            const element = document.getElementById('features');
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </div>

                                <p className="text-sm text-gray-500">
                                    Free for up to 50 students. No credit card required.
                                </p>
                            </div>
                        </>
                    }
                >
                    <Image
                        src={`/images/app.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                        unoptimized
                    />
                </ContainerScroll>

                {/*
                                <ImageWithFallback
                                src="/images/app.png"
                                alt="Libly.Space Dashboard"
                                className="w-full h-auto"
                                />
                                */}
            </div>
        </section>
    );
}
