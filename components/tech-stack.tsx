import { techStackInfo } from "@/constant/tech-stack-info";

export default function TechStack() {
  return (
    <section>
      <div>
        <h2 className="text-xl text-center py-4">使用した技術は、こちら!!!</h2>
        <div className="grid gap-3 sm:grid-cols-2  md:grid-cols-3 ">
          {techStackInfo.techStack.map((tech) => (
            <div
              key={tech.title}
              className="flex flex-col items-center gap-2 border p-4 rounded-lg "
            >
              {tech.techComponent && (
                <div className="">
                  <tech.techComponent />
                </div>
              )}
              <p>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
