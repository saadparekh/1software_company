export default function LocationSection() {
  return (
    <section className="py-28 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#1f1f1f] mb-6">
          Our Office Location
        </h2>

        <p className="text-gray-600 mb-12">
          Serving clients globally from our United States office.
        </p>

        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=New%20York%20USA&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

      </div>

    </section>
  );
}