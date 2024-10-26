import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProjectNotes = () => {
  const notes = [
    {
      title: "LANL Risk Modeling Project",
      description: "Notes and findings from the Los Alamos National Laboratory risk modeling project",
      content: `
        Risk Modeling Project Notes:

        1. Risk Assessment Framework
        - Developed comprehensive risk assessment methodology
        - Integrated multiple data sources
        - Created standardized evaluation criteria

        2. Key Components
        - Threat analysis
        - Vulnerability assessment
        - Consequence evaluation
        - Risk calculation and prioritization

        3. Implementation Strategy
        - Phased approach to deployment
        - Regular validation and updates
        - Stakeholder engagement throughout process

        4. Outcomes
        - Enhanced risk visibility
        - Improved decision-making process
        - Better resource allocation
        
        5. Future Considerations
        - Continuous improvement of models
        - Integration with existing systems
        - Training and documentation needs
      `
    }
  ];

  return (
    <div className="space-y-4">
      {notes.map((note, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{note.title}</CardTitle>
            <CardDescription>{note.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {note.content}
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectNotes;