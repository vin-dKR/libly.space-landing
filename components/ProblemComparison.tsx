import { X, Check } from "lucide-react";

export function ProblemComparison() {
    const traditionalProblems = [
        "Manual paper registers prone to errors",
        "Time-consuming payment tracking",
        "No real-time seat availability",
        "Difficult to manage multiple shifts",
        "Lost or damaged records",
        "No automated due calculations"
    ];

    const liblyBenefits = [
        "Digital records with instant search",
        "Automated payment tracking & receipts",
        "Live seat occupancy dashboard",
        "Seamless multi-shift management",
        "Cloud-based secure storage",
        "Smart due date reminders"
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'hsl(240 5% 96%)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl mb-4 font-bold" >
                        Why Choose <span style={{ color: 'hsl(217 91% 60%)' }}>Libly.Space</span>?
                    </h2>
                    <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Stop wasting time on outdated methods. See how we compare to traditional systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Traditional Method */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <div className="mb-6">
                            <h3 className="text-2xl mb-2 font-semibold" >
                                Traditional Method
                            </h3>
                            <p className="text-gray-600">
                                Paper registers & Excel sheets
                            </p>
                        </div>

                        <div className="space-y-4">
                            {traditionalProblems.map((problem, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                                    <span className="text-gray-700">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Libly.Space Solution */}
                    <div
                        className="rounded-2xl p-8 shadow-lg border-2"
                        style={{
                            backgroundColor: 'hsl(217 91% 95%)',
                            borderColor: 'hsl(217 91% 60%)'
                        }}
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl mb-2 font-semibold" >
                                Libly.Space
                            </h3>
                            <p className="text-gray-700">
                                Modern cloud-based system
                            </p>
                        </div>

                        <div className="space-y-4">
                            {liblyBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: 'hsl(217 91% 60%)' }}
                                    />
                                    <span className="text-gray-900">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
