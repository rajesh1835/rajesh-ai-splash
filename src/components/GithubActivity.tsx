import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const GithubActivity = () => {
    return (
        <section id="github-activity" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        GitHub Activity
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My recent open source contributions and coding activity
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 bg-background/50">
                        <CardTitle className="text-xl flex items-center gap-2">
                            <Github className="w-6 h-6" />
                            Contribution Graph
                        </CardTitle>
                        <Button variant="outline" size="sm" asChild>
                            <a href="https://github.com/rajesh1835" target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-6 overflow-x-auto bg-white/50 dark:bg-black/20">
                        <div className="min-w-[800px] flex justify-center">
                            <img
                                src="https://ghchart.rshah.org/rajesh1835"
                                alt="Rajesh's Github Chart"
                                className="w-full"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default GithubActivity;
