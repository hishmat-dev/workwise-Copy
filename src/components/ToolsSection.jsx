import {
  Calendar,
  Users,
  Shield,
  Globe,
  MessageSquare,
  BarChart,
} from "lucide-react"
import RevealOnScroll from "./ui/RevealOnScroll"

function ToolsSection() {
  const tools = [
    {
      icon: Calendar,
      title: "Project/Task Management",
      description: "Team member inclusion, scheduling, tasks, and progress tracking",
      color: "from-blue-hosta to-medium-turquoise",
      delay: 0,
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Including remote hiring, leaves, loans, resignations, complains, rewards, appraisals and much more",
      color: "from-medium-turquoise to-waikawa-grey",
      delay: 100,
    },
    {
      icon: Shield,
      title: "Document Management",
      description: "Including a complete office suite and digital equivalents",
      color: "from-waikawa-grey to-vivid-cerise",
      delay: 200,
    },
    {
      icon: Globe,
      title: "Process/Approval Management",
      description: "Expenses, Travel and much more",
      color: "from-vivid-cerise to-bright-sun",
      delay: 300,
    },
    {
      icon: MessageSquare,
      title: "Communication Center",
      description: "Email, Chat, Video Conferencing, and integrated messaging",
      color: "from-bright-sun to-blue-hosta",
      delay: 400,
    },
    {
      icon: BarChart,
      title: "Finance Management",
      description: "Payroll processing, lending solutions, profit & loss tracking, and comprehensive financial oversight",
      color: "from-blue-hosta to-vivid-cerise",
      delay: 500,
    },
  ]

  return (
    <section className="py-10 bg-gradient-to-br from-slate-200 via-white to-slate-300 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <RevealOnScroll animation="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-waikawa-grey">Solution Tools</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need to streamline your workflow and boost productivity in one integrated platform.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <RevealOnScroll key={index} animation="fade-up" delay={tool.delay}>
                <div className="relative group min-h-[100px] p-3 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Background Blur Gradient */}
                  <div className={`absolute inset-0 z-0 rounded-xl blur-2xl opacity-20 pointer-events-none bg-white hover:cursor-pointer`} />
                  
                  <div className="relative z-10 flex items-start gap-4 h-full">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-vivid-cerise transition-colors duration-300">{tool.title}</h3>
                      <p className="text-slate-600 text-sm">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
