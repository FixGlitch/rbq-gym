export default function Features() {
  const features = [
    {
      id: "01",
      title: "ENTRENAMIENTO PERSONAL",
      description: "Nuestro gimnasio ofrece sesiones de entrenamiento personalizadas con entrenadores personales certificados que crean planes de entrenamiento personalizados basados en objetivos individuales."
    },
    {
      id: "02",
      title: "EQUIPAMIENTO",
      description: "Nuestro gimnasio está equipado con una amplia variedad de máquinas de última generación, diseñadas específicamente para optimizar cada aspecto de tu entrenamiento diario."
    },
    {
      id: "03",
      title: "RECOMENDACIONES DE NUTRICION",
      description: "Una buena nutrición es fundamental para complementar tu entrenamiento y alcanzar tus objetivos de salud y bienestar. En nuestro gimnasio, creemos que una alimentación equilibrada no solo mejora tu rendimiento físico para una vida más saludable."
    },
    {
      id: "04",
      title: "PROGRAMAS ESPECIALES",
      description: "En nuestro gimnasio, entendemos que cada persona tiene objetivos únicos y diferentes necesidades en su camino hacia un estilo de vida saludable. Por eso, hemos desarrollado una variedad de programas especializados diseñados para ayudarte a alcanzar tus metas específicas de manera efectiva y segura."
    }
  ]

  return (
    <section id="services" className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            POR QUE <span className="text-[#15709F] ">ELEGIRNOS</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center">
            Los entrenamientos en el gimnasio ofrecen una experiencia versátil y 
            personalizable, lo que permite a todos establecer objetivos de fitness 
            específicos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="border border-[#15709F] /20 rounded-lg p-8 bg-[#121212]/50"
            >
              <div className="text-4xl font-bold text-white mb-6">
                {feature.id}
              </div>
              <h3 className="text-[#15709F]  text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

