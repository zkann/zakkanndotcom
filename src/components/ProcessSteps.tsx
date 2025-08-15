"use client";

import React, { useEffect, useRef, useState } from "react";
import { Phone, Search, Zap, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon | string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  process: string[];
  deliverables: string[];
  timeInvestment: string;
  successMetric: string;
}

interface ProcessStepsProps {
  customSteps?: Step[];
}

export default function ProcessSteps({ customSteps }: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollTrackingDisabled, setScrollTrackingDisabled] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Icon mapping for string-based icons
  const iconMap: Record<string, LucideIcon> = {
    'phone': Phone,
    'search': Search,
    'zap': Zap,
    'trending-up': TrendingUp,
  };

  const defaultSteps: Step[] = [
    {
      icon: Phone,
      title: "Book a free call",
      subtitle: "Audit & roadmap in 30 minutes",
      headline: "Get Your Custom Automation Roadmap",
      description:
        "In 30 minutes, we'll audit your processes and identify your biggest time-wasters. You'll leave with a clear plan for automation, whether you work with us or not.",
      process: [
        "Walk through your daily/weekly workflows",
        "Identify manual tasks costing you the most time",
        "Calculate ROI potential for top opportunities",
        "Answer questions about your business goals",
      ],
      deliverables: [
        "📊 Custom automation roadmap",
        "💰 ROI projections for top 3 opportunities",
        "📋 Prioritized action plan",
      ],
      timeInvestment: "30 minutes",
      successMetric:
        "3+ automation opportunities identified with projected savings",
    },
    {
      icon: Search,
      title: "Deep dive & scope",
      subtitle: "Map workflows, plan first automation",
      headline: "Map Your Workflows & Plan Your First Win",
      description:
        "We go beyond surface-level to understand how work actually gets done. By the end of this week, your first automation is fully scoped and ready to build.",
      process: [
        "Shadow your team virtually through real workflows",
        "Document current tools and integration points",
        "Identify the highest-impact automation to build first",
        "Create detailed technical specifications",
      ],
      deliverables: [
        "🗺️ Complete process maps",
        "📋 Technical project scope",
        "⏱️ Detailed timeline and milestones",
        "🎯 Success criteria and metrics",
      ],
      timeInvestment: "2-3 hours (interviews & reviews)",
      successMetric:
        "First automation scoped with clear ROI and timeline",
    },
    {
      icon: Zap,
      title: "Build & deploy",
      subtitle: "Your automation goes live in 1 week",
      headline: "Your First Automation Goes Live",
      description:
        "From concept to working automation in 5 days. You'll see immediate results while we handle all the technical complexity.",
      process: [
        "Days 1-2: Build in sandbox environment",
        "Days 3-4: Demo working version for your feedback",
        "Day 5: Refine based on input and go live",
        "Handover with training and documentation",
      ],
      deliverables: [
        "🔧 Fully functional automation",
        "🎥 Training video for your team",
        "📖 Documentation and troubleshooting guide",
        "📞 30 days of support included",
      ],
      timeInvestment: "1 hour (feedback and training)",
      successMetric:
        "Automation saves projected hours within first week",
    },
    {
      icon: TrendingUp,
      title: "Scale & optimize",
      subtitle: "Continuous automations & improvements",
      headline: "Build Your Automation Pipeline",
      description:
        "Systematic rollout of new automations every 2-4 weeks, plus continuous optimization of existing workflows based on real performance data.",
      process: [
        "Sprint planning every 2 weeks for next automation",
        "Build and deploy new workflows on schedule",
        "Track performance and optimize based on usage",
        "Quarterly strategy reviews for new opportunities",
      ],
      deliverables: [
        "📈 Real-time performance dashboard",
        "🔄 Growing library of automations",
        "📊 Weekly ROI and efficiency reports",
        "🎯 Quarterly optimization recommendations",
      ],
      timeInvestment: "30 minutes weekly (planning & reviews)",
      successMetric:
        "10-20 hours/week saved within 90 days",
    },
  ];

  // Use custom steps if provided, otherwise use default steps
  const steps = customSteps || defaultSteps;

  // Helper function to get the icon component
  const getIconComponent = (icon: LucideIcon | string): LucideIcon => {
    if (typeof icon === 'string') {
      return iconMap[icon] || Phone; // fallback to Phone if icon not found
    }
    return icon;
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only enable scroll tracking on non-mobile devices and when not disabled
    if (isMobile || scrollTrackingDisabled) return;

    const handleScroll = () => {
      if (!stepsRef.current) return;
      const items = stepsRef.current.querySelectorAll(".step-item");
      const containerTop = stepsRef.current.offsetTop;
      const containerHeight = stepsRef.current.offsetHeight;
      const stepHeight = containerHeight / items.length;
      const scrollPosition = window.scrollY - containerTop + window.innerHeight / 2;
      const newActiveStep = Math.floor(scrollPosition / stepHeight) + 1;
      if (newActiveStep >= 1 && newActiveStep <= items.length) {
        setActiveStep(newActiveStep);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, scrollTrackingDisabled]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[562px]">

      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8">
        {/* Steps Column */}
        <div ref={stepsRef} className="flex flex-col gap-15 w-full xl:max-w-[413px]">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveStep(index + 1);
                setScrollTrackingDisabled(true);
              }}
              className={`how-to-step step-item flex gap-5 transition-all duration-300 w-full text-left ${
                activeStep === index + 1 ? 'active-how-to-step' : ''
              }`}
            >
              <div className="step-number relative">
                                  <div
                    className={`how-to-button w-[70px] h-[70px] rounded-lg border-2 flex items-center justify-center text-2xl transition-colors duration-300 ${
                      activeStep === index + 1
                        ? ""
                        : "border-slate-300 text-slate-500"
                    }`}
                  >
                    {React.createElement(getIconComponent(step.icon), { size: 24 })}
                  </div>
              </div>
              <div className="flex-1">
                <h4 className="text-base leading-6 font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-600 mt-1 text-sm leading-6">{step.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Details Column */}
        <div className="sticky top-24 min-h-[180px] how-to-images w-full flex justify-center">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 w-full">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold text-slate-900">{steps[activeStep - 1].headline}</h3>
              <p className="text-slate-700 mt-2 leading-7">{steps[activeStep - 1].description}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-semibold text-slate-900 mb-2">Process</div>
                  <ul className="space-y-2.5 text-slate-700 text-base">
                    {steps[activeStep - 1].process?.map((item: string, i: number) => (
                      <li key={i} className="relative pl-5 leading-7">
                        <span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 mb-2">What you get</div>
                  <ul className="space-y-2.5 text-slate-700 text-base">
                    {steps[activeStep - 1].deliverables?.map((item: string, i: number) => (
                      <li key={i} className="leading-7">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Your time investment</div>
                  <div className="text-sm font-medium text-slate-900 mt-1">{steps[activeStep - 1].timeInvestment}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Success metric</div>
                  <div className="text-sm font-medium text-slate-900 mt-1">{steps[activeStep - 1].successMetric}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

