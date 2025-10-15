import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Pricing() {
    const freeFeatures = [
        "Up to 50 students",
        "Real-time seat tracking",
        "Payment management",
        "Basic reporting",
        "Email support",
        "Training videos"
    ];

    const proFeatures = [
        "Unlimited students",
        "Real-time seat tracking",
        "Advanced payment management",
        "Comprehensive reports & analytics",
        "Priority 24/7 support",
        "Training videos",
        "Custom shift configurations",
        "Data export & backup",
        "ID proof storage"
    ];

    return (
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'hsl(240 5% 96%)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Simple, Transparent{" "}
                        <span style={{ color: 'hsl(217 91% 60%)' }}>Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Start free, upgrade when you grow
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Free Tier */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                        <div className="mb-8">
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Free
                            </h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    ₹0
                                </span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <p className="text-gray-600">
                                Perfect for small study halls getting started
                            </p>
                        </div>

                        <a
                            href="https://app.libly.space"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-8"
                        >
                            <Button
                                className="w-full"
                                variant="outline"
                            >
                                Get Started Free
                            </Button>
                        </a>

                        <div className="space-y-4">
                            {freeFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: 'hsl(217 91% 60%)' }}
                                    />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Tier */}
                    <div
                        className="rounded-3xl p-8 shadow-xl border-2 relative"
                        style={{
                            backgroundColor: 'white',
                            borderColor: 'hsl(217 91% 60%)'
                        }}
                    >
                        <div
                            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm text-white"
                            style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                        >
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Pro
                            </h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl" style={{ fontFamily: 'Poppins, sans-serif', color: 'hsl(217 91% 60%)' }}>
                                    ₹299
                                </span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <p className="text-gray-600">
                                For growing institutions managing more students
                            </p>
                        </div>

                        <a
                            href="https://app.libly.space"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-8"
                        >
                            <Button
                                className="w-full hover:opacity-90"
                                style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                            >
                                Start Pro Trial
                            </Button>
                        </a>

                        <div className="space-y-4">
                            {proFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: 'hsl(217 91% 60%)' }}
                                    />
                                    <span className="text-gray-900">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-600 mt-12">
                    All plans include secure cloud hosting and regular updates. No hidden fees.
                </p>
            </div>
        </section>
    );
}
