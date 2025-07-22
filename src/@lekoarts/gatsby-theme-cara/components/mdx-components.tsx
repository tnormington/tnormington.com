import * as React from "react"
import ProjectCard from "./project-card"
import ContactForm from "./contact-form"

const MdxComponents = {
  ProjectCard: ({ link, title, bg, color, children, ...props }: any) => (
    <ProjectCard {...props} link={link} title={title} bg={bg} color={color}>
      {children}
    </ProjectCard>
  ),
  ContactForm: () => <ContactForm />
}

export default MdxComponents