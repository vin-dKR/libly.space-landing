import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Layout, Clock, IndianRupee, UserCircle, HeadphonesIcon, Shield } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Student Management",
        subtitle: "Complete Student Tracking",
        description: "Track every student's details, payment history, and active/inactive status in one centralized dashboard. Search, filter, and manage student records with ease.",
        image: "https://images.unsplash.com/photo-1650525217641-891e936d3486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NjAzNjM1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imagePosition: "left"
    },
    {
        icon: Layout,
        title: "Real-Time Seat Management",
        subtitle: "Live Occupancy Dashboard",
        description: "View all occupied and available seats across different shifts in real-time. Make informed decisions about seat allocation and capacity planning instantly.",
        image: "https://images.unsplash.com/photo-1753295687822-b7785d55c24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0JTIwbGF5b3V0JTIwZ3JpZHxlbnwxfHx8fDE3NjAzNjM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imagePosition: "right"
    },
    {
        icon: Clock,
        title: "Multi-Shift Management",
        subtitle: "Flexible Scheduling System",
        description: "Manage multiple shifts seamlessly with different fee structures for each. Perfect for morning, afternoon, and evening batches with varying pricing.",
        image: "https://images.unsplash.com/photo-1558092535-648ec3c50158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdGFibGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMzYzNTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imagePosition: "left"
    },
    {
        icon: IndianRupee,
        title: "Automated Payment Tracking",
        subtitle: "Smart Financial Management",
        description: "Record payments, automatically calculate dues, and generate comprehensive financial reports. Get a clear overview of revenue and pending payments on your dashboard.",
        image: "https://images.unsplash.com/photo-1758274252144-6421f856e770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwdHJhbnNhY3Rpb24lMjBzY3JlZW58ZW58MXx8fHwxNzYwMzYzNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imagePosition: "right"
    },
    {
        icon: UserCircle,
        title: "Individual Student Profiles",
        subtitle: "Complete Student Records",
        description: "Maintain detailed profiles for each student including ID proof uploads, payment history, attendance records, and automatic due calculations.",
        image: "https://images.unsplash.com/photo-1758983308742-f4ba1f8c8cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjAzNjM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imagePosition: "left"
    },
    {
        icon: HeadphonesIcon,
        title: "24/7 Support & Training",
        subtitle: "Always Here to Help",
        description: "Get round-the-clock support from our team along with detailed training videos to help you master the platform quickly.",
        image: "https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwdHJhaW5pbmclMjB2aWRlb3xlbnwxfHx8fDE3NjAzNjM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imagePosition: "right"
    }
];

export function FeaturesShowcase() {
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 font-bold">
                        Powerful Features for{" "}
                        <span style={{ color: 'hsl(217 91% 60%)' }}>Complete Control</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to run your study hall efficiently
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isLeft = feature.imagePosition === "left";

                        return (
                            <div
                                key={index}
                                className={`grid md:grid-cols-2 gap-12 items-center ${isLeft ? '' : 'md:grid-flow-dense'
                                    }`}
                            >
                                {/* Image */}
                                <div className={isLeft ? '' : 'md:col-start-2'}>
                                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                        <ImageWithFallback
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`space-y-6 ${isLeft ? '' : 'md:col-start-1 md:row-start-1'}`}>
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: 'hsl(217 91% 95%)' }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: 'hsl(217 91% 60%)' }} />
                                    </div>

                                    <div>
                                        <p
                                            className="text-sm mb-2"
                                            style={{ color: 'hsl(217 91% 60%)' }}
                                        >
                                            {feature.subtitle}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl mb-4" >
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Security Feature */}
                <div
                    className="mt-32 rounded-3xl p-12 text-center"
                    style={{ backgroundColor: 'hsl(217 91% 95%)' }}
                >
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                    >
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl mb-4 font-bold">
                        Safe & Secure
                    </h3>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Your data is securely hosted on app.libly.space with enterprise-grade security,
                        automatic backups, and 99.9% uptime guarantee.
                    </p>
                </div>
            </div>
        </section>
    );
}
