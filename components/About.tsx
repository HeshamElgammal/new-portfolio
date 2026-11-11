"use client";

import { motion } from "framer-motion";
import { Code, Users, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { containerVariants, itemVariants } from "@/lib/animations";
import { brand } from "@/lib/brand";
import { siteCopy } from "@/lib/site-copy";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Mobile Development",
      description: "React Native, JavaScript, Firebase, Redux",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Web Development",
      description: "Next.js, TypeScript, Tailwind CSS, React",
      color: "text-purple-500",
    },
    {
      icon: Users,
      title: "Backend & Database",
      description: "Node.js, PostgreSQL, MongoDB, Express.js",
      color: "text-green-500",
    },
    {
      icon: Code,
      title: "Development Tools",
      description: "Git, VS Code, Hostinger VPS, API Development",
      color: "text-orange-500",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-shell bg-surface scroll-mt-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl min-h-[28rem]"
        >
          <SectionHeader
            eyebrow="The Studio"
            beforeHighlight=""
            highlight={brand.name}
            subtitle={siteCopy.aboutLead}
          />

          <div className="items-center gap-10 lg:gap-14 grid lg:grid-cols-[320px_minmax(0,1fr)]">
            <motion.figure
              variants={itemVariants}
              className="justify-self-center lg:justify-self-start w-full max-w-[320px]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg aspect-square bg-slate-900">
                <img
                  src={brand.profileImage}
                  alt={brand.profileImageAlt}
                  title={`${brand.name} — ${brand.jobTitle}`}
                  width={1200}
                  height={1200}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
                />
              </div>
              <figcaption className="mt-3 font-medium text-slate-600 dark:text-slate-400 text-sm text-center lg:text-left">
                {brand.name} — {brand.jobTitle}
              </figcaption>
            </motion.figure>

            <div>
              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="mb-4 font-display font-bold text-slate-900 dark:text-white text-2xl">
                  About {brand.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {siteCopy.aboutSupport}
                </p>
                <p className="mt-4 font-medium text-slate-700 dark:text-slate-300 text-sm">
                  {siteCopy.heroSince}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-2xl">
                  What I deliver
                </h3>

                <div className="gap-6 grid md:grid-cols-2">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.title}
                      variants={itemVariants}
                      className="modern-card-soft p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-lg bg-gray-100 dark:bg-dark-600 ${skill.color}`}
                        >
                          <skill.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                            {skill.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
