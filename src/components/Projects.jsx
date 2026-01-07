import ProjectCard from "./ProjectCard"
import projectInfo from "../projectInfo"

export default function Projects() {

    return (
        <div className="mb-40 max-w-3xl mx-auto py-20 flex flex-col justify-center text-left items-center space-y-6 text-parchment">
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <span className="text-4xl -mt-1 font-cinzel font-semibold text-bronze">ᛋ</span>
                <h1 className="font-cinzel text-4xl border-b-2 border-bronze">PROJECTS</h1>
            </div>
            <div>
                {projectInfo.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        projectTitle={proj.projectTitle}
                        shortDescription={proj.shortDescription}
                        fullDescription={proj.fullDescription}
                        note={proj.note}
                        techStack={proj.techStack}

                    />
                ))}
            </div>
        </div>
    )

}