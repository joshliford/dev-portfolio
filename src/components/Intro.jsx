export default function Intro() {

    return (
        <div className="flex flex-col justify-center text-center mb-40 py-16 space-y-8">
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <span className="text-4xl -mt-1 font-cinzel font-semibold text-bronze">ᛏ</span>
                <h1 className="text-4xl font-cinzel font-bold">JOSH LIFORD</h1>
            </div>
            <div>
                <h2 className="text-3xl font-cinzel">Applications Developer</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <p className="text-lg font-merriweather text-left">
                    Coding bootcamp student currently working as a junior developer.
                    Modernizing enterprise applications with technologies I'm learning in real-time
                    because I learn best under pressure.
                </p>
            </div>
        </div>
    )

}