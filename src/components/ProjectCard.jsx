import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Package } from "lucide-react";

export default function ProjectCard({ projectTitle, shortDescription, fullDescription, note, techStack }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="w-full max-w-2xl bg-charcoal border-2 border-bronze text-parchment">
            <CardHeader className="space-y-6">
                <CardTitle className="text-2xl">{projectTitle}</CardTitle>
                <CardDescription className="text-lg">
                    {shortDescription}
                </CardDescription>
            </CardHeader>

            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="flex max-w-3xl flex-col gap-2"
            >
                <div className="flex ml-6 items-center justify-between">
                    <h4 className="font-semibold">View Details</h4>
                    <CollapsibleTrigger asChild>
                        <Button className="hover:text-bronze hover:scale-125 transition-all duration-200">
                            <ChevronsUpDown />
                        </Button>
                    </CollapsibleTrigger>
                </div>

                <CollapsibleContent>
                <div className="flex flex-col gap-2">
                    <CardContent>
                        <div className="rounded-xl border-2 border-bronze px-4 py-2">
                            <h4 className="mb-4 font-bold text-lg">Project Description</h4>
                            <p className="mb-4">
                                {fullDescription}
                            </p>
                            {note && (
                                <p className="mb-12"><em className="text-bronze">Note:</em> {note}</p>
                            )}
                            <h4 className="mb-4 font-bold text-lg">Tech Stack</h4>
                            <ul>
                                {techStack.map((tech, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        {tech.icon ? (
                                            <i className={`${tech.icon} text-2xl text-bronze`}></i>
                                        ) : (
                                            <Package className="text-bronze"/> // empty spacer for no icons
                                        )}
                                        <span className="text-parchment">{tech.techName}</span>
                                        {tech.comment && (
                                            <p className="text-bronze">{`(${tech.comment})`}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </div>
                </CollapsibleContent>
            
            </Collapsible>
            
        </Card>
    )

}