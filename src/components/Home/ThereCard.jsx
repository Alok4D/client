

const serviceData = [
    {
        id: 1,
        title: "Our Room",
        description: "The Sailing Hotel features 200 comfortable rooms, almost with a private balcony overlooking the beautiful charming garden.",
        // Placeholder image matching the layout/feel
        image: "https://sailing.thimpress.com/demo-boutique-resort/wp-content/uploads/sites/6/2025/09/our-room.png"
    },
    {
        id: 2,
        title: "Restaurant",
        description: "The Sailing Hotel features 200 comfortable rooms, almost with a private balcony overlooking the beautiful charming garden.",
        // Placeholder image matching the layout/feel
        image: "https://sailing.thimpress.com/demo-boutique-resort/wp-content/uploads/sites/6/2025/09/restaurent.png"
    },
    {
        id: 3,
        title: "Spa & Massage",
        description: "The Sailing Hotel features 200 comfortable rooms, almost with a private balcony overlooking the beautiful charming garden.",
        // Placeholder image matching the layout/feel
        image: "https://sailing.thimpress.com/demo-hotel-marina-club/wp-content/uploads/sites/5/2025/07/gorgeous-woman-enjoying-shoulder-massage-3.png"
    },
];

const FeatureCard = ({ title, description, image }) => (
    <div className="flex flex-col -mt-48 z-40">
        {/* Image - Uses object-cover for responsive fitting, aspect-ratio to control height */}
        <div className="w-full overflow-hidden mb-4 aspect-w-3 aspect-h-2">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-[221px] object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>
        
        {/* Title - Bold and slightly larger than body text */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {title}
        </h3>
        
        {/* Description - Standard body text */}
        <p className="text-gray-600 leading-relaxed text-base">
            {description}
        </p>
    </div>
);

export default function ThereCard() {
    return (
        <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* 3-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {serviceData.map(service => (
                        <FeatureCard 
                            key={service.id} 
                            title={service.title} 
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}